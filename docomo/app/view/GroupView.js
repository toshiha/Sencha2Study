Ext.define("docomo.view.Main", {
  extend:'Ext.tab.Panel',
  xtype:'mainview',
  requires:[
    'Ext.TitleBar',
    'Ext.Video',
    'docomo.view.TweetList'
  ],
  config:{
    tabBarPosition:'bottom',
    items:[
      {
        title:'Group',
        xtype:'list',
        store:'Groups',
        itemTpl:'<div><span class="group">{group}</span></div>',
        iconCls:'home'
      },
      {
        title:'Twitter',
        iconCls:'info',
        xtype:'tweetlist'
      }
    ]
  }
});
