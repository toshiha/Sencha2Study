Ext.define('picasa.controller.Feature', {
  extend:'Ext.app.Controller',

  config:{
    refs:{
      featurelist:'featurelist',
      featureview:'featureview'
    },
    control:{
      featurelist:{
        itemtap:'onFeatureSelect'
      }
    },
    routes:{
      'index':'index',
      'featuredetail/:id' : 'featureDetail'
    },
    stack: []
  },
  onFeatureSelect:function () {
    var index = arguments[1];
    this.redirectTo('featuredetail/' + index);
//    var store = Ext.getStore('PhotosFeature');
//    var index = arguments[1];
//    var rec = arguments[3];
//    var cr = Ext.create('Ext.Carousel', {
//      fullscreen: true,
//
//      defaults: {
//        styleHtmlContent: true
//      }
//    });
//    var imgdata = Ext.getStore('PhotosFeature').data.items;
//    console.log(imgdata);
//    for( i = 0; i < imgdata.length; i++) {
//      var _target = imgdata[i].data.mediaContent;
//      console.log(_target);
//      var _h = Math.floor(_target.height / _target.width * 300);
//      cr.add({
//        html : '<div class="detailImageContainer"><img class="detailImage" src="' + _target.url + '" width="' + 300 + '" height="' + _h + '"></div>'
//      });
//
//    }
//    cr.setActiveItem(index);
//    console.log(index,rec);
//    if(rec) {
//      this.getFeatureview().push(cr);
//    }

  },
  //called when the Application is launched, remove if not needed
  launch:function (app) {
    this.redirectTo('index');
  },
  index:function () {
    var stack = this.getStack();

    if (stack.length) {
      this.getFeatureview().pop();
      return;
    }
    this.setStack([]);
    this.Ext.Viewport.add(Ext.create('picasa.view.Main'));
  },
  featureDetail:function(id) {
    console.log(id);
    var stack = this.getStack();
    stack.push(id);
    var store = Ext.getStore('PhotosFeature');
    var imgdata = store.data.items;
    var carousel = Ext.create('Ext.Carousel', {
      fullscreen: true,
      defaults: {
        styleHtmlContent: true
      }
    });
    for( i = 0; i < imgdata.length; i++) {
      var _target = imgdata[i].data.mediaContent;
      //console.log(_target);
      var _h = Math.floor(_target.height / _target.width * 300);
      carousel.add({
        html : '<div class="detailImageContainer"><img class="detailImage" src="' + _target.url + '" width="' + 300 + '" height="' + _h + '"></div>'
      });

    }
    carousel.setActiveItem(Number(id));
    this.getFeatureview().push(carousel);
  }
});