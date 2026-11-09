---
title: "About"
translation_key: about
layout: gridlay
sitemap: false
permalink: /about/
---

<h2 id="about">{% include localized.html key="profile" %}</h2>


{% for member in site.data.pi %}

<div class="row">
  <img src="{{ site.url }}{{ site.baseurl }}/images/team/{{ member.photo-large }}" class="img-responsive avatar-about" />
  <h3>{% include localized.html en=member.name zh=member.name_zh %}</h3>
  <i style="font-size:20px">{% include localized.html en=member.info zh=member.info_zh %}</i><br>

  <div class="profile-links" markdown="0">
    {% if member.website %}<a href="{{ member.website }}" target="_blank" rel="noopener" aria-label="Website"><i class="fa fa-home fa-3x" aria-hidden="true"></i></a>{% endif %}
    {% if member.email %}<a href="mailto:{{ member.email }}" aria-label="Email"><i class="fa fa-envelope-square fa-3x" aria-hidden="true"></i></a>{% endif %}
    {% if member.cv %}{% include cv-link.html member=member size="3x" %}{% endif %}
    {% if member.orcid %}<a href="{{ member.orcid }}" target="_blank" rel="noopener" aria-label="ORCID"><i class="ai ai-orcid-square ai-3x" aria-hidden="true"></i></a>{% endif %}
    {% if member.scholar %}<a href="{{ member.scholar }}" target="_blank" rel="noopener" aria-label="Google Scholar"><i class="ai ai-google-scholar-square ai-3x" aria-hidden="true"></i></a>{% endif %}
    {% if member.github %}<a href="{{ member.github }}" target="_blank" rel="noopener" aria-label="GitHub"><i class="fa fa-github-square fa-3x" aria-hidden="true"></i></a>{% endif %}
  </div>
  <ul class="profile-background" style="overflow: hidden">
  {% for index in (1..member.number_educ) %}
    {% assign education_key = 'education' | append: index %}
    {% assign education_zh_key = education_key | append: '_zh' %}
    {% assign education_en = member[education_key] %}
    {% assign education_zh = member[education_zh_key] %}
    <li>{% include localized.html en=education_en zh=education_zh %}</li>
  {% endfor %}
  </ul>
</div>

{% endfor %}

<h2 id="short-biography">{% include localized.html key="short_biography" %}</h2>

<div class="short-bio">
  {% include localized.html key="biography" block=true %}
</div>


{% if site.data.awards %}
<h2 id="awards">{% include localized.html key="awards" %}</h2>
<div class="rowl1" style="padding-top: 10px;">

{% for award in site.data.awards %}
{{ forloop.index }}. {% if award.name_url %}<a href="{{ award.name_url }}" target="_blank">{% endif %}<strong>{{ award.name }}</strong>{% if award.name_url %}</a>{% endif %} {% if award.organisation %} from {% if award.organisation_url %}<a href="{{ award.organisation_url }}" target="_blank">{% endif %} {{ award.organisation }}{% if award.organisation_url %}</a>{% endif %}{% endif %}{% if award.subtitle %}: {{ award.subtitle }}{% endif %} ({{ award.year }}).
{% endfor %}
</div>
{% endif %}

{% if site.data.grants %}
<h2 id="grants">{% include localized.html key="grants" %}</h2>
<div class="rowl1" style="padding-top: 10px;">
<ol>
{% for grant in site.data.grants %}
<li><strong>{% include localized.html en=grant.name zh=grant.name_zh %}</strong>{% if grant.organisation %}, {% include localized.html en=grant.organisation zh=grant.organisation_zh %}{% endif %}{% if grant.number %}, No. {{ grant.number }}{% endif %} ({{ grant.year }}){% if grant.note %}, {% include localized.html en=grant.note zh=grant.note_zh %}{% endif %}.</li>
{% endfor %}
</ol>
</div>
{% endif %}

{% if site.data.collaborators %}
<h2 id="collaborations">{% include localized.html key="collaborations" %}</h2>
<div class="rowl1" style="padding-top: 10px;">

{% for collaborator in site.data.collaborators %}
{{ forloop.index }}. {% if collaborator.name_url %}<a href="{{ collaborator.name_url }}" target="_blank">{% endif %}<strong>{% include localized.html en=collaborator.name zh=collaborator.name_zh %}</strong>{% if collaborator.name_url %}</a>{% endif %} ({% include localized.html en=collaborator.field zh=collaborator.field_zh %}, {% if collaborator.institution_url %}<a href="{{ collaborator.institution_url }}" target="_blank">{% endif %}{% include localized.html en=collaborator.institution zh=collaborator.institution_zh %}{% if collaborator.institution_url %}</a>{% endif %}).
{% endfor %}
</div>
{% endif %}

