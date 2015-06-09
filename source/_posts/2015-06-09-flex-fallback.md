---
layout: post
title:  "Fallbacks for Flex"
date:   2015-05-19 12:00:00
categories: web
tags: flex
background: 5166150953_ed4d217f18_o.jpg
strapline: Because people are still using older browsers
---


The Flex display method is one of the coolest new things to hit CSS for years. It acknowledges that content is variable, that content will never fit perfectly into little boxes, and that content is constantly changing.

While working on the [BBC Election 2015](http://bbc.co.uk/news/election/2015) site, I've used it on all the components that I've built, where I've found it utterly invaluable.

However, the BBC has to offer a visually consistent experience for older, less-capable browsers. Which means that I needed to create fallbacks for all Flex-based components.



## Why flex is great

First of all, why is Flex great? If you're already sold on it, skip to the next section.

Flex is applied to the containing element, and tells the elements within to take up space as appropriate. An element filled with "sdjfsk jdfskjdfhksjd hfksdjfh" will automatically become bigger than an item containing only "sdfsdfa".



Take a look at the following:

<p data-height="268" data-theme-id="0" data-slug-hash="vOmwOG" data-default-tab="result" data-user="sonniesedge" class='codepen'>See the Pen <a href='http://codepen.io/sonniesedge/pen/vOmwOG/'>vOmwOG</a> by Charlie (<a href='http://codepen.io/sonniesedge'>@sonniesedge</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


If you look at the Sass, you can see that there are only **two** rules dictating layout.







We can make the items full-width.

<p data-height="268" data-theme-id="0" data-slug-hash="eNWavX" data-default-tab="result" data-user="sonniesedge" class='codepen'>See the Pen <a href='http://codepen.io/sonniesedge/pen/eNWavX/'>eNWavX</a> by Charlie (<a href='http://codepen.io/sonniesedge'>@sonniesedge</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>




And we can add a new item into the nav without having to recalculate widths - the browser handles that.

<p data-height="268" data-theme-id="0" data-slug-hash="qdmGxb" data-default-tab="result" data-user="sonniesedge" class='codepen'>See the Pen <a href='http://codepen.io/sonniesedge/pen/qdmGxb/'>Adding a flex item</a> by Charlie (<a href='http://codepen.io/sonniesedge'>@sonniesedge</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>



Amazing!


## Falling back

The drawback with using Flex by itself is when it comes to older browser support. Because it's non-existent in



Partial support browsers: Make sure that you're using autoprefix, or Sass mixins to generate vendor prefixes and syntax appropiately.


No support browsers: this is where things get tricky, as you'll need to fallback to an alternate display method. For example, IE9 will display the previous examples using `display: flex` the same as if they were `display: block`.


http://caniuse.com/#feat=flexbox





## Why not just use the fallbacks?



Why not just use display table? While it has some of the benefits of Flex (vertical centering, no widths need to be sppecified, adapts to a limited degree to content width), it has some major draw backs. Because it can't wrap. And doesn't adapt to content width fully.

Why not use floats? Urgh. Clearing issues. Have to specify widths.

Why not use inline blocks? Have to specify width of each item.




So we're all set to move to Flex for layout? Well, hang on a moment. Flex is amazingly useful. But not suitable for whole page layolut systems. Stick to Float for now. But for components, Flex is very useful. However, how does it fall back?


Fallbacks
