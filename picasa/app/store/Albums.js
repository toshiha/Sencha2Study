//AlbumView用のStore
Ext.define('picasa.store.Albums',{
  extend :'Ext.data.Store',
  requires:[
    'Ext.data.proxy.JsonP'
  ],
  config:{
    model:'picasa.model.Album',
    autoLoad:true,
    proxy : {
      type : 'jsonp',
      url : 'http://picasaweb.google.com/data/feed/api/user/thayashing?kind=album&alt=json-in-script&thumbsize=90c&imgmax=512',
      reader : {
        rootProperty : 'feed.entry',
        type : 'json',
        idProperty : 'id.$t'
      }
    }
  }
});