Ext.define("picasa.view.Main", {
  extend:'Ext.navigation.View',
  xtype:'mainview',
  requires:[
  ],
  config:{
    tabBarPosition:'top',
   navigationBar:{
      items:[
        {
          xtype:'button',
          action:'reload',
          iconCls:'refresh',
          itemId:'refreshButton',
          iconMask:true,
          ui:'plain',
          align: 'right'
        }
     ]
    },
    items:[
      {
        //items can have titles
        title:'My Picasa',
        padding:10,

        //inside this first item we are going to add a button
        items:[
          {
            xtype:'button',
            action:'next',
            text:'Push another view!'
//            handler:function () {
//              //when someone taps this button, it will push another view into stack
//              Ext.Viewport.items[0].push({
//                //this one also has a title
//                title:'Second View',
//                padding:10,
//
//                //once again, this view has one button
//                items:[
//                  {
//                    xtype:'button',
//                    text:'Pop this view!',
//                    handler:function () {
//                      //and when you press this button, it will pop the current view (this) out of the stack
//                      Ext.Viewport.pop();
//                    }
//                  }
//                ]
//              });
            //}
          }
        ]
      }
    ]

  }
});