Ext.define('picasa.controller.Album', {
  extend:'Ext.app.Controller',

  config:{
    refs:{
      mainview:'mainview',
      albumview:'albumview'
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
    var store = Ext.getStore('PhotosFeature');
    var photodata = store.data.items;
    var carousel = Ext.create('picasa.view.DetailView', {
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