//Photoモデルの登録
//field名は$や-が使えないのでmappingを使う
//Featureと個々のアルバムは構造がいっしょなので共用する,アルバムの場合はproxy.urlを変更して使う

Ext.regModel('Photo', {
	fields : [{
		name : 'id',
		mapping : 'gphoto$id.$t'
	}, {
		name : 'title',
		mapping : 'title.$t'
	}, {
		name : 'mediaThumbnail',
		mapping : 'media$group.media$thumbnail[0]'
	}, {
		name : 'mediaContent',
		mapping : 'media$group.media$content[0]'
	}],
	//モデル操作用のメソッドをモデルクラス内に定義できる
	//下記はsencha.ioを使って画像をbase64でエンコードする例
	setUrl : function() {
		var script = document.createElement("script");
		script.setAttribute("src", "http://src.sencha.io/data.setPhotoUrl-" + this.getId() + "/" + this.get('mediaThumbnail').url);
		script.setAttribute("type", "text/javascript");
		document.body.appendChild(script);
	},
	proxy : {
		type : 'scripttag',
		url : 'http://picasaweb.google.com/data/feed/api/featured?kind=photo&alt=json-in-script&start-index=1&max-results=8&thumbsize=72c&imgmax=512',
		reader : {
			root : 'feed.entry',
			type : 'json',
			idProperty : 'id.$t'
		}
	}
});

//sencha.ioのcallback関数
var setPhotoUrl = function(id, dataUrl) {
	var photo = offlineFeaturedStore.getById(id);
	photo.get('mediaThumbnail').url = dataUrl;
	offlineFeaturedStore.sync();
};
