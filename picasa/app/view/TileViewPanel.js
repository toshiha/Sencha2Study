Ext.define("picasa.view.TileViewPanel", {
  extend:'Ext.tab.Panel',
  xtype:'picasa-tileviewpanel',
  requires:[
    //'Ext.TitleBar'
  ],
  config:{

    items:[
      {
        xtype:'toolbar',
        dock:'top',
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
      {
        title:'Welcome',
        iconCls:'home',

        styleHtmlContent:true,
        scrollable:true,

        items:{
          docked:'top',
          xtype:'titlebar',
          title:'Welcome to Sencha Touch 2'
        },

        html:[
          "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
          "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
          "and refresh to change what's rendered here."
        ].join("")
      },
      {
        title:'Get Started',
        iconCls:'action',

        items:[
          {
            docked:'top',
            xtype:'titlebar',
            title:'Getting Started'
          },
          {
            xtype:'video',
            url:'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
            posterUrl:'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
          }
        ]
      }
    ]
  }
});
