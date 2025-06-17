---
layout: page
title: Showcase
permalink: /showcase/
---

## Vad jag bygger när ingen ser

Välkommen till min showcase – ett digitalt skyltfönster för det jag skapar när möten är tysta, kaffet kallnat och Flow har kraschat tre gånger. Här hittar du projekt jag är stolt över, visualiseringar som gör chefer glada och kod som faktiskt funkar. Allt med ett fokus på hållbar datainfrastruktur, tydlig affärsnytta och en nypa elegans.

---

{% assign showcases = site.showcase | sort: 'date' | reverse %}

<ul class="showcase-list">
  {% for item in showcases %}
    <li>
      <h3><a href="{{ item.url }}">{{ item.title }}</a></h3>
      <p><small><strong>{{ item.date | date: "%Y-%m-%d" }}</strong></small></p>
      <p>{{ item.excerpt | strip_html | truncatewords: 30 }}</p>
      {% if item.image %}
        <img src="{{ item.image }}" alt="{{ item.title }}" style="max-width: 100%; margin-top: 1rem;">
      {% endif %}
      <p><a href="{{ item.url }}">Se mer →</a></p>
    </li>
  {% endfor %}
</ul>
