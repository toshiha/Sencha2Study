Ext.define('docomo.store.Tweets',{
  extend :'Ext.data.Store',
  requires:['docomo.model.Tweet'],
  config:{
    model:'docomo.model.Tweet',
    proxy:{
      type:'jsonp',
      url:'http://search.twitter.com/search.json',
      reader:{
        rootProperty:'results',
        type:'json'
      }
    }
  }
});