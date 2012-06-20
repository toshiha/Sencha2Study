Ext.define('picasa.controller.Album', {
  extend:'Ext.app.Controller',

  config:{
    refs:{
      mainview:'mainview',
      albumview:'albumview',
      refreshbutton:'mainview button[action=reload]'
    },
    control:{
      albumview:{
        itemtap:'onAlbumSelect'
      },
      mainview:{
        push:'onPush',
        pop:'onPop'
      }
    }
  },
  launch:function (app) {
    this.firstView = this.getMainview().getActiveItem();
  },
  onAlbumSelect:function () {
    var index = arguments[1];
    var model = Ext.getStore('Albums').data.items[index].data;
    var albumurl = model.link + '&thumbsize=72c&imgmax=512';
    console.log(albumurl);
    var album = Ext.create('picasa.view.AlbumEachView', {
      title: model.title,
      store :{
        model:'picasa.model.Photo',
        autoLoad:true,
        proxy:{
          type:'jsonp',
          url:albumurl,
          reader:{
            rootProperty:'feed.entry',
            type:'json',
            idProperty:'id.$t'
          }
        }
      }
    });
    this.getMainview().push(album);
  },
  onPush:function () {
    //console.log("push");
    this.getRefreshbutton().setHidden(true);
  },
  onPop:function () {
    //console.log("pop");
    //console.log(this.getMainview().items.length);
    if (this.firstView === this.getMainview().getActiveItem()) {
      this.getRefreshbutton().setHidden(false);
    }
  }
});