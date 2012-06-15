Ext.define('docomo.controller.Groups', {
  extend:'Ext.app.Controller',

  config:{
    refs:{
      grouplist:'groupview list',
      groupview:'groupview'
    },
    control:{
      grouplist:{
        itemtap:'onGroupSelect'
      }
    }
    /*
     routes:{
     'index':'index'
     }
     */
  },
  onGroupSelect:function () {
    var rec = arguments[3];
    console.log(rec);
    if(rec) {
      this.getGroupview().push({
        xtype:'groupdetail' ,
        title:rec.get('group'),
        stores:{
          countries: rec.countries(),
          matches:rec.matches()
        }
      })
    }

  },
  //called when the Application is launched, remove if not needed
  launch:function (app) {
    //this.redirectTo('index');
  },
  index:function () {
    //Ext.Viewport.add(Ext.create('picasa.view.TileViewPanel'));
    //Ext.create('picasa.view.TileViewPanel');
  }
});