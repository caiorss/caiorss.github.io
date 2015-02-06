# BOOKMARKLETS 

Useful bookmarklets for Web Scraping, Web Development and for easy navigation.

To install the bookmarklet, drag and drop the link to the Browser's bookmark bar.

See also: 

Bookmarklets creators

*   http://mrcoles.com/bookmarklet/
*   https://bookmarkify.it/

Miscs
*   http://betterexplained.com/articles/how-to-make-a-bookmarklet-for-your-web-application/
*   http://ha.ckers.org/bookmarklets.htmlsaad
*   http://www.wordreference.com/english/LinkButtonsOld.htm

## Template


Run Generic Javascript Code

```html
<a href="javascript:(function(){ <<< JAVASCRIPT CODE HERE >>>  })()"> Bookmark Label </a>
```

Inject Script into Page

```html
<a href="javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://SCRIPT-URL/SCRIPT.JS' })();"> Label </a>
```

Example: 

Click in the link bellow to show a message box with the text 'Hello World Javascript !!' 

<d1>
<a href="javascript:(function(){alert('Hello World Javascript !!')})()"> Click me </a>
</d1> 

```html
<a href="javascript:(function(){alert('Hello World Javascript !!')})()"> Click me </a>
```



## Utilities


#### Tiny URL

<d1>
<a href="javascript:void(open('http://tinyurl.com/create.php?url='+encodeURIComponent(location.href)))">TinyURL</a>
</d1>

#### QR Code

Make QR code to Current Page to make easier to share the URL with Smart Phones.


<dl>

<a href="javascript:(function(){if(document.getElementById){var x=document.body;var o=document.createElement('script');if(typeof(o)!='object') o=document.standardCreateElement('script');o.setAttribute('src','http://qrbookmarklet.googlecode.com/svn/trunk/qr.js');o.setAttribute('type','text/javascript');x.appendChild(o);}})();">Create QR code </a>

</dl>


#### Search Dictionary

Look up a word on Dictionary.com

<d1>
<a href="javascript:var%20q=escape(window.getSelection()),i,ii;if(!q){for(i=0;i%3Cframes.length;i++){var%20fr=frames[i];try{q=escape(fr.getSelection())}catch(e){};if(q)break;else{for(ii=0;ii%3Cfr.frames.length;ii++){try{q=escape(fr.frames[ii].getSelection())}catch(e){};if(q)break;}}}}if(!q)void(q=prompt('Enter%20word%20to%20define%3A',''));if(q)void(location.href='http://www.dictionary.com/cgi-bin/dict.pl?term='+q);">Dictionary</a>
</d1>

Find synonyms for a word on Thesaurus.com

<d1>
<a href="javascript:var%20q=escape(window.getSelection()),i,ii;if(!q){for(i=0;i%3Cframes.length;i++){var%20fr=frames[i];try{q=escape(fr.getSelection())}catch(e){};if(q)break;else{for(ii=0;ii%3Cfr.frames.length;ii++){try{q=escape(fr.frames[ii].getSelection())}catch(e){};if(q)break;}}}}if(!q)void(q=prompt('Enter%20the%20word%20you%20want%20synonyms%20for%3A',''));if(q)void(location.href='http://www.thesaurus.com/cgi-bin/search?config=roget&words='+q);">Thesaurus</a>
</d1>


### Print What You Like

<d1>
<a href="javascript:(function(){if(window['ppw']&&ppw['bookmarklet']){ppw.bookmarklet.toggle();}else{window._pwyl_home='//www.printwhatyoulike.com/';window._pwyl_pro_id=null;window._pwyl_bmkl=document.createElement('script');window._pwyl_bmkl.setAttribute('type','text/javascript');window._pwyl_bmkl.setAttribute('src',window._pwyl_home+'static/compressed/pwyl_bookmarklet_10.js');window._pwyl_bmkl.setAttribute('pwyl','true');document.getElementsByTagName('head')[0].appendChild(window._pwyl_bmkl);}})();" id="bkmklt_link_safari">PrintWhatYouLike</a>
</d1>

#### List All Links

<d1>

<a href="javascript:(function(){var a=;for(var ln=0;ln<document.links.length;ln++){var lk=document.links[ln];a+=ln+': <a href=\+lk+'\' title=\+lk.text+'\'>'+lk+'</a><br>\n';}w=window.open(,'Links','scrollbars,resizable,width=400,height=600');w.document.write(a);}()">List All Links</a>

</d1>

#### Visit Cached Web Page or Defunct Web Sites

If you see the error: 404 page not found, the you can with one click look for the Web Site in the Way back Machine archive.

<d1>
<a href="javascript:(function(){window.location='http://web.archive.org/web/*/' + document.URL})()" > Web Archive</a>
</d1>


#### Show Password

This bookmarklet takes in your ***** from form field and shows you the actual password.

<a href="javascript:(function(){var%20s,F,j,f,i;%20s%20=%20%22%22;%20F%20=%20document.forms;%20for(j=0;%20j<F.length;%20++j)%20{%20f%20=%20F[j];%20for%20(i=0;%20i<f.length;%20++i)%20{%20if%20(f[i].type.toLowerCase()%20==%20%22password%22)%20s%20+=%20f[i].value%20+%20%22n%22;%20}%20}%20if%20(s)%20alert(%22Passwords%20in%20forms%20on%20this%20page:nn%22%20+%20s);%20else%20alert(%22There%20are%20no%20passwords%20in%20forms%20on%20this%20page.%22);})();">Show Passw</a>


#### Bypass Youtube Adult filter without Sign In

<d1>
<a href="javascript:(function(){window.location.replace(document.URL.replace('watch?v=','v/'))})()"> Bypass Youtube </a>
</d1>

#### Download Videos

PwnYouTube Bookmarklet

Download a YouTube video from any web page. Save a YouTube video as an MP3 file, iPod file, FLV file, MP4 file, AVI file, and more!
Support for Google Video, DailyMotion.com, Facebook.com, MegaVideo.com, Break.com, MetaCafe.com, FunnyOrDie.com, Vimeo.com.

<a href="javascript:(function(){url='http://deturl.com/download-video.js';document.body.appendChild(document.createElement('script')).src=url+'?'+new Date().getTime();})();">PwnYouTube</a>

#### Reverse Image Search

Src Img is a bookmarklet that interfaces with Google™ Image Search to help you find the creators of images you see on blogs that are too lame cool for attribution.
How do I use it? Drag the following link to the bookmarks bar in your browser.
Then click it when you are on a page with images you want to track down.

Source: <http://jarred.github.io/src-img/>

<d1>
<a href="javascript:void((function(){var sir=document.createElement('script');sir.setAttribute('src','http://cdnjs.cloudflare.com/ajax/libs/require.js/0.26.0/require.min.js');sir.setAttribute('type','text/javascript');document.getElementsByTagName('head')[0].appendChild(sir);var sib=document.createElement('script');sib.setAttribute('src','http://jarred.github.com/src-img/js/app/bookmarklet.js?version=0.66');sib.setAttribute('type','text/javascript');document.getElementsByTagName('head')[0].appendChild(sib);})());"><u>?</u>¿<u> src-im</u>g</a>
</d1>


## WEB Dev and Scraping

#### Inject Interactive Javascript Terminal: Jash Shell

See: <http://billyreisinger.com/jash>
    
<d1>
<a href="javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://www.billyreisinger.com/jash/source/latest/Jash.js';})();">Jash Shell</a>
</d1>

#### Inspect Page with AADVARk

The Aardvark bookmarklet is a tool for web developers/designers as well as casual users. To quickly see it in action on this page,

See also: <http://karmatics.com/aardvark/>

<d1>
<a href="javascript:document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).setAttribute('src','http://www.karmatics.com/aardvark/bookmarklet.js')">AADVARK</a>
</d1>


#### Inject JQuery

Inject JQuery to test, debug, modify and hack the client side view of a page, so you can run scripts and debug with Firebug or Chrome dev tools.


<d1>
<a href="javascript:void(function(){document.body.appendChild(document.createElement('script')).src='http://code.jquery.com/jquery-1.7.2.min.js' })();"> Inject Jquery </a>
</d1>

