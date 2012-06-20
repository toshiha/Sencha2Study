Ext.define("picasa.view.TagButton", {
  extend:'Ext.DataView',
  xtype:'searchview',
  requires:[
    'Ext.Button'
  ],
  config: {
    store:'PhotosSearch',
    itemTpl:'<div class="thumb-wrap"><img src="{mediaThumbnail.url}" title="{title}" width="67"></div>',
    emptyText:'No images to display'
  },
  initialize:function () {
    this.callParent(arguments);
  }
});
