//フィーチャー及びマイアルバムの詳細画面ビュー
picasa.views.DetailViewPanel = Ext.extend(Ext.Panel, {
	layout : 'fit',
	initComponent : function() {
		var _self = this;
		//ピンチ操作用のコード、アクティブなcarouselに対して操作している
		this.startScale = 1;
		this.scale = 1;
		this.handleEvent = function(e) {
			if(e.type == 'touchstart') {
			} else if(e.type == 'pinchstart') {
				this.scale = e.scale * this.startScale;
			} else if(e.type == 'pinch') {
				var _el = _self.carousel.items.getAt(_self.carousel.getActiveIndex());
				this.scale = e.scale * this.startScale;
				this.scale = (this.scale < 1) ? 1 : (this.scale > 3) ? 3 : this.scale;
				Ext.Element.cssTransform(_el.el, {
					scale : this.scale
				});
			} else if(e.type == 'doubletap') {
				this.scale = this.startScale;
				var _el = _self.carousel.items.getAt(_self.carousel.getActiveIndex());
				Ext.Element.cssTransform(_el.el, {
					scale : this.scale
				});
			}
		};
		//ヘッダメニュー
		this.dockedItems = [{
			xtype : 'toolbar',
			dock : 'top',
			items : [{
				itemId : 'backButton',
				ui : 'back',
				text : 'Back',
				iconMask : true
			}]
		}];
		//カルーセルメニュー
		this.carousel = new Ext.Carousel({
			indicator : true,
			fullscreen : true, //これがないとthis.carousel.monができない、なぜ？？
			cls : 'detailview',
			defaults : {
				//scroll : 'both'
			}
		});
		//カルーセルメニューにイベントリスナー追加
		this.carousel.mon(this.carousel.el, {
			//touchstart : this.handleEvent,
			doubletap : this.handleEvent,
			pinch : this.handleEvent,
			pinchstart : this.handleEvent,
			pinchend : this.handleEvent,
			scope : this
		});
		this.items = [this.carousel];
		//お作法のお決まり文句
		picasa.views.DetailViewPanel.superclass.initComponent.apply(this, arguments);
	}
});
//登録することでxtypeとして参照できるようになる
Ext.reg('picasa-detaiviewpanel', picasa.views.DetailViewPanel);
