---
layout: default
title: Blog posts
permalink: /blog/

---

<article class="article">

  <div class="article__body">
    <ul class="list page-list">
      {% for post in site.posts %}
        <li class="list-item">
        <a class="list-item__link" href="{{ post.url | prepend: site.baseurl }}">

          <h2 class="list-item__title">{{ post.title }}</h2>
          <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

          </a>
        </li>
      {% endfor %}
    </ul>
  </div>


</article>