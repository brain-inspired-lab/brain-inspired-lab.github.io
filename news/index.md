---
title: News
title_key: news_title
nav:
  order: 1
  tooltip: Latest news and updates
---

# {% include icon.html icon="fa-solid fa-newspaper" %} <span data-i18n="news_title">News & Updates</span>

{% include news-list.html style="calendar" expanded=true %}


{% capture content %}
For earlier news and updates, please visit our [Old Web Page](https://spikecv.github.io/zh/index.html){:target="_blank" rel="noopener"}.
{% endcapture %}

{% include more-info.html 
  content=content 
  icon="fa-solid fa-up-right-from-square" 
  color="#0A66C2" 
%}