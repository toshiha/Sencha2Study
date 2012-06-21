Ext.define('picasa.store.PhotosSearch',{
  extend :'Ext.data.Store',
  requires:[
    'Ext.data.proxy.JsonP'
  ],
  config:{
    model:'picasa.model.Photo',
    proxy:{
      type:'jsonp',
      url:'http://picasaweb.google.com/data/feed/api/all?kind=photo&alt=json-in-script&start-index=1&max-results=21&thumbsize=100c&imgmax=512',
      reader:{
        rootProperty:'feed.entry',
        type:'json',
        idProperty:'id.$t'
      }
    }
  }
});