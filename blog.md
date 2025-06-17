---
layout: page
title: Bloggen
permalink: /blogg/
---

## Senaste från bloggen

Välkommen till min blogg! Här delar jag med mig av tankar, insikter och erfarenheter från mitt arbete med data, BI, transformationer och teknik i ständig rörelse. Det blir allt från hands-on tips i Power BI och dbt till mer personliga reflektioner kring faderskap, motstånd och mod. 

Jag tror på transparens, på att bygga saker som håller – och på att data aldrig är bara siffror. Det handlar om människor, beslut och riktning. Och ibland, bara ibland, om en riktigt vass DAX-formel.

---

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p><small><strong>{{ post.date | date: "%Y-%m-%d" }}</strong></small></p>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      <p><a href="{{ post.url }}">Läs mer →</a></p>
    </li>
  {% endfor %}
</ul>
