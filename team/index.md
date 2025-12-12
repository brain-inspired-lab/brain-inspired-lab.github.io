---
lang: en
title: Team
title_key: team_title
nav:
  order: 2
redirect_from: 
  - people
  - author
---

<div class="team-leaders-grid">
  <!-- Tiejun Huang -->
  <div class="team-leader-card">
    <h1><a style="text-decoration: none; color: inherit;" href="/members/tiejun-huang.html"> <span data-i18n="Director"></span> </a></h1>
    
    <div class="leader-content">
      <div class="leader-image">
        <a style="text-decoration: none; color: inherit;" href="/members/tiejun-huang.html">
          <img src="/images/team/tiejun-huang.png"
               style="max-width: 200px; width: 100%; height: auto;"
               class="portrait-image"
               alt="Tiejun Huang" />
        </a>
        
        <!-- 名称和职位移到图像下方 -->
        <div class="text-center" style="margin-top: 15px; font-weight: var(--bold); font-size: 1.2rem"> <span data-i18n="Tiejun Huang"></span> </div>
        <div class="text-center" style="margin-top: 5px; margin-bottom: 20px"> <span data-i18n="Professor & Lab Director"></span> </div>
      </div>
      
      <div class="leader-info">
        {% assign member = site.members | where: "slug", "tiejun-huang" | first %}
        <ul style="margin-top: 0; margin-bottom: 15px; padding-left: 0; list-style-position: inside; text-align: left;">
          {% for affiliation in member.affiliations %}
          <li style="margin: 0.1px; padding-left: 0;">{{ affiliation }}</li>
          {% endfor %}
        </ul>
        
        <a style="text-decoration: none; color: inherit; font-size: 1.1rem; line-height: 1.6; text-align: left; display: block;" href="/members/tiejun-huang.html">
          <span data-i18n="Tiejun-Huang summary"></span>
          <a href="/members/tiejun-huang.html"><span data-i18n="more">(more)</span> </a>
        </a>
      </div>
    </div>
  </div>

  <!-- Zhaofei Yu -->
  <div class="team-leader-card">
    <h1><a style="text-decoration: none; color: inherit;" href="/members/zhaofei-yu.html"><span data-i18n="Assistant Professor">Assistant Professor</span></a></h1>
    
    <div class="leader-content">
      <div class="leader-image">
        <a style="text-decoration: none; color: inherit;" href="/members/zhaofei-yu.html">
          <img src="/images/team/zhaofei-yu.jpeg"
               style="max-width: 200px; width: 100%; height: auto;"
               class="portrait-image"
               alt="Zhaofei Yu" />
        </a>
        
        <!-- 名称和职位移到图像下方 -->
        <div class="text-center" style="margin-top: 15px; font-weight: var(--bold); font-size: 1.2rem"><span data-i18n="Zhaofei Yu name">Zhaofei Yu</span></div>
        <div class="text-center" style="margin-top: 5px; margin-bottom: 20px"><span data-i18n="Assistant Professor">Assistant Professor</span></div>
      </div>
      
      <div class="leader-info">
        {% assign member = site.members | where: "slug", "zhaofei-yu" | first %}
        <ul style="margin-top: 0; margin-bottom: 15px; padding-left: 0; list-style-position: inside; text-align: left;">
          {% for affiliation in member.affiliations %}
          <li style="margin: 0.1px; padding-left: 0;">{{ affiliation }}</li>
          {% endfor %}
        </ul>
        
        <a style="text-decoration: none; color: inherit; font-size: 1.1rem; line-height: 1.6; text-align: left; display: block;" href="/members/zhaofei-yu.html">
          <span data-i18n="Zhaofei Yu summary">Zhaofei Yu is an assistant professor in the lab. His research interests include SNN and brain-inspired intelligence.</span>
          <a href="/members/zhaofei-yu.html"><span data-i18n="more">(more)</span></a>
        </a>
      </div>
    </div>
  </div>
</div>


{% include section.html %}

# <span data-i18n="team_title">Team</span>

{% include list.html data="members" component="portrait" filters="role: senior" %}
{% include list.html data="members" component="portrait" filters="role: ^(?!pi$|senior$|assistant-professor|alumni$)" %}

{% include section.html %}

# <span data-i18n="alumni_title">Alumni</span>

{% include list.html data="members" component="portrait" filters="role: alumni" %}

{% include section.html dark="gray" %}

 <span data-i18n="alumni_1">We are looking for highly motivated students to join our group. Our group has opening positions for Ph.D. and Undergraduate Internship. If you are interested in researching on brain-like computing, please send me an email with your CV.</span>

 <span data-i18n="alumni_2">We are hiring highly motivated postdocs to join our group through the Boya Postdoctoral Fellowship at Peking University. Please send an email with your CV and Research Statement.</span>

 
 <span data-i18n="alumni_3">For more information on how to join us, you can review our [recruitment](/apply/) page. </span>

{% include section.html %}

{% capture content %}
<!-- 
{% include figure.html image="images/photos/itsc.jpg" %}
{% include figure.html image="images/photos/dinner.jpg" %}
{% include figure.html image="images/photos/trb.jpg" %} -->

{% endcapture %}

{% include grid.html style="square" content=content %}
