//Featureコントローラ登録
Ext.regController('home', {
	// indexアクション登録
	index : function() {
		if(!this.tilePanel) {
			this.tilePanel = this.render({
				xtype : 'picasa-tileviewpanel',
				listeners : {
					dataView : {
						//dataViewに対するitemtapイベントリスナー登録
						itemtap : function(comp, index, item) {
							var imgdata = comp.store.data.items;
							Ext.dispatch({
								controller : 'home',
								action : 'detail',
								historyUrl : 'home/detail',
								//anotherOptionで引数を渡すことができる
								anotherOption : [imgdata, index]
							});
						},
						scope : this
					},
					albumDataView : {
						//dataViewに対するselectionchangeイベントリスナー登録
						selectionchange : function(model, record) {
							if(record.length > 0) {
								Ext.dispatch({
									controller : 'album',
									action : 'index',
									historyUrl : 'album/index',
									anotherOption : [record[0].data, 'left']
								});
							}
						},
						scope : this
					},
					activate : function(tilePanel) {
						tilePanel.dataView.getSelectionModel().deselectAll();
					}
				}
			});
			picasa.viewport.setActiveItem(this.tilePanel, {
				type : 'fade',
				duration : 100
			});
		} else {
			picasa.viewport.setActiveItem(this.tilePanel, {
				type : 'slide',
				direction : 'right'
			});
		}
	},
	//viewDetailアクション登録
	detail : function(option) {
		if(option.anotherOption) {
			var imgdata = option.anotherOption[0];
			var index = option.anotherOption[1];
		} else {
			Ext.dispatch({
				controller : 'home',
				action : 'index',
				historyUrl : 'home/index',
			});
			return;
		}
		var detailCarousel = this.render({
			xtype : 'picasa-detaiviewpanel',
			listeners : {
				deactivate : function() {
					detailCarousel.destroy();
				}
			}
		});
		//カルーセルに画像追加
		for( i = 0; i < imgdata.length; i++) {
			var _target = imgdata[i].data.mediaContent;
			var _h = Math.floor(_target.height / _target.width * 300);
			detailCarousel.carousel.add({
				html : '<div class="detailImageContainer"><img class="detailImage" src="' + _target.url + '" width="' + 300 + '" height="' + _h + '"></div>'
			});
		}
		detailCarousel.query('#backButton')[0].on({
			tap : function() {
				Ext.dispatch({
					controller : 'home',
					action : 'index',
					historyUrl : 'home/index',
				});
			},
			scope : this
		});
		picasa.viewport.setActiveItem(detailCarousel, 'slide');
		detailCarousel.carousel.setActiveItem(index);
	}
});
