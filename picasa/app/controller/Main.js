Ext.define('picasa.controller.Main', {
  extend:'Ext.app.Controller',

  config:{
    refs:{
      mainview:'mainview',
      exploreview:'exploreview',
      featurephoto:'featurephoto',
      refreshbutton:'mainview button[action=reload]'
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
  launch:function (app) {
    Ext.Viewport.add(Ext.create('picasa.view.Main'));
    this.firstView = this.getMainview().getActiveItem();
  },
  onFeatureSelect:function () {
    var index = arguments[1];
    var store = Ext.getStore('PhotosFeature');
    var photodata = store.data.items;
    var carousel = Ext.create('picasa.view.DetailView', {
      title:'Featured',
      fullscreen:true,
      defaults:{
        styleHtmlContent:true
      }
    });
    for (var i = 0; i < photodata.length; i++) {
      var _target = photodata[i].data.mediaContent;
      var _h = Math.floor(_target.height / _target.width * 300);
      carousel.add({
        html:'<div class="detailImageContainer"><img class="detailImage" src="' + _target.url + '" width="' + 300 + '" height="' + _h + '"></div>'
      });
    }
    carousel.setActiveItem(index);
    this.getMainview().push(carousel);
  },
  onReload:function () {
    console.log(this.getMainview().items.length);
    if (this.firstView === this.getMainview().getActiveItem()) {
      console.log("firstview");
    } else {
      console.log("otherview");
    }
  },
  onPush:function () {
    this.getRefreshbutton().setHidden(true);
  },
  onPop:function () {
    if (this.firstView === this.getMainview().getActiveItem()) {
      this.getRefreshbutton().setHidden(false);
    }
  }
});