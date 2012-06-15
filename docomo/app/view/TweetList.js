Ext.define("docomo.view.Main", {
  extend:'Ext.tab.Panel',
  xtype:'mainview',
  requires:[
    'Ext.TitleBar',
    'Ext.Video'
  ],
  config:{
    tabBarPosition:'bottom',
    items:[
      {
        title:'Group',
        iconCls:'home',
        html:[
          "ダミー1"
        ].join("")
      },
      {
        title:'Twitter',
        iconCls:'info',
        html:[
          "ダミー2"
        ].join("")
      }
    ]
  }
});