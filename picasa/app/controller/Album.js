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
  onAlbumSelect:function () {
    var index = arguments[1];
    var model = Ext.getStore('Albums').data.items[index].data;
    var albumurl = model.link + '&thumbsize=72c&imgmax=512';
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
  onAlbumEachSelect:function () {
    var index = arguments[1];
    var store = arguments[0].getStore();
    var photodata = store.data.items;
    var carousel = Ext.create('picasa.view.DetailView', {
      title:'',
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
  }
});