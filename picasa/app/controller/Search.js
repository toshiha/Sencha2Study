//サーチ画面コントローラ定義
Ext.define('picasa.controller.Search', {
  extend:'Ext.app.Controller',
  config:{
    refs:{
      mainview:'mainview',
      picasasearch:'exploreview searchfield',
      searchview:'searchview',
      tagbutton: 'button[action=tag]'
    },
    control:{
      picasasearch:{
        action:'onPicasaSearch'
      },
      searchview:{
        itemtap:'onSearchview'
      },
      tagbutton:{
        tap:'onTagbutton'
      }
    }
  },
  //検索フィールド用イベントハンドラ
  onPicasaSearch:function () {
    var query = this.getPicasasearch().getValue();
    this.tempTitle = 'Result of "' + query + '"';
    if(query) {
      var store = Ext.getStore('PhotosSearch');
      store.removeAll();
      store.load({
        params:{q:query}
      });
      var searchview = Ext.create('picasa.view.SearchView',{
        title:this.tempTitle
      });
      this.getMainview().push(searchview);
    }
  },
  //Search結果の個々の写真がクリックされた際のイベントハンドラ
  onSearchview:function () {
    var index = arguments[1];
    var store = Ext.getStore('PhotosSearch');
    var photodata = store.data.items;
    var carousel = Ext.create('picasa.view.DetailView', {
      title:this.tempTitle
    });
    carousel.addPhoto(index,photodata);
    this.getMainview().push(carousel);
  },
  //タグボタンのイベントハンドラ
  onTagbutton:function () {
    var button = arguments[0];
    this.getPicasasearch().setValue(button.getText()).fireAction('action');
  }
});