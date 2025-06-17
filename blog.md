---
layout: page
title: Blog
permalink: /blog/
---
Welcome to my blog! This is where I share thoughts, insights, and experiences from my work with data, BI, transformations, and ever-evolving technology. 
You'll find everything from hands-on tips in Power BI, sql, dbt to good data practices


---

<h3>Latest posts</h3>
<ul>
  {% for post in site.posts %}
    <li>
<a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%Y-%m-%d" }})</small>
    </li>
  {% endfor %}
</ul>
