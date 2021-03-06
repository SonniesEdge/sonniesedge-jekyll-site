---
layout: post
title:  "Twitter image accessibility"
date:   2015-08-28 11:00:16
categories: jekyll update
background: 5166150953_ed4d217f18_o.jpg
strapline: The way we use Twitter isn't accessible for everyone
---

I just switched to using a command-line Twitter client and I was again reminded about how limiting it is to use Twitter when you cannot see the images contained in a tweet.

<img src="/images/posts/twitter-accessibility/twitter_pixelated.png" alt="Screenshot of my twitter client, Rainbowstream" />

In [RainbowStream](http://www.rainbowstream.org/), tweets with images show up heavily pixellated. Obviously this is a limitation of being a skinny-jeaned hipster and using a command-line client.

But what about if you don't have a choice of how you see Twitter? What if your eyesight is impaired in some way? Even if you're working around this with large text, or a screen-reader, there's still a good chance that an image would be unviewable.

This isn't too much of a problem if people are posting images as accessories to their tweets. But if they're screencapping chunks of texts, from books, sites or other tweeted conversations, *and not linking back to the originals* then that suddenly becomes a very alienating experience for you.

To help people understand, I've quickly scribbled a bookmarklet that makes images inaccessible to fully-sighted users. Just drag the following to your browser bookmark menu and click it when on twitter dot com.

<a href="javascript:(function(){javascript:(function(){var newcss='.cards-media-container img {-webkit-filter: blur(10px); filter: blur(10px);}';if(&quot;\v&quot;==&quot;v&quot;){document.createStyleSheet().cssText=newcss}else{var tag=document.createElement(&quot;style&quot;);tag.type=&quot;text/css&quot;;document.getElementsByTagName(&quot;head&quot;)[0].appendChild(tag);tag[(typeof document.body.style.WebkitAppearance==&quot;string&quot;)?&quot;innerText&quot;:&quot;innerHTML&quot;]=newcss}})();})();" style="padding: 1em; background-color: lightgray; margin-top: 1em; margin-bottom: 1em; display: inline-block;">Twitter blurred images</a>

Your images should look something like this:

<img src="/images/posts/twitter-accessibility/twitter_blurred.png" alt="A blurred image from twitter.com" />

Try and use it regularly and remind yourself about how tweets and images work when your ability to see images is limited.

I know Twitter itself is rubbish and halts attempts at accessibility. It's criminal that it doesn't provide a way to provide alt text and vexing that there's no way to embed chunks of text. But until we build up a broad-conciousness of how inaccessible it is and for us all to begin to pressure it, nothing will change.

## Top tips

* You can still use images, even for screencaps - just *provide an alternative*.

* If you're posting images of text, then also put a copy on a Github Gist: https://gist.githubusercontent.com/SonniesEdge/6c0edb64969f94c4bf0c/raw

* If you're linking to a series of tweets, then also Storify them and link to that.

* If you're posting a photo, try and describe it in the text, or make your tweet work *without* having to see the image.
