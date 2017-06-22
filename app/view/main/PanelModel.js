/**
 * This class is the view model for the Panel of the application.
 */
Ext.define('FreelancerSelection.view.main.PanelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.panel',
	stores: {
		freelancer: {
            model: 'FreelancerSelection.model.FreelancerModel'
        }
	}

    //TODO - add data, formulas and/or methods to support your view
});
