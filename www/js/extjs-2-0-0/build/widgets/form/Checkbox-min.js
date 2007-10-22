/*
 * Ext JS Library 2.0 Dev 5
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * This code has not yet been licensed for use.
 */


Ext.form.Checkbox=function(config){Ext.form.Checkbox.superclass.constructor.call(this,config);this.addEvents({check:true});};Ext.extend(Ext.form.Checkbox,Ext.form.Field,{focusClass:undefined,fieldClass:"x-form-field",checked:false,defaultAutoCreate:{tag:"input",type:'checkbox',autocomplete:"off"},boxLabel:undefined,onResize:function(){Ext.form.Checkbox.superclass.onResize.apply(this,arguments);if(!this.boxLabel){this.el.alignTo(this.wrap,'c-c');}},initEvents:function(){Ext.form.Checkbox.superclass.initEvents.call(this);this.el.on("click",this.onClick,this);this.el.on("change",this.onClick,this);},getResizeEl:function(){return this.wrap;},getPositionEl:function(){return this.wrap;},onRender:function(ct,position){Ext.form.Checkbox.superclass.onRender.call(this,ct,position);if(this.inputValue!==undefined){this.el.dom.value=this.inputValue;}
this.wrap=this.el.wrap({cls:"x-form-check-wrap"});if(this.boxLabel){this.wrap.createChild({tag:'label',htmlFor:this.el.id,cls:'x-form-cb-label',html:this.boxLabel});}
if(this.checked){this.setValue(true);}else{this.checked=this.el.dom.checked;}},initValue:Ext.emptyFn,getValue:function(){if(this.rendered){return this.el.dom.checked;}
return false;},onClick:function(){if(this.el.dom.checked!=this.checked){this.setValue(this.el.dom.checked);}},setValue:function(v){this.checked=(v===true||v==='true'||v=='1'||String(v).toLowerCase()=='on');if(this.el&&this.el.dom){this.el.dom.checked=this.checked;this.el.dom.defaultChecked=this.checked;}
this.fireEvent("check",this,this.checked);}});Ext.reg('checkbox',Ext.form.Checkbox);