Ext.define("picasa.view.Detail", {
  extend:'Ext.carousel.Carousel',
  xtype:'detailview',
  requires:[
  ],
  config: {
    indicator : true,
    fullscreen : true
  },

  initialize:function () {
    this.callParent(arguments);

  }
});
