---
title: "News"
translation_key: news
layout: textlay
sitemap: false
permalink: /allnews.html
---

<h1 id="news">{% include localized.html key="news" %}</h1>

{% assign news = site.data.news | sort: "date" | reverse %}
{% for article in news %}
<p lang="en"><strong>{{ article.date }}</strong><br>
{{ article.headline | markdownify | remove: '<p>' | remove: '</p>' | strip }}</p>
{% endfor %}
