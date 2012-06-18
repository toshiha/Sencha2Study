Ext.define("picasa.view.Main", {
  extend:'Ext.Container',
  requires:[
  ],
  config:{
    navigationBar:{
      items:[
        {
          xtype:'spacer'
        },
        {
          xtype:'button',
          iconCls:'refresh',
          iconMask:true,
          ui:'plain'
        }
      ]
    },
    //tabBarPosition:'top',
//    items:[
//      {
//        xtype:'toolbar',
//        docked:'top',
//        itemId:'picasaToolbar',
//        title:'My Picasa',
//        items:[
//          {
//            xtype:'spacer'
//          },
//          {
//            itemId:'refreshButton',
//            iconCls:'refresh',
//            iconMask:true,
//            ui:'plain'
//          }
//        ]
//      },
//
    items:[
      {
        //items can have titles
        title:'My Picasa',
        padding:10,

        //inside this first item we are going to add a button
        items:[
          {
            xtype:'button',
            text:'Push another view!',
            handler:function () {
              //when someone taps this button, it will push another view into stack
              view.push({
                //this one also has a title
                title:'Second View',
                padding:10,

                //once again, this view has one button
                items:[
                  {
                    xtype:'button',
                    text:'Pop this view!',
                    handler:function () {
                      //and when you press this button, it will pop the current view (this) out of the stack
                      view.pop();
                    }
                  }
                ]
              });
            }
          }
        ]
      }
    ]

  }
});
