//マイアルバム一覧ビュー
picasa.views.AlbumViewPanel = Ext.extend(Ext.Panel, {
	layout : 'fit',
	//html : '<div style="width:320px;height:480px;background:#000;"></div>',
	initComponent : function() {
		var _self = this;
		this.store = new Ext.data.Store({
			autoLoad : true,
			model : 'Albums'
		});
		//ヘッダツールバー
		this.dockedItems = [{
			xtype : 'toolbar',
			dock : 'top',
			itemId : 'albumToolbar',
			title : 'My Picasa',
			items : [{
				itemId : 'homeButton',
				ui : 'back',
				text : 'Back'
			}, {
				xtype : 'spacer'
			}]
		}];
		//Album表示用テンプレート
		this.xtpl = new Ext.XTemplate('<div class="imageContainer">', '<tpl for=".">', '<div class="thumb-wrap">', '<img src="{mediaThumbnail.url}" title="{title}" width="67">', '</div>', '</tpl>', '</div>', '<div class="x-clear"></div>');
		//Album表示用データビューの定義
		this.dataView = new Ext.DataView({
			store : this.store,
			tpl : this.xtpl,
			title : 'Explore',
			itemSelector : 'div.thumb-wrap',
			emptyText : 'No images to display',
			scroll : 'vertical'
		});
		this.items = [this.dataView];
		//お作法のお決まり文句
		picasa.views.AlbumViewPanel.superclass.initComponent.apply(this, arguments);
	}
});
//登録することでxtypeとして参照できるようになる
Ext.reg('picasa-albumviewpanel', picasa.views.AlbumViewPanel);
