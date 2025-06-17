---
layout: page
title: Showcase
permalink: /showcase/
---

## Vad jag bygger när ingen ser
Welcome to my showcase – a digital display window for what I create when meetings go quiet, coffee goes cold, and Flow crashes for the third time. Here you'll find projects I'm proud of, visualizations that make executives happy, and code that actually works. Everything with a focus on sustainable data infrastructure, clear business value, and a touch of elegance.

---

{% assign showcases = site.showcase | sort: 'date' | reverse %}

<ul class="showcase-list">
  {% for item in showcases %}
    <li>
      <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
      <p><small><strong>{{ item.date | date: "%Y-%m-%d" }}</strong></small></p>
      <p>{{ item.excerpt | strip_html | truncatewords: 30 }}</p>
      {% if item.image %}
        <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
      {% endif %}
      <p><a href="{{ item.url | relative_url }}">Se mer →</a></p>
    </li>
  {% endfor %}
</ul>
