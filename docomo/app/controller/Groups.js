Ext.define('docomo.controller.Tweets', {
  extend:'Ext.app.Controller',

  config:{
    refs:{
      tweetsearch:'tweetlist searchfield',
      reloadbutton:'tweetlist button',
      tweetlist:'list'
    },
    control:{
      tweetsearch:{
        action:'onTweetSearch'
      },
      reloadbutton:{
        tap:'onReload'
      }
    }
    /*
     routes:{
     'index':'index'
     }
     */
  },
  onTweetSearch:function (a) {
    var query = this.getTweetsearch().getValue();
    if(query) {
      var store = Ext.getStore('Tweets');
      store.load({
         params:{q:query}
      })
    }
  },
  onReload:function () {
    this.onTweetSearch();
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