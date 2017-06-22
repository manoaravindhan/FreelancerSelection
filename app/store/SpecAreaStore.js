Ext.define('FreelancerSelection.store.SpecAreaStore', {
    extend: 'Ext.data.Store',
    alias: 'store.specAreaStore',
    sorters: [{
        property: 'tree_sortkey'
    }],
    proxy: {
        type:'ajax',
        url: 'app/store/json/specArea.json',
         reader: {
             type: 'json',
             rootProperty: 'data'
         }
    },
    autoLoad: true
});