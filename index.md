---
title: Cockpit Project
layout: essential
class: front-page
---
{% include page_header.html %}
{% capture newline %}
{% endcapture %}

{% comment %}
##### Content #####
First we set up & capture the content, then we render it in the scaffolding below.
{% endcomment %}


{% capture intro-lede %}
The [easy-to-use](#easy-to-use),
[integrated](#integrated),
[glanceable](#glanceable),
and [open](#open-ended)
web-based interface for your servers
{% endcapture %}

{% capture intro-text %}
## Introducing Cockpit

Cockpit is a web-based graphical interface for servers and is intended for everyone, especially those who are:

{:.audience-list}
- **new to Linux** (including Windows admins)
- **familiar with Linux** and want an easy, graphical way to administer servers
- **expert admins** who use other tools and want to quickly check-in on systems

## Compatible with your existing workflows

Have a favorite app or command line tool that you use on your servers? You can keep using it. Cockpit uses the same system tooling you would use from the command line. You can switch back and forth between Cockpit and whatever else you like. Cockpit even has a built-in terminal, which is useful when you connect from a non-Linux device.

## Cockpit works (nearly) everywhere

You can install Cockpit on the major distributions, including:

{:.distro-logos}
{%
  for distro in site.data.distros
%}- [![{{ distro.name }}](/images/site/os-{{ distro.first}}.svg)]({{ site.baseurl }}/running.html#{{ distro.first }})
{% endfor %}

Once Cockpit is up and running, you can access systems from all major web browsers on any operating system (including Windows, MacOS, and Android).

## Simple to use

{:style="text-decoration-skip-ink:none"}
After installing and enabling Cockpit, accessing Cockpit is usually as easy as visiting port 9090 on your server (for example: <https://localhost:9090/> in a browser on the same machine as Cockpit).

But don't worry&mdash;Cockpit itself doesn't eat resources or even run in the background when you're not using it. It only starts on demand, thanks to using systemd socket activation.

## Using Cockpit

Using Cockpit means you don't *have to* remember commands at a command-line. But there's a whole lot more you can do with Cockpit:

{:.using-cockpit}
- Keep an eye on your network
- Easily configure your firewall
- Manage your storage (including RAID and LUKS partitions)
- Create and manage virtual machines
- Download and run containers
- Browse and search system logs
- Inspect a system's hardware
- Upgrade software
- Keep tabs on performance
- Manage user accounts
- Inspect and interact with systemd-based services
- Use a terminal on your remote server in your local web browser
- Log in to remote servers
- Extend Cockpit's functionality by installing a growing list of apps and add-ons

*[RAID]: Redundant Array of Inexpensive Disks
*[LUKS]: Linux Unified Key Setup (encryption)

Basically, you can think of Cockpit like a graphical "desktop interface", but for your servers.
{% endcapture %}

{% assign blurbs_highlight = 6 %}

{% capture blurbs %}

## Easy to use

### Discoverable
Cockpit makes GNU/Linux discoverable. See your server in a web browser and perform system tasks with a mouse. It's easy to start containers, administer storage, configure networks, and inspect logs.

### Designed & tested
Cockpit is designed with your goals in mind. We also routinely test Cockpit with usability studies to make it work the way you'd expect. As a result, Cockpit gets easier to use all the time.

### Team-friendly
Cockpit is friendly enough for those new to Linux and useful for seasoned admins too.

### Packages included
[Installing and running Cockpit]({{ site.baseurl }}/running.html) is simple. It's already included in most of the major distributions.

---

## Integrated

### Plays well with others
You can jump between a terminal and the web interface at any time. There's even an embedded terminal in Cockpit.

Keep using the command line, Ansible, and your other favorite tools and add Cockpit to the mix with no issues.

A service started via Cockpit can be stopped in a terminal. Likewise, if an error occurs in a terminal, it's also in Cockpit's journal.

### Sign in like normal
By default, Cockpit uses [your system's normal user logins and privileges]({{ site.baseurl }}/guide/latest/privileges). You don't need to set up any special accounts. Network-wide logins are also supported through [single-sign-on]({{ site.baseurl }}/guide/latest/sso) and other [authentication]({{ site.baseurl }}/guide/latest/authentication) techniques.

### Self-contained
You don't have to worry about setting up a webserver just to use Cockpit.

### Uses existing APIs
Cockpit uses APIs that already exist on the system. It doesn't reinvent subsystems or add a layer of its own tooling.

### Efficient

Cockpit only uses memory and CPU when active. When inactive, there is no extra load on your server.

---

## Glanceable

### System overview
Immediately understand the health of your server. Cockpit's overview page shows current statistics and the status of your system.

### Multi-server
Monitor and administer [several servers]({{ site.baseurl }}/guide/latest/feature-machines.html) at the same time. Add new hosts and your main server will look after its buddies.

### Troubleshoot
Fix pesky problems with ease.

- Diagnose network issues
- Spot and react to misbehaving virtual machines
- Inspect SELinux logs and fix common violations in a click

---

## Open-ended

### Pocket-sized
Around the office or on the road? Use your phone's browser to check and manage systems.

### Learn with Cockpit
Not sure what you can do with your servers? Explore Cockpit's friendly interface and use features you might not even realized existed!

### Extendable
Have custom tasks? You can [write your own modules]({{ site.baseurl }}/blog/cockpit-starter-kit.html) to plug into Cockpit.

### Free & free
Cockpit's completely free to use and [available under the GNU LGPL](https://github.com/cockpit-project/cockpit/blob/master/COPYING).

{% endcapture %}


{% capture footer_links %}
About Cockpit
: [Project Ideals and Goals](ideals.html)
: [Cockpit Blog](blog)
: [Blog Feeds](blog/feeds/)
: [Search this site](search.html)
{:.col.footer-links-1}

[Running Cockpit](running.html)
: [Deployment guide](guide/latest/guide.html)
: [Feature internals](guide/latest/features.html)
: [Release Notes and Videos](blog/category/release.html)
: [File a bug in the issue tracker](https://github.com/cockpit-project/cockpit/issues)
{:.col.footer-links-2}

[Contributing](https://github.com/cockpit-project/cockpit/wiki/Contributing)
: [Get the source](https://github.com/cockpit-project/cockpit)
: [Join the mailing list](https://lists.fedorahosted.org/archives/list/cockpit-devel@lists.fedorahosted.org/)
: [IRC #cockpit on Freenode.net](irc://irc.freenode.net:6667/cockpit)
: [Developer tutorials](blog/category/tutorial.html)
: [Developer API reference](guide/latest/development.html)
{:.col.footer-links-3}

*[Feeds]: Atom (similar to RSS), for use in feed readers
{% endcapture %}


{% capture badge %}
{% assign release = site.posts | where: "category", "release" | first %}
{% assign version = release.title | split: "and" | first | split: " " | last %}
<a href="{{ site.baseurl }}{{ release.url }}" title="{{ release.summary }}">
  <span class="badge-new">Just released:</span>
  <span class="badge-version">Version {{ version }}</span>
  <span class="badge-date">{{ release.date | date: "%-d %b %Y" }}</span>
</a>
{% endcapture %}

{% capture screenshots %}
[![Storage screenshot]({{ site.baseurl }}/images/site/screenshot-storage.png)]({{ site.baseurl}}/images/site/screenshot-storage.png)
{:.screenshot.zoom}

[![Network screenshot]({{ site.baseurl }}/images/site/screenshot-network.png)]({{ site.baseurl }}/images/site/screenshot-network.png)
{:.screenshot.zoom}

[![Dashboard screenshot]({{ site.baseurl }}/images/site/screenshot-dashboard.png)]({{ site.baseurl }}/images/site/screenshot-dashboard.png)
{:.screenshot.zoom}
{% endcapture %}

{% comment %}
##### Scaffolding #####
{% endcomment %}

{% capture output %}

<section class="intro intro-background">
  <div class="intro-lede">
    {{ intro-lede | markdownify }}
  </div>
  <div class="planes"></div>
  <div class="badge">
    {{ badge }}
  </div>
</section>


<div id="page-wrap" class="page-content" role="main">
  <section class="wrapper">

    <section class="intro-text">{{ intro-text | markdownify }}</section>

    <section class="blurbs">
      {% assign blurbs_rendered = blurbs | split: '---' %}
      {% for blurb in blurbs_rendered %}
        {% if blurbs_highlight > forloop.index0 %}
          {% assign highlight = "highlight" %}
        {% else %}
          {% assign highlight = "" %}
        {% endif %}

        {% assign headline = blurb
        | markdownify
        | split: newline
        | where_exp: "line", "line contains 'h2'"
        | first
        | strip_html
        %}
        <section class="blurb {{ highlight }} section--{{ headline | slugify }}">{{ blurb | markdownify }}</section>
      {% endfor %}
    </section>
  </section>
</div>

<footer class="footerlinks">
  <div class="wrapper">
    {{ footer_links | markdownify }}
  </div>
</footer>
{% include page_footer.html %}

<script>
<!--
$(function(){
  $(document).on('click', 'a.screenshot.zoom, .screenshot.zoom a', function(ev){
    desc = $('img', this).attr('alt');
    code = $('<div id="imagePreview" class="image-container zoom-out"><img src="' + this.href + '" alt="' + desc + '"><p>' + desc + "<\/p><\/div>");
    $('body').append(code);
    ev.preventDefault();
  }).on('click', '#imagePreview', function(ev){
    $(this).fadeOut(200, function(){
      $(this).remove();
    });
  });
});
//-->
</script>
{% endcapture %}{{ output }}
