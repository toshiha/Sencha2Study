//Albumモデルの登録
//field名は$や-が使えないのでmappingを使う
Ext.regModel('Albums', {
	fields : [{
		name : 'id',
		mapping : 'gphoto$id.$t'
	}, {
		name : 'title',
		mapping : 'title.$t'
	}, {
		name : 'link',
		mapping : 'link[0].href'
	}, {
		name : 'date',
		mapping : 'published.$t'
	}, {
		name : 'mediaThumbnail',
		mapping : 'media$group.media$thumbnail[0]'
	}, {
		name : 'mediaContent',
		mapping : 'media$group.media$content[0]'
	}],
	proxy : {
		type : 'scripttag',
		url : 'http://picasaweb.google.com/data/feed/api/user/thayashing?kind=album&alt=json-in-script&thumbsize=90c&imgmax=512',
		reader : {
			root : 'feed.entry',
			type : 'json',
			idProperty : 'id.$t'
		}
	}
});
