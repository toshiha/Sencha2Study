//Album用コントローラ定義
Ext.define('picasa.controller.Album', {
  extend:'Ext.app.Controller',
  config:{
    refs:{
      mainview:'mainview',
      albumview:'albumview',
      alubumeachview:'alubumeachview'
    },
    control:{
      albumview:{
        itemtap:'onAlbumSelect'
      },
      alubumeachview:{
        itemtap:'onAlbumEachSelect'
      }
    }
  },
  //Albumが選択された時のイベントハンドラ
  onAlbumSelect:function () {
    var index = arguments[1];
    var model = Ext.getStore('Albums').data.items[index].data;
    var albumurl = model.link + '&thumbsize=100c&imgmax=512';
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
    //ナビゲーションビューにビューのプッシュ
    this.getMainview().push(album);
  },
  //Albumの個々の写真が選択された時のイベントハンドラ
  onAlbumEachSelect:function () {
    var index = arguments[1];
    var store = arguments[0].getStore();
    var photodata = store.data.items;
    var carousel = Ext.create('picasa.view.DetailView', {
      title:'',
      photoData:photodata,
      photoIndex:index
    });
    //ナビゲーションビューにビューのプッシュ
    this.getMainview().push(carousel);
  }
});