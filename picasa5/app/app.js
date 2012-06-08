/**
 * This file sets application-wide settings and launches the application when everything has
 * been loaded onto the page. By default we just render the applications Viewport inside the
 * launch method (see app/views/Viewport.js).
 */
picasa = new Ext.Application({
	defaultTarget : "viewport",
	name : "picasa",
	defaultUrl : 'home/index',
	launch : function() {
		this.viewport = new picasa.Viewport();
	}
});
