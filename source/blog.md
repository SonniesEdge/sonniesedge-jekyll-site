---
layout: page
title: Blog posts
permalink: /blog/
inverse: false
image: http://people.umass.edu/latour/Germany/ljennings/Berrlin-Map-2007large.jpg
---


  <div class="article__body">


    {% for post in site.posts %}
  <div class="post">
    <h2 class="post__title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>    
    <div class="post__summary"><p>You've never noticed the food at tech events. Not unless you've got some kind of dietary restriction.</p>
    </div>
    <div class="post__meta">{{ post.date | date: "%b %-d, %Y" }}</div>
  </div>
  {% endfor %} %}
    </ul>


  </div>

