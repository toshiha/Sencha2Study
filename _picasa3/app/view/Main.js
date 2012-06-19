Ext.define("picasa.view.Main", {
  extend:'Ext.navigation.View',
  xtype:'mainview',
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
          align: 'right'
        }
     ]
    },
    items:[
      {
        //items can have titles
        title:'My Picasa',
        items:[
          {
            xtype:'panel',
            items:[
              {
                 xtype:'featureview'
              },
              {
                html:'aaaaaaaaaaa'
              }
            ]
          }
        ]
      }
    ]

  }
});