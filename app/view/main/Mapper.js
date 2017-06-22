Ext.define('FreelancerSelection.view.main.Mapper', {
    singleton: true,
    config : {
	        category : {},
            languageHierarchy : {},
            checkJSON: function(value){
                return Ext.isEmpty(value)? "[]":value;
            }
    },
    constructor : function(config){
        this.initConfig(config);
    }
});