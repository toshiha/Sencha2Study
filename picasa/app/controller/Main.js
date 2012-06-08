Ext.define('picasa.controller.Main', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
		
		},
		control : {

		},
		routes : {
			'index' : 'index'
		}

	},

	//called when the Application is launched, remove if not needed
	launch : function(app) {
		this.redirectTo('index');
	},
	index:function() {
		Ext.Viewport.add(Ext.create('picasa.view.Main'));
	}
});
