//    JAVASCRIPT FUNCTIONAL PROGRAMMING LIBRARY
//
// Author: Caio Rodrigues Soares Silva
//
// Description: This library implements many functional programming functions and higher order functions 
//      to make programming faster and easy. It is based on Haskell, UnderscoreJS and Python and Scala
//
//
//



//
//  Add python Like docstring to Javascript Functions
//  that have commentary inside the function with the double slash
//  '//' characters at each line
//
//  https://gist.github.com/keeto/352877
//
Function.prototype.help = function(){
    var doc = this[this.toSource ? 'toSource' : 'toString']().match(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/)[0] ;
    return doc.split('\n').slice(1, -1).join("\n") ;
};

//  Doctest: Run the code between the <doctest> </doctest>
//
//
Function.prototype.doctest = function(){
    return eval(
    this.help().match(/<doctest>(([^]*?))<\/doctest>/g)[0].replace(/<\/doctest>/, "").replace(/<doctest>/, "")
    );
};
 



String.prototype.format = function() {
    var args = arguments;
    this.unkeyed_index = 0;
    return this.replace(/\{(\w*)\}/g, function(match, key) {
        if (key === '') {
            key = this.unkeyed_index;
            this.unkeyed_index++
        }
        if (key == +key) {
            return args[key] !== 'undefined'
                ? args[key]
                : match;
        } else {
            for (var i = 0; i < args.length; i++) {
                if (typeof args[i] === 'object' && typeof args[i][key] !== 'undefined') {
                    return args[i][key];
                }
            }
            return match;
        }
    }.bind(this));
};



Request = {}
Request.get = function (url){
    
  var xhr = new XMLHttpRequest();
  xhr.open("get", url, false);
 
  xhr.send();

  return xhr.responseText
}
Request.getjson = function (url){
    
  var xhr = new XMLHttpRequest();
  xhr.open("get", url, false);
 
  xhr.send();

  return JSON.parse(xhr.responseText) ;
}
Request.postjson = function (url, object){

  var xhr = new XMLHttpRequest();
  xhr.open("post", url, false);
  xhr.setRequestHeader("Content-type", "application/json");

  xhr.send(JSON.stringify(object));

  return xhr.responseText
}
Request.request_json = function (method, url, object){

  var xhr = new XMLHttpRequest();
  xhr.open(method, url, false);
  xhr.setRequestHeader("Content-type", "application/json");

  xhr.send(JSON.stringify(object));

  if(typeof(object)=='undefined'){
    var obj = JSON.parse(xhr.responseText);
    return obj ;
  }
}







function is_list(object){
        return object instanceof Array ;
};

function is_object(object){
        return object instanceof Object ;
};

function is_bool(object){
        return object instanceof Boolean ;
};

function is_undefined(object){
        return object == undefined ;
};

function is_number(object){
        return object instanceof  Number ;
};


function end(x){ 
//  Return the last element of an array
//  >
//  > end([1,2,3,4,5])
//  5
//
  return x[x.length-1] ;
} 

function start(x){
  return x[0] ;
}


function logger1(message){
 console.log(message)

}


function logdir(object){
 console.dir(object)
}



function map(fun, x){
 
  var results = []

  for (var i = 0; i < x.length; i++) {
           
    results.push(fun(x[i]));
   }

return results
  
}// End of MAP


function length(List){
   return List.length   
}

function take(n, List){
    return List.slice(0, n) 
}

function take_(n){
    function f(List){
        return List.slice(0, n) 
    }
    return f
}



function reverse(List){     
  return List.reverse()
}

function compose(functions){

   var function2 = functions.reverse() ;
   var N = functions.length ;
   
   function composed(arg){
       
       for (i = 0; i < N; i++) {
               
        result = result(functions2[i])  ;
       }
        
      return result ;
    };
    
    return composed ;
}


function pipe(functions){

   var N = functions.length ;
   
   piped = function(arg){

       var result = arg
       
       for (i = 0; i < N; i++) {
               
        result = functions[i](result)  ;
       }
        
      return result ;
    };
    
    return piped ;
}     



var dict = function (array_keys_values) {
//  Ceate an Javascript Object from an list of [ List_of_Keys, List_of_Values ] 
//
//  Example:
//  > dict_zip([["a", "b", "c", "d"], ["a.1", "b.1", "c.1", "d.1"]])
//  Object { a="a.1", b="b.1", c="c.1", more...}
//
//  > dict_zip(unzip([["a", "a.1" ], ["b", "b.1"], ["c", "c.1"], ["d", "d.1"]]))
//  Object { a="a.1", b="b.1", c="c.1", more...}
  
    if (array_keys_values[0].length === array_keys_values[1].length) {
      
        var obj = {};
        var keys = array_keys_values[0];
    var values = array_keys_values[1] ;


        for (var i = 0;i<keys.length;i++) {
            obj[keys[i]] = values[i];
        }
    return obj;
    }
}

function range(start, stop, step){
    if (typeof stop=='undefined'){
        // one param defined
        stop = start;
        start = 0;
    };
    if (typeof step=='undefined'){
        step = 1;
    };
    if ((step>0 && start>=stop) || (step<0 && start<=stop)){
        return [];
    };
    var result = [];
    for (var i=start; step>0 ? i<stop : i>stop; i+=step){
        result.push(i);
    };
    return result;
};


function name_range(basename, start, stop){
//
//  Creates a list of names with each element ending in a number.
//
//  Example:
//  name_range("div_mycontainer_", 1, 5)
//  ["div_mycontainer_1", "div_mycontainer_2", "div_mycontainer_3", "div_mycontainer_4"]
// 
//
    if (typeof stop=='undefined'){    
        stop = start;
        start = 0;
    }
    
    return range(start, stop).map(function(e){return basename + e ;}) ;
};


function object_keys(obj){
    return Object.getOwnPropertyNames(obj)
};




//  Get the maximum number in a array
//
function max(x) {
    var i;
    var mmax = x[0];

    for (i = 0; i < x.length; i++) {
        if (x[i] > mmax) {
            mmax =x[i];
        }
    }
    return mmax;
}


//  Get the maximum number in a array
//
function min(x) {
    var i;
    var mmin = x[0];

    for (i = 0; i < x.length; i++) {
        if (x[i] < mmin) {
            mmin =x[i];
        }
    }
    return mmin;
}


function joinstr(strlist, param){

    var result = ""

    for (i = 0; i < strlist.length; i++) {
        result += strlist[i] + param
    }

    return result

}

//
// Javascript Clousure ( Functional Programming)
//
function makepower(power){
  function powerfn(base){
     return Math.pow(base, power) ;
  }
  return powerfn
}


function  get(property){
    function get_property(object){
        return object[property]   
    }
    
    return get_property
}



function pluck(property){
    
    var get_property = function (List_of_objects){
        
        if ( List_of_objects  == undefined) return [] ;
        
        return List_of_objects.map(
            function(obj){
                return obj[property] 
            }
        )
        
    } ;
    
    return get_property ;
};



function sum(List){
    
    var S = 0 
    for (i = 0; i < List.length; i++) {
       S = S + List[i]
    }
    return S 
}

function product(List){
    
    var S = 1 
    for (i = 0; i < List.length; i++) {
       S = S*List[i]
    }
    return S 
}


function fibonacci(n) {
   if (n < 2){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}


function redirect_url(url){
    window.location.replace(url);
}

function reload_page(){
    window.location.reload()
}

function open_window(url){
    window.open(url , '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
}


function vectorize(fun){
//   Create Version of a function
//   ( a function that accepts an array instead 
//     of a single argument)
//
//   Example:
//   > sqrt = vectorize(Math.sqrt)
//   > sqrt([1, 2, 3])
//     [1, 1.4142135623730951, 1.7320508075688772]
//  
  function fun_vectorized(x){
    return map(fun, x)
  }
  
  return fun_vectorized  
}

// PAR
function even(n){
   return n % 2 == 0
}

// IMPAR
function odd(n){
   return n % 2 == 1
}


function assign_objs(property, objs, values){
//  Modify a List of Objects
//
//  For each obj[i][property] = values[i]
//
//  :parma property : Property of Each Object to be assigned
//  :param objs     : A list of DOM objects
//  :param values   : A list of values to be assigned
//
//
  
  //console.log(objs.length)
  //console.log(values.length)
  
  var N = min([objs.length, values.length])
  //console.log("N =")
  //console.log(N)
  
  for (var i = 0; i < N; i++) { 
     objs[i].setAttribute(property, values[i]) ;
     //console.log(values[i]) ;
     
     
  }// End for
}


function zip(){
//
// 
//  zip([1,2, 3], [33, 55, 44], range(10))
//  [[1, 33, 0], [2, 55, 1], [3, 44, 2]]
//
   
  N = min(map(length, arguments)) ;
  
  //logger1(N)  
   //takeN = take_(N)
  
  var List2 = [] ;
            
  for (var i = 0; i < N; i++) {
      
      var Listrow = [] ;
      
      for (var j = 0; j < length(arguments); j++) {
      
       Listrow.push(arguments[j][i]) ;
             
  //# alert(arguments[i]);
       } ;
      
      //logger1(Listrow)
      List2.push(Listrow) ;
  //# alert(arguments[i]);
  } ;
  
  return List2 ;
};


function unzip(List){
// Haskell function unzip or python function *List
// 
//  > unzip([["foo", "bar"], ["hello", "world"], ["planet", "mars"]])
//  [["foo", "hello", "planet"], ["bar", "world", "mars"]]
//  
  var N = List.length;
  var M = List[0].length;
  
  var unzipped = [] ;
  
  for (var i = 0 ; i < M; i++){
    unzipped.push([]) ;    
  };  
  
 for (var i = 0 ; i < N; i++){
     
     for(var j=0 ; j < M ; j++){
    unzipped[j].push( List[i][j])
     };
   
  };
  

  return unzipped ;
  
};



function enumerate(List){
// Function Enumerate similar to python enumerate
//
// Example:
//
// > enumerate(['a', 'b', 'c', 'd'])
// [[0, "a"], [1, "b"], [2, "c"], [3, "d"]]

  var List2 = [] ;
  
  for (var i = 0; i < List.length; i++) {
      List2.push([i, List[i]]) ;
  };
  
  return List2 ;
    
 };

function obj2tuple(obj){
    return map(function(key){ return [key, obj[key]]}, Object.getOwnPropertyNames(obj))
}

// Create dynamic popup window
// p = popup_window()
// p.window.location.replace("http://www.google.co.uk")
//
function popup_window(){
  var w = window.open('', '', 'width=400,height=400,resizeable,scrollbars');
  //w.document.write(content);
  w.window.location.href = "/static/blank.html"
  w.document.close(); // needed for chrome and safari
  return w
}


function str(object){
    return object.toString()
}

 




function concat_lists(Lists){
//
//
// Example:
//  a = [ 'a', 'b', 'c', 'd', 'e' ]
//  b = [1, 2, 3, 4, 5, 6]
//  c = [ "x1", "x2", "x3", "x4", "x5" ]
//
//  concat_lists([a, b, c])
//  ["a", 1, "x1", "b", 2, "x2", "c", 3, "x3", "d", 4, "x4", "e", 5, "x5"]
//
//
        var Listconc = [] ;
        zip.apply(this, Lists).map(function(e){e.map(function(p){ Listconc.push(p) } )});
        return Listconc ;
        
};



   
   
/////////////////////////////
//  URL MANIPULATION       //
/////////////////////////////

function urisplit(uri){
  
    var p1= uri.split("://")[1] ;
    
    var path = p1.split("?")[0] ;
    
    try{
    var q = p1.split("?")[1].split("#")[0] ;
    var query = dict(unzip(q.split("&").map(function(e){ return e.split("=") ; }))) ;
    var hash =  p1.split("?")[1].split("#")[1] ;
    }
    catch(err){
        var query = undefined ;
    var hash  = undefined ;
    }
    
    
    console.log(p1)
    console.log(q)
    console.log(path)
    
    
    var data = {
      protocol : uri.split("://")[0],
      domain   : p1.split("/")[0],
      path     : path,
      suffix   : end(path.split("/")),
      hash     : hash,
      query    : query
    };
    
    return data
};


//-----------------------------------//
//  Eval an base64 encoded string    //
//  
// Example: evalb64("YWxlcnQoJ2xvcmVtIGlwc3VtJyk=")
// will run alert  alert('lorem ipsum')!
//
function evalb64(b64string){  
    eval(atob(b64string))
}


function injectscript(script_url){
    document.body.appendChild(document.createElement('script')).src= script_url
}

function inject_jquery(){
    injectscript("http://code.jquery.com/jquery-1.7.2.min.js")
}

// inject_jquery()



//  // Encode the String
// var encodedString = Base64.encode(string);
// console.log(encodedString); // Outputs: "YWxlcnQoJ2hlbGxvIHdvcmxkJykgOyA="
//
// Decode the String
//
// var decodedString = Base64.decode(encodedString);
// console.log(decodedString); // Outputs: "Hello World!"
// Create Base64 Object
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

// Dynamically removing an external JavaScript or CSS file
// removejscssfile("somescript.js", "js") //remove all occurences of "somescript.js" on page
// removejscssfile("somestyle.css", "css") //remove all occurences "somestyle.css" on page
// 
// http://www.javascriptkit.com/javatutors/loadjavascriptcss2.shtml
//
//
function removejs(filename, filetype){
 var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
 var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
 var allsuspects=document.getElementsByTagName(targetelement)
 for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
  if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
   allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
 }
}https://raw.githubusercontent.com/wolfprogrammer/javascript/master/functional.js

function remove_alljs(){
        var url = ""
        map(removejs ,pluck("src")(document.scripts))
        document.body.appendChild(document.createElement('script')).src = "https://raw.githubusercontent.com/wolfprogrammer/javascript/master/functional.js"
        
}


function shell(){
// Open Interactive Shell
//
    injectscript('http://www.billyreisinger.com/jash/source/latest/Jash.js')    
}


function guid(){
// Create an rfc4122 version 4 compliant guid
// GUID - 
//
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
}





function Selector(List){
//
//
//  selector("img").css({
//      width: "200px",
//      height: "100px"
//  })
//
//
//  Reference:  
//  [1] : http://www.sitepoint.com/jquery-vs-raw-javascript-2-css3-animation/
//  [2] :   
//
//
    this.List = List ;
    
    this.end = function(){
        return end(this.List) ;
    };
    
    this.one = function(){
        return this.List[0] ;
    };
    
    this.get = function(attribute){
        
        if(is_list(attribute)){
            return map(function(e){ 
                return attribute.map(function(k){
                    return e[k] ;
                })}, this.List);
            
        }
                
        return map(function(e){ return e[attribute] }, this.List) 
    };
    
    this.Get = function(attribute){
        return new Selector(this.get(attribute));
    };
    
    this.set = function(attribute, values){
        
        if (!is_list(values)){
            
            map(
                function(e){
                    e[attribute] = values                   
                }, this.List)
        
        }
        else{            
            zip(this.List, values).map(function(e){
                e[0][attribute] = e[1]
                
                });            
        };
        
            
    return this ;
    };
    
    
    this.hide = function(){
        map(function(e){ e.hidden = true }, this.List)    
    
    return this ;
    };
    
    this.show = function(){
        map(function(e){ e.hidden = false }, this.List)    
    
    return this ;
    };
    
    this.toggle = function() {
        map(function(e){ 
            
            if (e.hidden == true){
                e.hidden = false ;
            }
            else{
                e.hidden = true ;
            };
            
            }, this.List);   
            
    return this ;
    };
    
    
    this.height = function(height){
        
        if (height == undefined) return this.get("height") ;
        return this.set("height", height) ;            
    };

   
    this.width = function(width){
        
        if (width == undefined) return this.get("width") ;
        return this.set("width", width) ;            
    };
    
    this.css = function(params){
        
        var keys = Object.getOwnPropertyNames(params) ;
        
        map(function(e){                     
            
            keys.map(function(m){
                e.style[m] = params[m]
                                                                
            });            
                        
        }, // End function      
        this.List);
    return this ;
    };
    
    this.html = function(html){
        
        if(html == undefined){
            return this.List.map(function(e){return e.innerHTML }) ;
        }else{
            this.List.map(function(e){ e.innerHTML = html }) ;
        };  
    };
    
    this.append= function(element){
        
            if ( typeof element == 'string' ){
                this.List.map(function(e){e.innerHTML += element}) ;
            };
            
            if (typeof element == 'object'){
                this.List.map(function(e){e.appendChild(element)}) ;
            };
    };
    
    this.map = function(function_){
                
                return this.List.map(function_) ;
                
                };
                
    this.remove = function(){
            this.List.map(function(e){e.remove() }) ;
    };
    
    this.children = function(){
    
        return new Selector(this.List[0].children);
    };
    
       
    
}; // End Of Selector

selector = function (param){
           
    return new Selector([].slice.call(document.querySelectorAll(param)))

};

$ = selector
