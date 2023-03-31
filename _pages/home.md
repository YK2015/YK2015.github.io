---
title: "Home"
layout: homelay
sitemap: false
permalink: /
---

<style>
code {padding: 6px 8px; font-size: 90%;}
</style>

Welcome to my personal homepage! I am currently working as an associate professor in  [School of Mathematics and Statistics](https://math.gdut.edu.cn) of [Guangdong University of Techonology](https://www.gdut.edu.cn). My focus is on numerical methods for the Kohn--Sham equatio and complex Langevin methods in quantum chromodynamics.

In the area of the Kohn-Sham equation, I am working on several aspects, including the design of adaptive finite element methods for discretization, the development of orthogonality-free methods for the eigenvalue problem, and the generation of quality initial guesses to reduce divergence issues related to nonlinearity.

Regarding complex Langevin methods in quantum chromodynamics, I has shown interest in the development of stabilization techniques. These approaches aim to prevent divergence and converge to the correct results obtained through these methods.



<br/>

<div class="well-md">
  <h3>Funding</h3>
  <div style='display:block; text-align:center; margin-left:auto; margin-right:auto;'>
   {% for funder in site.data.funders %}{% if funder.url %}<a href="{{funder.url}}" target="_blank"><img src='/images/logos/{{ funder.image }}' style='max-height: 70px; max-width: 170px;'/></a>{% else %}<img src='/images/logos/{{ funder.image }}' class='mycenter' style='max-height: 70px; max-width: 170px;'/>{% endif %}   {% endfor %}
  </div>
</div>
