Ext.define('FreelancerSelection.view.main.FilterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.filter',
    onClickFilter: function(filter, event){
        Ext.GlobalEvents.fireEvent('onFilterFired', 'filter', filter.up('form').getForm().getValues());
    }
});