---
layout: page
title: Bloggen
permalink: /blog/
---

## Senaste från bloggen

Välkommen till min blogg! Här delar jag med mig av tankar, insikter och erfarenheter från mitt arbete med data, BI, transformationer och teknik i ständig rörelse. Det blir allt från hands-on tips i Power BI och dbt


---

<h1>Senaste inläggen</h1>
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%Y-%m-%d" }})</small>
    </li>
  {% endfor %}
</ul>
