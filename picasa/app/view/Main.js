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
        title:'My Picasa',
        tabBar:{
          layout : {
            pack : 'center'
          }
        },
        items:[
          {
            title:'Explore',
            xtype:'exploreview'
          },
          {
            title:'Following',
            cls:'following',
            styleHtmlContent:true,
            html:'<div class="following">No Items Found.<br> Click refresh button to re-sync.</div>'
          },
          {
            title:'Albums',
            xtype:'albumview',
            cls:'albums'
          }
        ]
      }
    ]

  }
});