//写真詳細のView
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

  },
  addPhoto :function(index, photodata) {
    for (var i = 0; i < photodata.length; i++) {
      var _target = photodata[i].data.mediaContent;
      var _h = Math.floor(_target.height / _target.width * 300);
      this.add({
        html:'<div class="detailImageContainer"><img class="detailImage" src="' + _target.url + '" width="' + 300 + '" height="' + _h + '"></div>'
      });
    }
    this.setActiveItem(index);
  }
});
