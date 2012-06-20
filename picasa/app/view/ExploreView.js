Ext.define("picasa.view.ExploreView", {
  extend:'Ext.Container',
  xtype:'exploreview',
  requires:[
    'Ext.field.Search',
    'picasa.view.TagButton'
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
//      {
//        html:'<span class="popTag">italy</span><span class="popTag">new</span><span class="popTag">flowers</span><span class="popTag">pics</span><span class="popTag">newyork</span>',
//        styleHtmlContent:true
//      },
      {
        scrollable:false,
//        layout: {
//          type: 'hbox',
//          align: 'start',
//          pack: 'start'
//        },

        items:[
          {
            xtype:'button',
            text:'italy',
            action:'tag',
            cls:'searchTag',
            margin:5
          },
          {
            xtype:'button',
            text:'new',
            action:'tag',
            cls:'searchTag',
            margin:5
          },
          {
            xtype:'button',
            text:'flowers',
            action:'tag',
            cls:'searchTag',
            margin:5
          },
          {
            xtype:'button',
            text:'pics',
            action:'tag',
            cls:'searchTag',
            margin:5
          },
          {
            xtype:'button',
            text:'Jazz',
            action:'tag',
            cls:'searchTag',
            margin:5
          },
          {
            xtype:'button',
            text:'NewYork',
            action:'tag',
            cls:'searchTag',
            margin:5
          },
          {
            xtype:'button',
            text:'Cars2',
            action:'tag',
            cls:'searchTag',
            margin:5
          }
        ]
      }
    ]
  },

  initialize:function () {
    this.callParent(arguments);
  }
});
