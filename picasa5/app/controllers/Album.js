// Albumコントローラ登録
Ext.regController('album', {
	// indexアクション登録
	index : function(option) {
		if(option.anotherOption) {
			var album = option.anotherOption[0];
			var slide = option.anotherOption[1];
		} else {
			Ext.dispatch({
				controller : 'home',
				action : 'index',
				historyUrl : 'home/index',
			});
			return;
		}
		var albumView = this.render({
			xtype : 'picasa-albumviewpanel',
			listeners : {
				deactivate : function(albumView) {
					albumView.destroy();
				},
				dataView : {
					//dataViewに対するitemtapイベントリスナー登録
					itemtap: function(comp, index, item) {
						var imgdata = comp.store.data.items;
						Ext.dispatch({
							controller : 'album',
							action : 'detail',
							historyUrl : 'album/detail',
							//anotherOptionで引数を渡すことができる
							anotherOption : [[album, slide], imgdata, index]
						});
					},
					scope : this
				}
			}
		});
		albumView.dataView.store.proxy.url = album.link + '&thumbsize=72c&imgmax=512';
		albumView.query('#homeButton')[0].on({
			tap : function() {
				Ext.dispatch({
					controller : 'home',
					action : 'index',
					historyUrl : 'home/index',
				});
			},
			scope : this
		});
		albumView.query('#albumToolbar')[0].setTitle(album.title);
		picasa.viewport.setActiveItem(albumView, {
			type : 'slide',
			direction : slide
		});
	},
	//detailアクション登録
	detail : function(option) {
		if(option.anotherOption) {
			var album = option.anotherOption[0][0];
			var imgdata = option.anotherOption[1];
			var index = option.anotherOption[2];
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
		//バックボタンに戻り先を指定
		detailCarousel.query('#backButton')[0].on({
			//アルバム詳細画面からアルバムリストに戻る処理
			tap : function() {
				Ext.dispatch({
					controller : 'album',
					action : 'index',
					historyUrl : 'album/index',
					//anotherOptionで引数を渡すことができる
					anotherOption : [album, 'right']
				});
			},
			scope : this
		});
		picasa.viewport.setActiveItem(detailCarousel, 'slide');
		detailCarousel.carousel.setActiveItem(index);
	}
});
