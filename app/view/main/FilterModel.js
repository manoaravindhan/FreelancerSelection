/**
 * This class is the view model for the Panel of the application.
 */
Ext.define('FreelancerSelection.view.main.FilterModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.filter',
    requires:[
        'FreelancerSelection.model.SkillModel'
    ],
	stores: {
        sourceLanguage: {
            model: 'FreelancerSelection.model.SkillModel'
        },
        targetLanguage: {
            model: 'FreelancerSelection.model.SkillModel'
        },
        subject: {
            model: 'FreelancerSelection.model.SkillModel'
        },
        specificArea: {
            model: 'FreelancerSelection.model.SkillModel'
        },
        catTools: {
            model: 'FreelancerSelection.model.SkillModel'
        }
	}

    //TODO - add data, formulas and/or methods to support your view
});
