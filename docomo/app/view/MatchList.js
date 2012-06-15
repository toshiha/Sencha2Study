Ext.define("docomo.view.CountryList", {
  extend:'Ext.dataview.List',
  xtype:'countrylist',
  requires:[
    'Ext.dataview.List'
  ],
  config:{
    itemTpl:'<div><span>{name}</span></div>'
  }
});
