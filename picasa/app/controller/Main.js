//トップ画面コントローラ定義
Ext.define('picasa.controller.Main', {
  extend:'Ext.app.Controller',
  config:{
    refs:{
      mainview:'mainview',
      maintab:'mainview tabpanel',
      exploreview:'exploreview',
      featurephoto:'featurephoto',
      refreshbutton:'mainview button[action=reload]',
      homebutton:'mainview button[action=home]',
      albumview :'albumview'
    },
    control:{
      featurephoto:{
        itemtap:'onFeatureSelect'
      },
      refreshbutton:{
        tap:'onReload'
      },
      mainview:{
        push:'onPush',
        pop:'onPop'
      }
    }
  },
  //アプリ初期化のイベントハンドラ
  launch:function (app) {
    Ext.Viewport.add(Ext.create('picasa.view.Main'),{fullscreen:true});
    //Ext.Viewport.setAutoMaximize(true);
    this.firstView = this.getMainview().getActiveItem();
    window.scrollTo(0,1);
    //
  },
  //Featuredの個々の写真がクリックされた際のイベントハンドラ
  onFeatureSelect:function () {
    var index = arguments[1];
    var store = Ext.getStore('PhotosFeature');
    var photodata = store.data.items;
    var carousel = Ext.create('picasa.view.DetailView', {
      title:'Featured'
    });
    carousel.addPhoto(index,photodata);
    this.getMainview().push(carousel);
  },
  //リロードボタンのイベントハンドラ
  onReload:function () {
    if (this.getMaintab().getActiveItem() == this.getExploreview())  {
      Ext.getStore('PhotosFeature').load();
    } else if (this.getMaintab().getActiveItem() == this.getAlbumview()){
      Ext.getStore('Albums').load();
    }
  },
  //ナビゲーションビューにビューが追加された時のイベントハンドラ
  onPush:function () {
    this.getRefreshbutton().setHidden(true);
    this.getHomebutton().setHidden(true);
  },
  //ナビゲーションビューにビューが削除された時のイベントハンドラ
  onPop:function () {
    if (this.firstView === this.getMainview().getActiveItem()) {
      this.getRefreshbutton().setHidden(false);
      this.getHomebutton().setHidden(false);
    }
  }
});