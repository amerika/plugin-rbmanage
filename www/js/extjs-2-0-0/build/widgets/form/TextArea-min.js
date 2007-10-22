/*
 * Ext JS Library 2.0 Dev 5
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * This code has not yet been licensed for use.
 */


Ext.form.TextArea=function(config){Ext.form.TextArea.superclass.constructor.call(this,config);if(this.minHeight!==undefined){this.growMin=this.minHeight;}
if(this.maxHeight!==undefined){this.growMax=this.maxHeight;}};Ext.extend(Ext.form.TextArea,Ext.form.TextField,{growMin:60,growMax:1000,growAppend:'&#160;\n&#160;',growPad:0,enterIsSpecial:false,preventScrollbars:false,onRender:function(ct,position){if(!this.el){this.defaultAutoCreate={tag:"textarea",style:"width:100px;height:60px;",autocomplete:"off"};}
Ext.form.TextArea.superclass.onRender.call(this,ct,position);if(this.grow){this.textSizeEl=Ext.DomHelper.append(document.body,{tag:"pre",cls:"x-form-grow-sizer"});if(this.preventScrollbars){this.el.setStyle("overflow","hidden");}
this.el.setHeight(this.growMin);}},onDestroy:function(){if(this.textSizeEl){this.textSizeEl.parentNode.removeChild(this.textSizeEl);}
Ext.form.TextArea.superclass.onDestroy.call(this);},fireKey:function(e){if(e.isSpecialKey()&&(this.enterIsSpecial||(e.getKey()!=e.ENTER||e.hasModifier()))){this.fireEvent("specialkey",this,e);}},onKeyUp:function(e){if(!e.isNavKeyPress()||e.getKey()==e.ENTER){this.autoSize();}},autoSize:function(){if(!this.grow||!this.textSizeEl){return;}
var el=this.el;var v=el.dom.value;var ts=this.textSizeEl;ts.innerHTML='';ts.appendChild(document.createTextNode(v));v=ts.innerHTML;Ext.fly(ts).setWidth(this.el.getWidth());if(v.length<1){v="&#160;&#160;";}else{if(Ext.isIE){v=v.replace(/\n/g,'<p>&#160;</p>');}
v+=this.growAppend;}
ts.innerHTML=v;var h=Math.min(this.growMax,Math.max(ts.offsetHeight,this.growMin)+this.growPad);if(h!=this.lastHeight){this.lastHeight=h;this.el.setHeight(h);this.fireEvent("autosize",this,h);}}});Ext.reg('textarea',Ext.form.TextArea);