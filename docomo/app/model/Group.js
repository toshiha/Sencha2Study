Ext.define('docomo.model.Group', {
  extend:'Ext.data.Model',
  requires:[
    'docomo.model.Country',
    'docomo.model.Match'
  ],
  config:{
    fields:[
      {
        name:'group',
        type:'string'
      }
    ],
    hasMany:[
      {
        //associationKey:'countries',
        model:'docomo.model.Country',
        name: 'countries'
      },
      {
        //associationKey:'matches',
        model:'docomo.model.Match',
        name:'matches'
      }
    ]
  }
});