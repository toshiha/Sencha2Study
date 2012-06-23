Ext.define("picasa.view.SearchView", {
  extend:'Ext.DataView',
  xtype:'searchview',
  requires:[
  ],
  config: {
    store:'PhotosSearch',
    itemTpl:'<div class="thumb-wrap"><img src="{mediaThumbnail.url}" title="{title}" width="100" height="100"></div>',
    emptyText:'',
    cls:'photo100'
  },
  initialize:function () {
    this.callParent(arguments);
  }
});
