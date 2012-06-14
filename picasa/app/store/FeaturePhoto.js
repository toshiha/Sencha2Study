Ext.create('Ext.data.Store', {
  model:'Photo',
  storeId:'FeaturePhoto',
  autoLoad:true,
  proxy:{
    type:'scripttag',
    url:'http://picasaweb.google.com/data/feed/api/featured?kind=photo&alt=json-in-script&start-index=1&max-results=8&thumbsize=72c&imgmax=512',
    reader:{
      rootProperty:'feed.entry',
      type:'json',
      idProperty:'id.$t'
    }
  }
});