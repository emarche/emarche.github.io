---
layout: page
permalink: /publications/
title: publications
description: 
years: [2024, 2023, 2022, 2021, 2020]
nav: true
nav_order: 1
---

<p>Some peer-reviewed publications. Check my <a href="https://scholar.google.it/citations?user=9V1_SGkAAAAJ&hl=en&oi=ao">Google scholar</a> for the complete list.</p>

<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
