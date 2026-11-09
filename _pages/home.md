---
title: "Home"
translation_key: home
layout: homelay
sitemap: false
permalink: /
---

<style>
code {padding: 6px 8px; font-size: 90%;}
</style>

{% include localized.html key="home_intro" block=true %}


<br/>

<div class="well-md">
  <h3>📰 {% include localized.html key="news" %}</h3>
  {% comment %}Show the current and previous calendar years; keep older entries in All news.{% endcomment %}
  {% assign current_year = site.time | date: "%Y" | plus: 0 %}
  {% assign first_news_year = current_year | minus: 1 %}
  {% assign today = site.time | date: "%Y-%m-%d" %}
  {% assign news = site.data.news | sort: "date" | reverse %}
  <ul>
  {% for article in news %}
    {% assign article_year = article.date | date: "%Y" | plus: 0 %}
    {% if article_year >= first_news_year and article.date <= today %}
    <li lang="en">{{ article.date }}: {{ article.headline | markdownify | remove: '<p>' | remove: '</p>' | strip }}</li>
    {% endif %}
  {% endfor %}
  </ul>
  <p><a href="{{ '/allnews.html' | relative_url }}">{% include localized.html key="all_news" %} &rarr;</a></p>
</div>

