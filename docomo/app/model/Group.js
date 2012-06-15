Ext.define('docomo.model.Tweet', {
  extend:'Ext.data.Model',
  config:{
    fields:[
      {
        name:'text',
        type:'string'
      },
      {
        name:'created_at',
        type:'date'
      }
    ]
  }
});