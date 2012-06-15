Ext.define('docomo.store.Groups',{
  extend :'Ext.data.Store',
  requires:['docomo.model.Group'],
  config:{
    model:'docomo.model.Group',
    autoLoad:true,
    proxy:{
      type:'ajax',
      url:'./data/data.json',
      reader:{
        rootProperty:'groups',
        type:'json'
      }
    }
  }
});