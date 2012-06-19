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
  onInitialize:function (app) {
    console.log('init');
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

  onActiveitemchange:function(){
    this.activeElm.setStyle({webkitTransform:'scale(1)'});
  },

  onPinchStart:function (e) {
    this.scale = e.scale * this.startScale;
    this.activeElm = this.getDetailview().items.getAt(this.getDetailview().getActiveIndex()+1).element;
  },
  onPinchEnd:function (e) {

  },
  onPinch:function (e) {
    this.scale = e.scale * this.startScale;
    this.scale = (this.scale < 1) ? 1 : (this.scale > 3) ? 3 : this.scale;
    this.activeElm.setStyle({webkitTransform:'scale(' + this.scale + ')'});
  },
  onDoubletap:function (e) {
    this.activeElm.setStyle({webkitTransform:'scale(1)'});
  }
});