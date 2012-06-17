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
      'index':'index'
    }
  },
  onFeatureSelect:function () {
    var rec = arguments[3];
    console.log(rec);
//    if(rec) {
//      this.getFeatureview().push({
//
//      })
//    }

  },
  //called when the Application is launched, remove if not needed
  launch:function (app) {
    this.redirectTo('index');
  },
  index:function () {
    Ext.Viewport.add(Ext.create('picasa.view.Main'));
  }
});