Ext.define("picasa.view.Main", {
  //extend:'Ext.Container',
  extend:'Ext.navigation.View',
  xtype:'mainview',
  //layout:'fit',
  requires:[
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
        items:[
          {
            title:'Featured',
            xtype:'featureview'
          },
          {
            cls:'following',
            title:'Following',
            styleHtmlContent:true,
            html:'<div class="following">No Items Found.<br> Click refresh button to re-sync.</div>'
          }
        ]
      }
    ]

  }
});