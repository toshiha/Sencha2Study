Ext.define("docomo.view.GroupDetail", {
  extend:'Ext.tab.Panel',
  xtype:'groupdetail',
  requires:[
  ],
  config:{
    items:[
      {xtype:'countrylist', title:'国'},
      {xtype:'matchlist', title:'日程'}
    ]
  },
  initialize:function() {
    this.callParent(arguments);
    //this.down('countrylist').setStore(this.stores.countries);
    //this.down('matchlist').setStore(this.stores.matches);
  }
});
