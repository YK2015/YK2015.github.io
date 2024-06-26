---
title: "Research"
layout: gridlay
sitemap: false
permalink: /research/
---

# Research

<div class="rowl1">
  <img src="{{ site.url }}{{ site.baseurl }}/images/research/2023multimesh2.png" class="img-responsive" style="float: left; border-radius: 5px; width: 280px; height: 264px" />
  <h4>Multi-mesh adaptive finite element method for Kohn--Sham equation</h4>

  I am currently engaged in research on the multi-mesh adaptive method. This is due to the distinct behaviors exhibited by the Hartree potential and wavefunctions, such as varying decay rates and different regularities surrounding the nuclei. As a result, placing them in the same finite element space may not be the most suitable approach. We use a mult-mesh method based on our prior adaptive mesh method to discretize the Kohn--Sham equation and the Poisson equation related to the Hartree potential. In this way, two different adaptive finite element spaces are established, and both the KS wavefunctions and the Hartree potential can be treated accurately.

  <ul style="overflow: hidden">
  </ul>
</div>

<div class="rowl1">
  <img src="{{ site.url }}{{ site.baseurl }}/images/research/C384.png" class="img-responsive" style="float: left; border-radius: 5px; width: 280px; height: 210px" />
  <h4>Orthogonalization-free framework for the ground state calculation</h4>

  The efficiency of the all-electron calculations suffers from the orthogonalization process in view of its cubic complexity and low parallel scalability in terms of the number of electrons for large scale systems. To break through this bottleneck, we propose an orthogonalization-free algorithm framework based on the total energy minimization problem. 

  <ul style="overflow: hidden">
  </ul>
</div>



<div class="rowl1">
  <img src="{{ site.url }}{{ site.baseurl }}/images/research/2022Reg.png" class="img-responsive" style="float: left; border-radius: 5px; width: 280px; height: 196px" />
  <h4>Regularization of the Complex Langevin method</h4>

  The complex Langevin method, a numerical method used to compute the ensemble average with a complex partition function, often suffers from runaway instability. We study the regularization of the complex Langevin method via augmenting the action with a stabilization term.

  <ul style="overflow: hidden">
  </ul>
</div>


