Ext.define('FreelancerSelection.store.SourceLanguageStore', {
    extend: 'Ext.data.Store',
    requires: [
        'FreelancerSelection.model.SkillModel'
    ],
    alias: 'store.sourcelanguageStore',
    model: 'FreelancerSelection.model.SkillModel',
    sorters: [{
        property: 'tree_sortkey'
    }],
    proxy: {
        type:'ajax',
        url: 'app/store/json/availableSource.json',
         reader: {
             type: 'json',
             rootProperty: 'data'
         }
    },
    autoLoad: true
});