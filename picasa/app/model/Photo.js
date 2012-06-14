Ext.define('picasa.model.Photo', {
  extend:'Ext.data.Model',
  config:{
    fields:[
      {
        name:'id',
        mapping:'gphoto$id.$t'
      },
      {
        name:'title',
        mapping:'title.$t'
      },
      {
        name:'mediaThumbnail',
        mapping:'media$group.media$thumbnail[0]'
      },
      {
        name:'mediaContent',
        mapping:'media$group.media$content[0]'
      }
    ]
  },
  proxy : {
    type : 'jsonp',
    url : 'http://picasaweb.google.com/data/feed/api/featured?kind=photo&alt=json-in-script&start-index=1&max-results=8&thumbsize=72c&imgmax=512',
    reader : {
      root : 'feed.entry',
      type : 'json',
      idProperty : 'id.$t'
    }
  }
});