
// Inject the Jquery Into the Page
// document.body.appendChild(document.createElement('script')).src='http://code.jquery.com/jquery-1.7.2.min.js';

function create_tag(tag){
    return document.createElement(tag);
};

function create_text(text){
    return document.createTextNode(text);
};

function hyperlink(label, url){
    var a = create_tag("a") ;
    a.href = url ;
    a.innerHTML = label;
    return a;
};

UL = create_tag("ul");
UL.className = "bookmarklets" ;
UL.style="list-style-type:disc";

function add_mark(label, url){
  var il = create_tag("il");
  var a = hyperlink(label, url);
  a.style.display = "block" ;
  il.appendChild(a) ;
  UL.appendChild(il);
  
};

function add_label(label){
  var il = create_tag("il");
  var t = create_text(label);
  // t.style.display = "block" ;
  il.appendChild(t) ;
  UL.appendChild(il);
  
};



panel = create_tag("div")
panel.id = "InjectorPanel";
panel.style.position = "fixed";
panel.style.width = "200px";
panel.style.height = "500px";
panel.style.top = "0px";
panel.style["background-color"] = "lightblue";
document.querySelector("body").appendChild(panel);

 
// Serch Web Archive
//htmlcode =  "javascript:(function(){window.location='http://web.archive.org/web/*/' + document.URL})()' > Web Archive</a></ul>" ;

//==================
add_label("Useful");

add_mark("Tiny URL", "javascript:void(open('http://tinyurl.com/create.php?url='+encodeURIComponent(location.href)))");
add_mark("QR Code", "javascript:(function(){if(document.getElementById){var x=document.body;var o=document.createElement('script');if(typeof(o)!='object') o=document.standardCreateElement('script');o.setAttribute('src','http://qrbookmarklet.googlecode.com/svn/trunk/qr.js');o.setAttribute('type','text/javascript');x.appendChild(o);}})();");
add_mark("Web Archive", "javascript:(function(){window.location='http://web.archive.org/web/*/' + document.URL})()");
add_mark("Image Search" , "javascript:void((function(){var sir=document.createElement('script');sir.setAttribute('src','http://cdnjs.cloudflare.com/ajax/libs/require.js/0.26.0/require.min.js');sir.setAttribute('type','text/javascript');document.getElementsByTagName('head')[0].appendChild(sir);var sib=document.createElement('script');sib.setAttribute('src','http://jarred.github.com/src-img/js/app/bookmarklet.js?version=0.66');sib.setAttribute('type','text/javascript');document.getElementsByTagName('head')[0].appendChild(sib);})());") ;
add_mark("Print What You Like", "javascript:(function(){if(window['ppw']&&ppw['bookmarklet']){ppw.bookmarklet.toggle();}else{window._pwyl_home='//www.printwhatyoulike.com/';window._pwyl_pro_id=null;window._pwyl_bmkl=document.createElement('script');window._pwyl_bmkl.setAttribute('type','text/javascript');window._pwyl_bmkl.setAttribute('src',window._pwyl_home+'static/compressed/pwyl_bookmarklet_10.js');window._pwyl_bmkl.setAttribute('pwyl','true');document.getElementsByTagName('head')[0].appendChild(window._pwyl_bmkl);}})();");

//==================
add_label("Web Dev");

add_mark("Inject JQuery", "javascript:void(function(){document.body.appendChild(document.createElement('script')).src='http://code.jquery.com/jquery-1.7.2.min.js' })();");

add_mark("Execute HTML", "javascript:var txt='';function getSelText(wndw){var sel='';if(document.all){sel=wndw.document.selection.createRange().text;}else{sel=wndw.window.getSelection();}return sel;}void(frms=window.frames);if(frms.length==0){txt=getSelText(window);}else{for(iQA=0;iQA&lt;frms.length;iQA++){void(txt=getSelText(frms[iQA]));if(txt.length&gt;0){break;}}}while(txt.length==0){txt=promt('Input:');}win=window.open('','','');void(win.document.write(txt));void(win.document.close())");

add_mark("Show Cookies", "javascript:document.cookie='';function hjK(S4p){D3p=/; /g;return S4p.replace(D3p, '&lt;br&gt;&lt;br&gt;');}if(document.cookie.length&lt;1){alert('No cookie from this site!')}else{with((na=open('','','')).document){write(hjK('Cookie for '+document.title.link(window.location.href)+', dd. '+new Date()+'&lt;hr&gt;'+document.cookie));close()}}") ;

//==================
add_label("Security and Auditing");
add_mark("Remove Cookies", "javascript:void(document.cookie=null)");
add_mark("PwnYoutube", "javascript:(function(){url='http://deturl.com/download-video.js';document.body.appendChild(document.createElement('script')).src=url+'?'+new Date().getTime();})();") ;

//===================
add_label("Updates");
add_mark("Bookmarklets", "http://caiorss.github.io/bookmarklets.html");

panel.appendChild(UL);
