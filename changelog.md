---
title: Changelog
---

{% assign category = "release" %}
{% assign category_posts = site.posts | where: 'category', category %}

{% for post in category_posts %}

{% capture release %}

{% assign version = post.title 
    | split: "and" 
    | first 
    | split: "Cockpit " 
    | last 
    | split: " " 
    | first
    | round: 5 %}

{% comment %}
    Try to extract the version again, but from the content this time
{% endcomment %}
{% if version == 0 %}
{% assign version = post.content | markdownify | strip_html | split: "Cockpit " | last | split: " " | first | round: 5 %}
{% endif %}

{% assign datenum = post.date | date: "%Y%m%d" %}

{% if version != 0 %}
### [Version {{ version }}]({{ post.url }})
{% else %}
### [{{ post.title }}]({{ post.url }})
{% endif %}

<time class="published" datetime="{{ post.date | date_to_xmlschema }}">
{{ post.date | date: "%Y-%m-%d" }}
</time>

{% include post.html post=post markdown_list=true %}

{% if version != 0 %}
[view release on GitHub](https://github.com/cockpit-project/cockpit/releases/tag/{{ version}})
{% endif %}
{% endcapture %}

<article id="{{post.date | date: "%Y-%m-%d"}}">{{ release | markdownify }}</article>
{% endfor %}