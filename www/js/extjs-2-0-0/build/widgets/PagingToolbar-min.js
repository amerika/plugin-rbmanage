/*
 * Ext JS Library 2.0 Dev 5
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * This code has not yet been licensed for use.
 */


Ext.PagingToolbar=Ext.extend(Ext.Toolbar,{pageSize:20,displayMsg:'Displaying {0} - {1} of {2}',emptyMsg:'No data to display',beforePageText:"Page",afterPageText:"of {0}",firstText:"First Page",prevText:"Previous Page",nextText:"Next Page",lastText:"Last Page",refreshText:"Refresh",paramNames:{start:'start',limit:'limit'},initComponent:function(){Ext.PagingToolbar.superclass.initComponent.call(this);this.cursor=0;this.bind(this.store);},onRender:function(ct,position){Ext.PagingToolbar.superclass.onRender.call(this,ct,position);this.first=this.addButton({tooltip:this.firstText,cls:"x-btn-icon x-grid-page-first",disabled:true,handler:this.onClick.createDelegate(this,["first"])});this.prev=this.addButton({tooltip:this.prevText,cls:"x-btn-icon x-grid-page-prev",disabled:true,handler:this.onClick.createDelegate(this,["prev"])});this.addSeparator();this.add(this.beforePageText);this.field=Ext.get(this.addDom({tag:"input",type:"text",size:"3",value:"1",cls:"x-grid-page-number"}).el);this.field.on("keydown",this.onPagingKeydown,this);this.field.on("focus",function(){this.dom.select();});this.afterTextEl=this.addText(String.format(this.afterPageText,1));this.field.setHeight(18);this.addSeparator();this.next=this.addButton({tooltip:this.nextText,cls:"x-btn-icon x-grid-page-next",disabled:true,handler:this.onClick.createDelegate(this,["next"])});this.last=this.addButton({tooltip:this.lastText,cls:"x-btn-icon x-grid-page-last",disabled:true,handler:this.onClick.createDelegate(this,["last"])});this.addSeparator();this.loading=this.addButton({tooltip:this.refreshText,cls:"x-btn-icon x-grid-loading",handler:this.onClick.createDelegate(this,["refresh"])});if(this.displayInfo){this.displayEl=Ext.fly(this.el.dom).createChild({cls:'x-paging-info'});}
if(this.dsLoaded){this.onLoad.apply(this,this.dsLoaded);}},updateInfo:function(){if(this.displayEl){var count=this.store.getCount();var msg=count==0?this.emptyMsg:String.format(this.displayMsg,this.cursor+1,this.cursor+count,this.store.getTotalCount());this.displayEl.update(msg);}},onLoad:function(store,r,o){if(!this.rendered){this.dsLoaded=[store,r,o];return;}
this.cursor=o.params?o.params[this.paramNames.start]:0;var d=this.getPageData(),ap=d.activePage,ps=d.pages;this.afterTextEl.el.innerHTML=String.format(this.afterPageText,d.pages);this.field.dom.value=ap;this.first.setDisabled(ap==1);this.prev.setDisabled(ap==1);this.next.setDisabled(ap==ps);this.last.setDisabled(ap==ps);this.loading.enable();this.updateInfo();},getPageData:function(){var total=this.store.getTotalCount();return{total:total,activePage:Math.ceil((this.cursor+this.pageSize)/this.pageSize),pages:total<this.pageSize?1:Math.ceil(total/this.pageSize)};},onLoadError:function(){if(!this.rendered){return;}
this.loading.enable();},readPage:function(d){var v=this.field.dom.value,pageNum;if(!v||isNaN(pageNum=parseInt(v,10))){this.field.dom.value=d.activePage;return false;}
return pageNum;},onPagingKeydown:function(e){var k=e.getKey(),d=this.getPageData(),pageNum;if(k==e.RETURN){e.stopEvent();if(pageNum=this.readPage(d)){pageNum=Math.min(Math.max(1,pageNum),d.pages)-1;this.doLoad(pageNum*this.pageSize);}}else if(k==e.HOME||k==e.END){e.stopEvent();pageNum=k==e.HOME?1:d.pages;this.field.dom.value=pageNum;}else if(k==e.UP||k==e.PAGEUP||k==e.DOWN||k==e.PAGEDOWN){e.stopEvent();if(pageNum=this.readPage(d)){var increment=e.shiftKey?10:1;if(k==e.DOWN||k==e.PAGEDOWN){increment*=-1;}
pageNum+=increment;if(pageNum>=1&pageNum<=d.pages){this.field.dom.value=pageNum;}}}},beforeLoad:function(){if(this.rendered&&this.loading){this.loading.disable();}},doLoad:function(start){var o={},pn=this.paramNames;o[pn.start]=start;o[pn.limit]=this.pageSize;this.store.load({params:o});},onClick:function(which){var store=this.store;switch(which){case"first":this.doLoad(0);break;case"prev":this.doLoad(Math.max(0,this.cursor-this.pageSize));break;case"next":this.doLoad(this.cursor+this.pageSize);break;case"last":var total=store.getTotalCount();var extra=total%this.pageSize;var lastStart=extra?(total-extra):total-this.pageSize;this.doLoad(lastStart);break;case"refresh":this.doLoad(this.cursor);break;}},unbind:function(store){store=Ext.StoreMgr.lookup(store);store.un("beforeload",this.beforeLoad,this);store.un("load",this.onLoad,this);store.un("loadexception",this.onLoadError,this);this.store=undefined;},bind:function(store){store=Ext.StoreMgr.lookup(store);store.on("beforeload",this.beforeLoad,this);store.on("load",this.onLoad,this);store.on("loadexception",this.onLoadError,this);this.store=store;}});Ext.reg('paging',Ext.PagingToolbar);