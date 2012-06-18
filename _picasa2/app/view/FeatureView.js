Ext.define("picasa.view.FeatureView", {
  extend:'Ext.navigation.View',
  xtype:'featureview',
  requires:[
  ],
  config:{
    //navigationBar:false,
    items:[
      {
        items:[
          {
            html:'<h2>Featured</h2>',
            styleHtmlContent : true
          },
          {
            xtype:'featurelist',
            height:'300px',
            styleHtmlContent : true
          },
          {
            html:'<h2>Popular</h2>',
            styleHtmlContent : true
          },
          {
            xtype:'searchfield',
            placeHolder:'search',
            styleHtmlContent : true
          },
          {
            html:'<span>italy</span><span>new</span><span>flowers</span><span>pics</span><span>newyork</span>',
            styleHtmlContent : true
          }
        ]
      }
    ]
  },

  initialize:function () {
    this.callParent(arguments);
  }
});
