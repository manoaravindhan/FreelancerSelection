/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('FreelancerSelection.Application', {
    extend: 'Ext.app.Application',

    name: 'FreelancerSelection',
    requires:[
        'FreelancerSelection.view.main.Main'
    ],
    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        Ext.create('FreelancerSelection.view.main.Main', {
	    renderTo: Ext.Element.get('freelancer_selection'),
	});
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
