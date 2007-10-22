/*
 * Ext JS Library 2.0 Dev 5
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * This code has not yet been licensed for use.
 */


Ext={};window["undefined"]=window["undefined"];Ext.apply=function(o,c,defaults){if(defaults){Ext.apply(o,defaults);}
if(o&&c&&typeof c=='object'){for(var p in c){o[p]=c[p];}}
return o;};(function(){var idSeed=0;var ua=navigator.userAgent.toLowerCase();var isStrict=document.compatMode=="CSS1Compat",isOpera=ua.indexOf("opera")>-1,isSafari=(/webkit|khtml/).test(ua),isIE=ua.indexOf("msie")>-1,isIE7=ua.indexOf("msie 7")>-1,isGecko=!isSafari&&ua.indexOf("gecko")>-1,isBorderBox=isIE&&!isStrict,isWindows=(ua.indexOf("windows")!=-1||ua.indexOf("win32")!=-1),isMac=(ua.indexOf("macintosh")!=-1||ua.indexOf("mac os x")!=-1),isLinux=(ua.indexOf("linux")!=-1),isSecure=window.location.href.toLowerCase().indexOf("https")===0;if(isIE&&!isIE7){try{document.execCommand("BackgroundImageCache",false,true);}catch(e){}}
Ext.apply(Ext,{isStrict:isStrict,isSecure:isSecure,isReady:false,enableGarbageCollector:true,enableListenerCollection:false,SSL_SECURE_URL:"javascript:false",BLANK_IMAGE_URL:"http:/"+"/extjs.com/s.gif",emptyFn:function(){},applyIf:function(o,c){if(o&&c){for(var p in c){if(typeof o[p]=="undefined"){o[p]=c[p];}}}
return o;},addBehaviors:function(o){if(!Ext.isReady){Ext.onReady(function(){Ext.addBehaviors(o);});return;}
var cache={};for(var b in o){var parts=b.split('@');if(parts[1]){var s=parts[0];if(!cache[s]){cache[s]=Ext.select(s);}
cache[s].on(parts[1],o[b]);}}
cache=null;},id:function(el,prefix){prefix=prefix||"ext-gen";el=Ext.getDom(el);var id=prefix+(++idSeed);return el?(el.id?el.id:(el.id=id)):id;},extend:function(){var io=function(o){for(var m in o){this[m]=o[m];}};return function(sb,sp,overrides){if(typeof sp=='object'){overrides=sp;sp=sb;sb=function(){sp.apply(this,arguments);};}
var F=function(){},sbp,spp=sp.prototype;F.prototype=spp;sbp=sb.prototype=new F();sbp.constructor=sb;sb.superclass=spp;if(spp.constructor==Object.prototype.constructor){spp.constructor=sp;}
sb.override=function(o){Ext.override(sb,o);};sbp.override=io;Ext.override(sb,overrides);return sb;};}(),override:function(origclass,overrides){if(overrides){var p=origclass.prototype;for(var method in overrides){p[method]=overrides[method];}}},namespace:function(){var a=arguments,o=null,i,j,d,rt;for(i=0;i<a.length;++i){d=a[i].split(".");rt=d[0];eval('if (typeof '+rt+' == "undefined"){'+rt+' = {};} o = '+rt+';');for(j=1;j<d.length;++j){o[d[j]]=o[d[j]]||{};o=o[d[j]];}}},urlEncode:function(o){if(!o){return"";}
var buf=[];for(var key in o){var ov=o[key],k=encodeURIComponent(key);var type=typeof ov;if(type=='undefined'){buf.push(k,"=&");}else if(type!="function"&&type!="object"){buf.push(k,"=",encodeURIComponent(ov),"&");}else if(ov instanceof Array){if(ov.length){for(var i=0,len=ov.length;i<len;i++){buf.push(k,"=",encodeURIComponent(ov[i]===undefined?'':ov[i]),"&");}}else{buf.push(k,"=&");}}}
buf.pop();return buf.join("");},urlDecode:function(string,overwrite){if(!string||!string.length){return{};}
var obj={};var pairs=string.split('&');var pair,name,value;for(var i=0,len=pairs.length;i<len;i++){pair=pairs[i].split('=');name=decodeURIComponent(pair[0]);value=decodeURIComponent(pair[1]);if(overwrite!==true){if(typeof obj[name]=="undefined"){obj[name]=value;}else if(typeof obj[name]=="string"){obj[name]=[obj[name]];obj[name].push(value);}else{obj[name].push(value);}}else{obj[name]=value;}}
return obj;},each:function(array,fn,scope){if(typeof array.length=="undefined"||typeof array=="string"){array=[array];}
for(var i=0,len=array.length;i<len;i++){if(fn.call(scope||array[i],array[i],i,array)===false){return i;};}},combine:function(){var as=arguments,l=as.length,r=[];for(var i=0;i<l;i++){var a=as[i];if(a instanceof Array){r=r.concat(a);}else if(a.length!==undefined&&!a.substr){r=r.concat(Array.prototype.slice.call(a,0));}else{r.push(a);}}
return r;},escapeRe:function(s){return s.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1");},callback:function(cb,scope,args,delay){if(typeof cb=="function"){if(delay){cb.defer(delay,scope,args||[]);}else{cb.apply(scope,args||[]);}}},getDom:function(el){if(!el){return null;}
return el.dom?el.dom:(typeof el=='string'?document.getElementById(el):el);},getDoc:function(){return Ext.get(document);},getBody:function(){return Ext.get(document.body||document.documentElement);},getCmp:function(id){return Ext.ComponentMgr.get(id);},num:function(v,defaultValue){if(typeof v!='number'){return defaultValue;}
return v;},destroy:function(){for(var i=0,a=arguments,len=a.length;i<len;i++){var as=a[i];if(as){if(as.dom){as.removeAllListeners();as.remove();continue;}
if(typeof as.purgeListeners=='function'){as.purgeListeners();}
if(typeof as.destroy=='function'){as.destroy();}}}},type:function(o){if(o===undefined||o===null){return false;}
if(o.htmlElement){return'element';}
var t=typeof o;if(t=='object'&&o.nodeName){switch(o.nodeType){case 1:return'element';case 3:return(/\S/).test(o.nodeValue)?'textnode':'whitespace';}}
if(t=='object'||t=='function'){switch(o.constructor){case Array:return'array';case RegExp:return'regexp';}
if(typeof o.length=='number'&&typeof o.item=='function'){return'nodelist';}}
return t;},isEmpty:function(v,allowBlank){return v===null||v===undefined||(!allowBlank?v==='':false);},value:function(v,defaultValue,allowBlank){return Ext.isEmpty(v,allowBlank)?defaultValue:v;},isOpera:isOpera,isSafari:isSafari,isIE:isIE,isIE7:isIE7,isGecko:isGecko,isBorderBox:isBorderBox,isLinux:isLinux,isWindows:isWindows,isMac:isMac,isAir:!!window.htmlControl,useShims:((isIE&&!isIE7)||(isGecko&&isMac))});})();Ext.namespace("Ext","Ext.util","Ext.grid","Ext.dd","Ext.tree","Ext.data","Ext.form","Ext.menu","Ext.state","Ext.lib","Ext.layout","Ext.app","Ext.ux");Ext.apply(Function.prototype,{createCallback:function(){var args=arguments;var method=this;return function(){return method.apply(window,args);};},createDelegate:function(obj,args,appendArgs){var method=this;return function(){var callArgs=args||arguments;if(appendArgs===true){callArgs=Array.prototype.slice.call(arguments,0);callArgs=callArgs.concat(args);}else if(typeof appendArgs=="number"){callArgs=Array.prototype.slice.call(arguments,0);var applyArgs=[appendArgs,0].concat(args);Array.prototype.splice.apply(callArgs,applyArgs);}
return method.apply(obj||window,callArgs);};},defer:function(millis,obj,args,appendArgs){var fn=this.createDelegate(obj,args,appendArgs);if(millis){return setTimeout(fn,millis);}
fn();return 0;},createSequence:function(fcn,scope){if(typeof fcn!="function"){return this;}
var method=this;return function(){var retval=method.apply(this||window,arguments);fcn.apply(scope||this||window,arguments);return retval;};},createInterceptor:function(fcn,scope){if(typeof fcn!="function"){return this;}
var method=this;return function(){fcn.target=this;fcn.method=method;if(fcn.apply(scope||this||window,arguments)===false){return;}
return method.apply(this||window,arguments);};}});Ext.applyIf(String,{escape:function(string){return string.replace(/('|\\)/g,"\\$1");},leftPad:function(val,size,ch){var result=new String(val);if(ch===null||ch===undefined||ch===''){ch=" ";}
while(result.length<size){result=ch+result;}
return result;},format:function(format){var args=Array.prototype.slice.call(arguments,1);return format.replace(/\{(\d+)\}/g,function(m,i){return args[i];});}});String.prototype.toggle=function(value,other){return this==value?other:value;};String.prototype.trim=function(){var re=/^\s+|\s+$/g;return function(){return this.replace(re,"");};}();Ext.applyIf(Number.prototype,{constrain:function(min,max){return Math.min(Math.max(this,min),max);}});Ext.applyIf(Array.prototype,{indexOf:function(o){for(var i=0,len=this.length;i<len;i++){if(this[i]==o)return i;}
return-1;},remove:function(o){var index=this.indexOf(o);if(index!=-1){this.splice(index,1);}
return this;}});Date.prototype.getElapsed=function(date){return Math.abs((date||new Date()).getTime()-this.getTime());};