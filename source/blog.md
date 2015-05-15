---
layout: page
title: Blog posts
permalink: /blog/
inverse: false
image: http://people.umass.edu/latour/Germany/ljennings/Berrlin-Map-2007large.jpg
---


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

