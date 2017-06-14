---
layout: homepage
title: Home
---

# Blog

<!-- https://stackoverflow.com/questions/9794699/listing-all-the-blog-posts-with-content-with-jekyll -->
<h2>Latest Posts</h2>
<ul>
  {% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>

### Join Mailing List
<form method="POST" action="http://formspree.io/xing12397@gmail.com">
  <input type="email" name="email" placeholder="Your email" required>
  <input type="hidden" name="_next" value="{% link _pages/thanks.md %}" />
  <input type="hidden" name="_format" value="plain" />
  <input type="hidden" name="_subject" value="formspree-subscriber-subject" />
  <button type="submit">Send</button>
</form>  
Subscription will be processed via [formspree.io](http://formspree.io).
