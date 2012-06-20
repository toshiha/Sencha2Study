Ext.define("picasa.view.AlbumEachView", {
  extend:'Ext.DataView',
  xtype:'alubumeachviiew',
  requires:[
  ],
  config: {
    itemTpl:'<div class="thumb-wrap"><img src="{mediaThumbnail.url}" title="{title}" width="67"></div>',
    emptyText:'No images to display',
    scrollable:false
  },

  initialize:function () {
    this.callParent(arguments);
  }
});
