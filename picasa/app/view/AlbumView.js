Ext.define("picasa.view.AlbumView", {
  extend:'Ext.DataView',
  xtype:'albumview',
  requires:[
  ],
  config: {
    itemTpl:'<div class="album-wrap"><div class="album-wrap-inner"><img src="{mediaThumbnail.url}" title="{title}" width="83" height="83"></div><span class="title">{title}</span></div>',
    store:'Albums',
    emptyText:'No images to display',
    cls:'myAlbum'
  },

  initialize:function () {
    this.callParent(arguments);
  }
});
