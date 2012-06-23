Ext.define("picasa.view.Main", {
  //extend:'Ext.Container',
  extend:'Ext.navigation.View',
  xtype:'mainview',
  //layout:'fit',
  requires:[
    'Ext.tab.Panel',
    'Ext.Button'
  ],
  config:{
    tabBarPosition:'top',
    navigationBar:{
      items:[
        {
          html:'<span class="picasaHome">My Picasa</span>',
          itemId:'picasaHome',
          action:'home',
          ui:'plain',
          align:'left'
        },
        {
          xtype:'button',
          action:'reload',
          iconCls:'refresh',
          itemId:'refreshButton',
          iconMask:true,
          ui:'plain',
          align:'right'
        }
      ]
    },
    items:[
      {
        xtype:'tabpanel',
        title:'',
        tabBar:{
          layout : {
            pack : 'center'
          }
        },
        layout : {
          align:'center'
        },
        items:[
          {
            title:'Explore',
            xtype:'exploreview'
          },
          {
            title:'Following',
            cls:'following',
            xtype:'panel',
            //styleHtmlContent:true,
//            layout : {
//              pack : 'center',
//              align:'center'
//            },
            html:'<div class="following">No Items Found.<br> Click refresh button to re-sync.</div>'
          },
          {
            title:'Albums',
            xtype:'albumview'
          }
        ]
      }
    ]

  }
});