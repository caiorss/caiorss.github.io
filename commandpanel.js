// From Localhost:
//  document.body.appendChild(document.createElement('script')).src='http://localhost:8000/commandpanel.js';

// Inject the Jquery Into the Page
// document.body.appendChild(document.createElement('script')).src='http://code.jquery.com/jquery-1.7.2.min.js';

function create_tag(tag){
    return document.createElement(tag);
};

function create_text(text){
    return document.createTextNode(text);
};

function hyperlink(label, url, onclick){
    var a = create_tag("a") ;
    //a.href = url ;
    a.innerHTML = label;
    
    if (typeof url == "function"){
    
        a.href = func2JSurl(url);
    }else{
        a.href = url ;
    };
        
    //if(onclick !=undefined) a.onclick = onclick ;
    return a;
};

UL = create_tag("ul");
UL.className = "bookmarklets" ;
UL.style="list-style-type:disc";

function add_mark(label, url, onclick){
  var il = create_tag("il");
  var a = hyperlink(label, url, onclick);
  
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

function func2JSurl(func){
    var code = func.toString();
    var url = "javascript:(function()" + code.replace(/function.*\(\)/, '').replace(/\/\/.*/,"") + ")();";
    return url ;
};  


//--------------------------------------------------------------------//

function showAllLinks(){
    var a = '';
    for (var ln = 0; ln < document.links.length; ln++) {
        var lk = document.links[ln];
        a += ln + ': <a href=\'' + lk + '\' title=\'' + lk.text + '\'>' + lk + '</a><br>\n';
    };
    w = window.open('', 'Links', 'scrollbars,resizable,width=400,height=600');
    w.document.write(a);    
    //w.document.body.innerHTML = a ;
};

function fullUrls() {
/* Changes the text of links to match their absolute urls. */
    var i, c, x, h;
    for (i = 0; x = document.links[i]; ++i) {
        h = x.href;
        x.title += " " + x.innerHTML;
        while (c = x.firstChild) x.removeChild(c);
        x.appendChild(document.createTextNode(h));
    };
    panel.remove();
 
}


/* Credits: http://www.xinotes.net/notes/note/219/ */
function ShowCookies(){

     if (!window.hhhgewrt34frdki) {
     window.hhhgewrt34frdki = true;
     $c = document.createElement('DIV');
     $c.style.cssText = 'position:absolute;border:1px solid #6A8080;display:block;color:black;background:#FFF;z-index:1000000;height:auto;width:auto';
     document.body.appendChild($c);
     oldscroll = window.onscroll;
     window.onscroll = function() {
         $c.style.top = (document.body.scrollTop || document.documentElement.scrollTop) + 5 + 'px';
         if (oldscroll) {
             oldscroll();
         };
     };


     $tbl = '<table style=\'background:#A9CCCC;font-family:sans-serif;font-size:0.9em;margin:0;padding:0\' cellspacing=\'1\' cellpadding=\'4\' border=\'0\'>';
     if (document.cookie) {
         $tbl += '<tr><th style=\'background:#6A8080;color:#FFF;\'>Cookie</th><th style=\'background:#6A8080;color:#FFF;\'><div style=\'display:block;float:right;cursor:pointer;width:auto\' onclick=\'document.body.removeChild($c);  window.onscroll = oldscroll;  window.hhhgewrt34frdki = null;\'>x</div>ValueÂ Â </th></tr>';
         $cc = document.cookie.split('; ');
         for ($i = 0; $i < $cc.length; $i++) {
             $c0 = $cc[$i];
             $ci = $c0.indexOf('=');
             if ($ci < 0) {
                 $ci = $c0.length;
             };
             $tbl += '<tr><td style=\'background:#FFF;text-align:left\'>' + $c0.substr(0, $ci) + '</td><td style=\'background:#FFF;text-align:left\'>' + unescape($c0.substr($ci + 1)) + '</td></tr>';
         };
     } else {
         $tbl += '<tr><th style=\'background:#6A8080;color:#FFF;width:200px\'><div style=\'display:block;float:right;cursor:pointer;width:auto\' onclick=\'document.body.removeChild($c);  window.onscroll = oldscroll;  window.hhhgewrt34frdki = null;\'>x</div>Cookies</th></tr>' + '<tr><td style=\'text-align:center;background:#FFF\'>None</td></tr>';
     };
     $tbl += '</table>';
     $c.innerHTML = $tbl;
     $c.style.top = (document.body.scrollTop || document.documentElement.scrollTop) + 5 + 'px';
     $c.style.left = '5px';
     void(x = 3);
 };
};


function remove_panel(){
    panel.remove();
};

function hide_panel(){
    if (subpanel.hidden ==false){
        subpanel.hidden = true;
    }else{
        subpanel.hidden = false;
    }
};

panel = create_tag("div")

panelbar = create_tag("div")

//panelbar.innerHTML = "<a href='#' onclick='hide_panel()' id='panel_switch' >Hide Panel<a>"
panelbar.innerHTML = "JS PANEL" ;

// panelbar.style.position = "fixed"
panelbar.style.height = "20px";
panelbar.style["background-color"] = "yellow";
panelbar.style["z-index"] = 10e5;
panelbar.onclick = hide_panel ;

subpanel = create_tag("div")


panel.id = "InjectorPanel";
panel.style.position = "fixed";
panel.style.width = "150px";
//panel.style.height = "500px";
panel.style.top = "0px";
panel.style["background-color"] = "lightblue";


panel.appendChild(panelbar);
panel.appendChild(subpanel);

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


//add_mark("Show All Links", "#",  showAllLinks)
//add_mark("Show All Links", "javascript:" + showAllLinks.toString())
add_mark("Show All Links", showAllLinks)

add_mark("Show Cookies", ShowCookies) ;

//==================
add_label("Web Dev");

add_mark("Inject JQuery", "javascript:void(function(){document.body.appendChild(document.createElement('script')).src='http://code.jquery.com/jquery-1.7.2.min.js' })();");


add_mark("Run Functional.js",
"javascript:void(function(){document.body.appendChild(document.createElement('script')).src='http://caiorss.github.io/functional.js' })();");


add_mark("Execute HTML", "javascript:var txt='';function getSelText(wndw){var sel='';if(document.all){sel=wndw.document.selection.createRange().text;}else{sel=wndw.window.getSelection();}return sel;}void(frms=window.frames);if(frms.length==0){txt=getSelText(window);}else{for(iQA=0;iQA&lt;frms.length;iQA++){void(txt=getSelText(frms[iQA]));if(txt.length&gt;0){break;}}}while(txt.length==0){txt=promt('Input:');}win=window.open('','','');void(win.document.write(txt));void(win.document.close())");






//==================
add_label("Security and Auditing");

add_mark("Remove Cookies", "javascript:void(document.cookie=null)");

add_mark("PwnYoutube", "javascript:(function(){url='http://deturl.com/download-video.js';document.body.appendChild(document.createElement('script')).src=url+'?'+new Date().getTime();})();") ;

add_mark("Full URLs", fullUrls)

//===================
add_label("Updates");
add_mark("Bookmarklets", "http://caiorss.github.io/bookmarklets.html");

add_mark("Close", remove_panel)


subpanel.appendChild(UL);
