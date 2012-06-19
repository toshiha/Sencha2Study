Ext.define("picasa.view.FeaturePhoto", {
  extend:'Ext.DataView',
  xtype:'featurephoto',
  requires:[
  ],
  config: {
    itemTpl:'<div class="thumb-wrap"><img src="{mediaThumbnail.url}" title="{title}" width="67"></div>',
    store:'PhotosFeature',
    emptyText:'No images to display',
    scrollable:false
  },

  initialize:function () {
    this.callParent(arguments);

  }
});
