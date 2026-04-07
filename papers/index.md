---
title: Papers
title_key: papers_title
nav:
  order: 3
redirect_from: 
  - publications
  - research
  - research_highlights
  - publication_types/
  - publication-type/1/
  - publication-type/2/
  - publication-type/3/
  - publication-type/4/
  - publication-type/5/
  - publication-type/6/

---

# {% include icon.html icon="fa-solid fa-file-lines" %}<span data-i18n="papers_title">Publications</span>

<span data-i18n="papers_1">In the past 5 years, our team has studied neuromorphic vision and spike-based intelligence from three aspects: 1) retinal encoding/decoding models and neuromorphic spike cameras, 2) large-scale spiking neural network models and learning methods, and 3) neuromorphic visual analysis and processing algorithms and systems. Our works systematically address key scientific and technical challenges in the full pipeline of neuromorphic vision, from understanding biological visual coding principles, to developing spike-based sensing devices and computing models, and further to building practical high-speed vision algorithms and systems.Based on these efforts, over 70 papers have been published in top-tier conferences and prestigious journals. Those papers have been cited 5400+ times according to Google Scholar, and several of them are among the most cited works in related research topics such as spiking neural networks and neuromorphic vision.</span>

<span data-i18n="papers_2">Most of our recent work should be accessible on an Open Access basis. However, if you cannot locate a specific manuscript online, please feel free to contact us.</span>



{% include section.html %}

{% include search-box.html %}

{% include search-info.html %}

<div class="publication-filters" data-publication-filters>
  <label class="publication-filter">
    <span>Year</span>
    <select id="publication-year-filter" aria-label="Filter publications by year">
      <option value="">Select Year</option>
    </select>
  </label>

  <label class="publication-filter">
    <span>Venue</span>
    <select id="publication-venue-filter" aria-label="Filter publications by venue">
      <option value="">Select Venue</option>
    </select>
  </label>

  <label class="publication-filter">
    <span>Topic</span>
    <select id="publication-topic-filter" aria-label="Filter publications by topic">
      <option value="">Select Topic</option>
    </select>
  </label>

  <button type="button" class="publication-clear-button" id="publication-clear-filters">
    Clear
  </button>
</div>

{% include list.html data="citations" component="citation" style="publication-list" filters="date: ^202[1-9]-|^20[3-9][0-9]-" %}

<div class="publication-image-modal" id="publication-image-modal" hidden aria-hidden="true">
  <div class="publication-image-modal-backdrop" data-publication-image-close></div>
  <div class="publication-image-modal-dialog" role="dialog" aria-modal="true" aria-label="Publication image preview">
    <button type="button" class="publication-image-modal-close" data-publication-image-close aria-label="Close image preview">
      ×
    </button>
    <img id="publication-image-modal-img" src="" alt="">
  </div>
</div>

{% capture content %}
<span data-i18n="papers_3">For selected recent work from the lab, visit our <a href="/recent-work/">recent work page</a>.</span>
{% endcapture %}

{% include more-info.html 
  content=content 
  icon="fa-solid fa-flask" 
  color="#0A66C2" 
%}
