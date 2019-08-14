(function (){
    // Stub translation function
    function _(message) {
        return message;
    }

    // Simple enough formatting
    function format(message, reason) {
        console && console.warn(message.replace("$0", reason));
        console.log(reason);
    }

    // Simple disableLogin replacement
    function disableLogin(name) {
        format("Missing support for $0", name);
    }

    // Error handler
    function fatal(message) {
        return message;
    }

    // Success handler
    function success() {
        console.log("Hooray!");
    }

    // A straight-up copy/paste of Cockpit's login.js
    // (with just a disableLogin removed at the top)
    function requisites() {
        function req(name, obj) {
            var ret;
            try {
                ret = (obj[name]);
            } catch (ex) {
                fatal(format(_("The web browser configuration prevents Cockpit from running (inaccessible $0)"), name));
                throw ex;
            }
            if (ret === undefined) {
                disableLogin(name);
                return false;
            }
            return true;
        }

        function css() {
            /*
             * Be certain to use parenthesis when checking CSS strings
             * as Edge is oddly particular.
             *
             * Instead of "display: inline", use:
             * "(display: inline)"
             *        or
             * "display", "inline"
             */
            var args = [].join.call(arguments, ": ");

            if (!window.CSS.supports.apply(this, arguments)) {
                fatal(format(_("The web browser configuration prevents Cockpit from running (inaccessible $0)"), args));
                disableLogin(args);
                return false;
            }
            return true;
        }

        return ("MozWebSocket" in window || req("WebSocket", window)) &&
               req("XMLHttpRequest", window) &&
               req("sessionStorage", window) &&
               req("JSON", window) &&
               req("defineProperty", Object) &&
               req("console", window) &&
               req("pushState", window.history) &&
               req("textContent", document) &&
               req("CSS", window) &&
               req("supports", window.CSS) &&
               css("display", "flex") &&
               css("display", "grid");
    }

    // Bind an event listener for when the page has loaded
    document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById("browser-supported") &&
            requisites() &&
            success();
    });
}());