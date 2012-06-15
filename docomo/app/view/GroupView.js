Ext.define("docomo.view.GroupView", {
  extend:'Ext.navigation.View',
  xtype:'groupview',
  requires:[
    'Ext.dataview.List'
  ],
  config:{
    items:[
      {
        title:'アジア最終予選',
        xtype:'list',
        store:'Groups',
        itemTpl:'<div><span class="group">{group}</span></div>',
        iconCls:'home'
      }
    ]
  }
});
