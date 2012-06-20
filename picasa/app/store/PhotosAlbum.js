Ext.define('picasa.store.PhotosAlbum',{
  extend :'Ext.data.Store',
  config:{
    model:'picasa.model.Photo',
    autoLoad:true,
    proxy:{
      type:'jsonp',
      url:'',
      reader:{
        rootProperty:'feed.entry',
        type:'json',
        idProperty:'id.$t'
      }
    }
  }
});