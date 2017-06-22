Ext.define('FreelancerSelection.store.CatToolsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.catToolsStore',
    sorters: [{
        property: 'tree_sortkey'
    }],
    proxy: {
        type:'ajax',
        url: 'app/store/json/catTools.json',
         reader: {
             type: 'json',
             rootProperty: 'data'
         }
    },
    autoLoad: true
});