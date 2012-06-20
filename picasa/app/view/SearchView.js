Ext.define("picasa.view.SearchView", {
  extend:'Ext.DataView',
  xtype:'searchview',
  requires:[
  ],
  config: {
    store:'PhotosSearch',
    itemTpl:'<div class="thumb-wrap"><img src="{mediaThumbnail.url}" title="{title}" width="67"></div>',
    emptyText:''
  },
  initialize:function () {
    this.callParent(arguments);
  }
});
