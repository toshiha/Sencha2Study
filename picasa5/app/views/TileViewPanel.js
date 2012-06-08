//Feature及びAlbumの画像一覧ビュー
picasa.views.TileViewPanel = Ext.extend(Ext.TabPanel, {
	layout : 'fit',
	componentCls:'mainView',
	//html : '<div style="width:320px;height:480px;background:#000;"></div>',
	initComponent : function() {
		var _self = this;
		//Feature用のストア定義
		this.store = new Ext.data.Store({
			autoLoad : true,
			model : 'Photo'
		});
		//Album用のストア定義
		this.albumStore = new Ext.data.Store({
			autoLoad : true,
			model : 'Albums'
		});
		//ヘッダツールバー
		this.dockedItems = [{
			xtype : 'toolbar',
			dock : 'top',
			itemId : 'picasaToolbar',
			title : 'My Picasa',
			items : [{
				xtype : 'spacer'
			}, {
				itemId : 'refreshButton',
				iconCls : 'refresh',
				iconMask : true,
				handler : function() {
					if(_self.getActiveItem() == _self.dataView) {
						console.log('dataview');
						_self.store.load();
					} else if(_self.getActiveItem() == _self.albumDataView) {
						console.log('albumDataView');
						_self.albumStore.load();
					}
				}
			}]
		}];
		//タブバー
		this.tabBar = {
			id : 'tab-bar',
			ui : 'light',
			layout : {
				pack : 'center'
			}
		};
		//Feature表示用テンプレート
		this.xtpl = new Ext.XTemplate('<div class="titleBox"><h2>Featured</h2></div>', '<div class="imageContainer">', '<tpl for=".">', '<div class="thumb-wrap">', '<img src="{mediaThumbnail.url}" title="{title}" width="67">', '</div>', '</tpl>', '</div>', '<div class="x-clear"></div>');
		//Album表示用テンプレート
		this.albumxtpl = new Ext.XTemplate('<div class="albumContainer">', '<tpl for=".">', '<div class="album-wrap"><div class="album-wrap-inner">', '<img src="{mediaThumbnail.url}" title="{title}" width="83">', '</div><span class="title">{title}</span></div>', '</tpl>', '</div>', '<div class="x-clear"></div>');
		//Feature表示用データビューの定義
		this.dataView = new Ext.DataView({
			store : this.store,
			tpl : this.xtpl,
			title : 'Explore',
			//iconCls: 'explore',
			itemSelector : 'div.thumb-wrap',
			emptyText : 'No images to display',
			scroll : 'vertical'
		});
		//Album表示用データビューの定義
		this.albumDataView = new Ext.DataView({
			store : this.albumStore,
			tpl : this.albumxtpl,
			title : 'Albums',
			//iconCls: 'albums',
			itemSelector : 'div.album-wrap',
			emptyText : 'No images to display',
			scroll : 'vertical'
		});
		//タブの中身
		this.items = [this.dataView, {
			cls : 'following',
			title : 'Following',
			//iconCls: 'following',
			styleHtmlContent : true,
			html : '<div class="following">No Items Found.<br> Click refresh button to re-sync.</div>'
		}, this.albumDataView];
		//お作法のお決まり文句
		picasa.views.TileViewPanel.superclass.initComponent.apply(this, arguments);
	}
});
//登録することでxtypeとして参照できるようになる
Ext.reg('picasa-tileviewpanel', picasa.views.TileViewPanel);
