---
title: Contact
title_key: contact_title
nav:
  order: 9
---

# {% include icon.html icon="fa-solid fa-envelope" %} <span data-i18n="contact_title">Contact</span>

<span data-i18n="contact_1">Our facilities are located at the Science Building 2, in the Yan Yuan Campus of Peking University. </span>

<span data-i18n="contact_2">Our full address is:</span>

<span data-i18n="contact_3">Science Building 2, Room 2728</span> <br>
<span data-i18n="contact_4">Yan Yuan Campus, Peking University</span> <br>
<span data-i18n="contact_5">Beijing 100871, China</span> 




{%
  include button.html
  type="email"
  text='<span data-i18n="contact_button_1">"yuzf12@pku.edu.cn"</span>'
  link="yuzf12@pku.edu.cn"
  style="background:rgb(215, 18, 18); color: #fff;"
%}

{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://maps.app.goo.gl/ahdfwnCyMBeUpZyx9"
  style="background:rgb(16, 35, 156); color: #fff;"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/photos/Science Building 2.jpg"
  caption='<span data-i18n="contact_caption_1">Science Building 2, Yan Yuan Campus</span>'
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photos/Peking University West Door.jpg"
  caption='<span data-i18n="contact_caption_2">Yan Yuan Campus, Peking University</span>'
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

