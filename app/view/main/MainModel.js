/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('FreelancerSelection.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
	stores: {
		freelancer:{
			model:'FreelancerSelection.model.FreelancerModel'
		},
		nestedStore: {
			model:'FreelancerSelection.model.NestedModel'
		}
	},
	data:{
		addButton:{
			text:'Add',
			icon:'fa fa-plus-circle'
		},
		reqButton:{
			text:'Request Participation',
			icon:'fa fa-envelope'
		}
	}

    //TODO - add data, formulas and/or methods to support your view
});
