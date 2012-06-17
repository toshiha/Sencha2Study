Ext.define("picasa.view.FeatureList", {
  extend:'Ext.DataView',
  xtype:'featurelist',
  requires:[
  ],
  config: {
    tpl:Ext.XTemplate('<div class="titleBox"><h2>Featured</h2></div>', '<div class="imageContainer">', '<tpl for=".">', '<div class="thumb-wrap">', '<img src="{mediaThumbnail.url}" title="{title}" width="67">', '</div>', '</tpl>', '</div>', '<div class="x-clear"></div>'),
    //itemTpl:'<div class="thumb-wrap"><img src="{mediaThumbnail.url}" title="{title}" width="67"></div>',
    store:'PhotosFeature',
    emptyText:'No images to display'
  },

  initialize:function () {
    //this.tpl = new Ext.XTemplate('<div class="titleBox"><h2>Featured</h2></div>', '<div class="imageContainer">', '<tpl for=".">', '<div class="thumb-wrap">', '<img src="{mediaThumbnail.url}" title="{title}" width="67">', '</div>', '</tpl>', '</div>', '<div class="x-clear"></div>');
    this.callParent(arguments);
    var _self = this;
    var store = Ext.getStore('PhotosFeature');
    store.load({
      callback: function(records, operation, success) {
        // the operation object contains all of the details of the load operation
        //_self.tpl.apply(records);
        console.log(_self.tpl);
      },
      scope: this
    });
  }
});
