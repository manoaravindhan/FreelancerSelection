/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FreelancerSelection.view.main.Main', {
    extend: 'Ext.container.Container',
    alias: 'widget.app-main',
	plugins: 'viewport',
    scrollable: 'vertical',
    controller:'panel',
    viewModel: 'panel',
    requires: [
        'FreelancerSelection.view.main.List',
		'FreelancerSelection.view.main.FilterPanel'
    ],
    items:[{
        xtype:'panel',
    items: [{
		xtype:'filterPanel',
        margin: "0 0 10 0",
		flex:1
	},{
		xtype:'mainlist',
		flex:2
	}]
    }]
});
