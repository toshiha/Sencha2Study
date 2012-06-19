Ext.define('picasa.store.Albums',{
  extend :'Ext.data.Store',
  config:{
    model:'picasa.model.Album',
    autoLoad:true,
    proxy : {
      type : 'scripttag',
      url : 'http://picasaweb.google.com/data/feed/api/user/thayashing?kind=album&alt=json-in-script&thumbsize=90c&imgmax=512',
      reader : {
        root : 'feed.entry',
        type : 'json',
        idProperty : 'id.$t'
      }
    }
  }
});