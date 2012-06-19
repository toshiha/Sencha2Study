Ext.define('picasa.store.PhotosFeature',{
  extend :'Ext.data.Store',
  config:{
    model:'picasa.model.Photo',
    autoLoad:true,
    proxy:{
      type:'jsonp',
      url:'http://picasaweb.google.com/data/feed/api/featured?kind=photo&alt=json-in-script&start-index=1&max-results=8&thumbsize=72c&imgmax=512',
      reader:{
        rootProperty:'feed.entry',
        type:'json',
        idProperty:'id.$t'
      }
    }
  }
});