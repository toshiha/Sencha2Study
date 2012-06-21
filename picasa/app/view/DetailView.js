Ext.define("picasa.view.DetailView", {
  extend:'Ext.carousel.Carousel',
  xtype:'detailview',
  requires:[
  ],
  config: {
    indicator : true,
    fullscreen : true,
    ui:'light',
    cls:'picasaCarousel'
  },

  initialize:function () {
    this.callParent(arguments);
    for (var i = 0; i < this.photoData.length; i++) {
      var _target = this.photoData[i].data.mediaContent;
      var _h = Math.floor(_target.height / _target.width * 300);
      this.add({
        html:'<div class="detailImageContainer"><img class="detailImage" src="' + _target.url + '" width="' + 300 + '" height="' + _h + '"></div>'
      });
    }
    this.setActiveItem(this.photoIndex);
  }
});
