Ext.define("picasa.view.AlbumEachView", {
  extend:'Ext.DataView',
  xtype:'alubumeachview',
  requires:[
  ],
  config: {
    itemTpl:'<div class="thumb-wrap"><img src="{mediaThumbnail.url}" title="{title}" width="100"></div>',
    emptyText:'No images to display',
    cls:'photo100'
  },

  initialize:function () {
    this.callParent(arguments);
  }
});
