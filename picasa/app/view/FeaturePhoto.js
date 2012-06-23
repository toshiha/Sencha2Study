Ext.define("picasa.view.FeaturePhoto", {
  extend:'Ext.DataView',
  xtype:'featurephoto',
  requires:[
  ],
  config: {
    itemTpl:'<div class="thumb-wrap"><img src="{mediaThumbnail.url}" title="{title}" width="67" height="67"></div>',
    store:'PhotosFeature',
    emptyText:'No images to display',
    cls:'photo67',
    scrollable:false
  },

  initialize:function () {
    this.callParent(arguments);

  }
});
