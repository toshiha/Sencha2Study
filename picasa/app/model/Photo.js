//Photoモデルのクラス定義
//field名は$や-が使えないのでmappingを使う
//Featureと個人のアルバムは構造が同じなので共有
Ext.define('picasa.model.Photo', {
  extend:'Ext.data.Model',
  config:{
    fields:[
      {
        name:'id',
        mapping:'gphoto$id.$t'
      },
      {
        name:'title',
        mapping:'title.$t'
      },
      {
        name:'mediaThumbnail',
        mapping:'media$group.media$thumbnail[0]'
      },
      {
        name:'mediaContent',
        mapping:'media$group.media$content[0]'
      }
    ]
  }
});