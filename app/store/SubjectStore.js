Ext.define('FreelancerSelection.store.SubjectStore', {
    extend: 'Ext.data.Store',
    alias: 'store.subjectStore',
    sorters: [{
        property: 'tree_sortkey'
    }],
    proxy: {
        type:'ajax',
        url: 'app/store/json/subjectArea.json',
         reader: {
             type: 'json',
             rootProperty: 'data'
         }
    },
    autoLoad: true
});