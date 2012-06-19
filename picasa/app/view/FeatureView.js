Ext.define("picasa.view.FeatureView", {
  extend:'Ext.Container',
  xtype:'featureview',
  requires:[
  ],
  config:{
    scrollable:{
      direction: 'vertical',
      directionLock: true
    },
    layout:'vbox',
    items:[
      {
        html:'<h2>Featured</h2>',
        styleHtmlContent:true
      },
      {
        xtype:'featurephoto',
        styleHtmlContent:true,
        scrollable:false
      },
      {
        html:'<h2>Popular</h2>',
        styleHtmlContent:true
      },
      {
        xtype:'searchfield',
        placeHolder:'search',
        styleHtmlContent:true
      },
      {
        html:'<span>italy</span><span>new</span><span>flowers</span><span>pics</span><span>newyork</span>',
        styleHtmlContent:true
      }
    ]
  },

  initialize:function () {
    this.callParent(arguments);
  }
});
