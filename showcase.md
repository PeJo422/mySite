---
layout: page
title: Showcase
permalink: /showcase/
---

## What I build when no one is watching!
Welcome to my showcase – a digital display window for what I create when meetings go quiet, coffee goes cold, and Flow crashes for the third time. Here you'll find projects I'm proud of, visualizations that make executives happy, and code that actually works. Everything with a focus on sustainable data infrastructure, clear business value, and a touch of elegance.

---

## What you'll find here
This space showcases my journey through data engineering and analytics. From Power BI dashboards that tell compelling stories to SQL solutions that scale, each project represents real-world challenges and the solutions that emerged from them. Think of it as my professional portfolio, but with less corporate speak and more honest insights about what actually works in the real world. You will also find my content on Git.

## The projects
Below you'll find a collection of my work, ranging from quick prototypes to full-scale implementations. Each project includes the story behind it, the challenges faced, and the lessons learned. Because in data engineering, the journey is often as important as the destination.

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
