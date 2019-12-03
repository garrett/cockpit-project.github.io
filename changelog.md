{% assign category = "release" %}

<h1>Changelog</h1>

{% assign category_posts = site.posts | where: 'category', category %}

{% for post in category_posts %}
{% assign version = post.title 
    | split: "and" 
    | first 
    | split: "Cockpit " 
    | last 
    | split: " " 
    | first
    | round: 5 %}

{% assign datenum = post.date | date: "%Y%m%d" %}

<h2>
<time class="published" datetime="{{ post.date | dated_to_xmlschema }}">
{{ post.date | date: "%Y-%m-%d" }}
</time>
</h2>

{% if version != 0 %}
### [Version {{ version }}]({{ post.url }})
{% else %}
### [{{ post.title }}]({{ post.url }})
{% endif %}

<pre>
{{ version }}
{{ post.title }}
</pre>

{% include post.html post=post markdown_list=true %}

{% endfor %}