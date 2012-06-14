Ext.define("picasa.view.TileViewPanel", {
  extend:'Ext.tab.Panel',
  xtype:'picasa-tileviewpanel',
  requires:[
    //'Ext.TitleBar'
  ],
  initialize:function () {
    this.callParent(arguments);
//    this.store = new Ext.data.Store({
//      autoLoad : true,
//      model : 'Photo'
//    });
//    this.xtpl = new Ext.XTemplate('<div class="titleBox"><h2>Featured</h2></div>', '<div class="imageContainer">', '<tpl for=".">', '<div class="thumb-wrap">', '<img src="{mediaThumbnail.url}" title="{title}" width="67">', '</div>', '</tpl>', '</div>', '<div class="x-clear"></div>');
//    //Album表示用テンプレート
//    this.albumxtpl = new Ext.XTemplate('<div class="albumContainer">', '<tpl for=".">', '<div class="album-wrap"><div class="album-wrap-inner">', '<img src="{mediaThumbnail.url}" title="{title}" width="83">', '</div><span class="title">{title}</span></div>', '</tpl>', '</div>', '<div class="x-clear"></div>');
    //Feature表示用データビューの定義
//    this.dataView = Ext.create('Ext.DataView', {
//      store:this.store,
//      tpl:this.xtpl,
//      itemSelector:'div.thumb-wrap',
//      emptyText:'No images to display',
//      scroll:'vertical'
//    });
    this.dataView = Ext.create('Ext.DataView', {

      cls: 'twitterView',
      store: {
        autoLoad: true,
        fields: ['from_user', 'text', 'profile_image_url'],

        proxy: {
          type: 'jsonp',
          url: 'http://search.twitter.com/search.json?q=Sencha Touch',

          reader: {
            type: 'json',
            rootProperty: 'results'
          }
        }
      },

      itemTpl: '<img src="{profile_image_url}" /><h2>{from_user}</h2><p>{text}</p><div style="clear: both"></div>'
    });
  },
  config:{
    tabBar:{
      //id:'tab-bar',
      layout:{
        pack:'center'
      }
    },
    items:[
      {
        xtype:'toolbar',
        docked:'top',
        itemId:'picasaToolbar',
        title:'My Picasa',
        items:[
          {
            xtype:'spacer'
          },
          {
            itemId:'refreshButton',
            iconCls:'refresh',
            iconMask:true,
            handler:function () {
              /*
               if (_self.getActiveItem() == _self.dataView) {
               console.log('dataview');
               _self.store.load();
               } else if (_self.getActiveItem() == _self.albumDataView) {
               console.log('albumDataView');
               _self.albumStore.load();
               }
               */
            }
          }
        ]
      },
      this.dataView,

      {
        title:'Get Started',
        iconCls:'action',

        html:'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
      }
    ]
  }
});
