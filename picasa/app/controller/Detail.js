//詳細ビュー用コントローラ定義
Ext.define('picasa.controller.Detail', {
  extend:'Ext.app.Controller',

  config:{
    refs:{
      detailview:'detailview'
    },
    control:{
      detailview:{
        initialize:'onInitialize',
        activeitemchange:'onActiveitemchange'
      }
    }
  },
  //初期化イベント
  onInitialize:function (app) {
    this.startScale = 1;
    this.scale = 1;
    this.detailElm = this.getDetailview().element;
    this.detailElm.on({
      pinchstart  : this.onPinchStart,
      pinchend  : this.onPinchEnd,
      pinch  : this.onPinch,
      doubletap : this.onDoubletap,
      scope: this // Important. Ensure "this" is correct during handler execution
    });
    this.activeElm = this.getDetailview().items.getAt(this.getDetailview().getActiveIndex()+1).element;
  },
  //カルーセルのアクティブアイテムが変化した時のイベントハンドラ
  onActiveitemchange:function(){
    this.activeElm.setStyle({webkitTransform:'scale(1)'});
  },
  //ピンチ操作開始時のイベントハンドラ
  onPinchStart:function (e) {
    this.scale = e.scale * this.startScale;
    this.activeElm = this.getDetailview().items.getAt(this.getDetailview().getActiveIndex()+1).element;
  },

  onPinchEnd:function (e) {

  },
  //ピンチ操作時のイベントハンドラ
  onPinch:function (e) {
    this.scale = e.scale * this.startScale;
    this.scale = (this.scale < 1) ? 1 : (this.scale > 3) ? 3 : this.scale;
    this.activeElm.setStyle({webkitTransform:'scale(' + this.scale + ')'});
  },
  //ダブルタップ時のイベントハンドラ
  onDoubletap:function (e) {
    this.activeElm.setStyle({webkitTransform:'scale(1)'});
  }
});