Ext.define("picasa.view.DetailView", {
  extend:'Ext.carousel.Carousel',
  xtype:'detailview',
  requires:[
  ],
  config: {
    indicator : true,
    fullscreen : true,
    styleHtmlContent:true
  },

  initialize:function () {
    this.callParent(arguments);

  }
});
