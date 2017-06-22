Ext.define('FreelancerSelection.store.TargetLanguageStore', {
    extend: 'Ext.data.Store',
    requires: [
        'FreelancerSelection.model.SkillModel'
    ],
    alias: 'store.targetlanguageStore',
    model: 'FreelancerSelection.model.SkillModel',
    sorters: [{
        property: 'tree_sortkey'
    }],
    proxy: {
        type:'ajax',
        url: 'app/store/json/availableTarget.json',
         reader: {
             type: 'json',
             rootProperty: 'data'
         }
    },
    autoLoad: true
});