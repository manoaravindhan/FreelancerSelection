Ext.define('FreelancerSelection.view.main.FilterPanel', {
    extend: 'Ext.form.Panel',
    requires:[
        'FreelancerSelection.store.SourceLanguageStore',
        'FreelancerSelection.store.LanguageStore',
        'FreelancerSelection.store.TargetLanguageStore',
        'FreelancerSelection.store.CatToolsStore',
        'FreelancerSelection.store.SpecAreaStore',
        'FreelancerSelection.store.SubjectStore'
    ],
    alias: 'widget.filterPanel',
    reference: 'filterForm',
	title:'Filter Freelancer',
    bodyPadding: '5 5 0',
	collapsible: true,
    collapsed: true,
    titleCollapse: true,
    controller:'filter',
    viewModel:'filter',
	collapseToolText: 'Collapse Panel',
    fieldDefaults: {
        msgTarget: 'side'
    },
    defaults: {
        border: false,
        xtype: 'panel',
        flex: 1,
        layout: 'anchor',
        margin:'0 5 0 5',
        anchor:'50%',
	    defaultType: 'tagfield'
    },
    layout: 'hbox',
    items:[{
items: [{
        fieldLabel: 'Source Language',
        forceSelection: true,
        labelWidth: 150,
        name: 'sourceLanguage',
        store: {
            type: 'sourcelanguageStore'
        },
        queryMode: 'local',
        width:'100%',
        valueField: 'category_id',
        displayField:'category_translated'
    },{
        fieldLabel: 'Subject Area',
        forceSelection: true,
        labelWidth: 150,
        name: 'subjectArea',
        store: {
            type: 'subjectStore'
        },
        queryMode: 'local',
        width:'100%',
        valueField: 'category_id',
        displayField:'category_translated'
    },{
        fieldLabel: 'Cat Tools',
        forceSelection: true,
        labelWidth: 150,
        name: 'catTools',
        store: {
            type: 'catToolsStore'
        },
        queryMode: 'local',
        width:'100%',
        valueField: 'category_id',
        displayField:'category_translated'
    }]
    },{
    items: [{
        fieldLabel: 'Target Language',
        forceSelection: true,
        labelWidth: 150,
        name: 'targetLanguage',
        store: {
            type: 'targetlanguageStore'
        },
        queryMode: 'local',
        width:'100%',
        valueField: 'category_id',
        displayField:'category_translated'
    },{
        fieldLabel: 'Specific Area',
        forceSelection: true,
        labelWidth: 150,
        name: 'specificArea',
        store: {
            type: 'specAreaStore'
        },
        queryMode: 'local',
        width:'100%',
        valueField: 'category_id',
        displayField:'category_translated'
    }]
    }],
    buttonAlign: 'center',
	buttons: [{
        text: 'Reset',
        handler: function() {
            this.up('form').getForm().reset();
            Ext.GlobalEvents.fireEvent('onFilterFired','reset');
        }
    }, {
        text: 'Filter',
        handler: 'onClickFilter'
    }]
});