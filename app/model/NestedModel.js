Ext.define('FreelancerSelection.model.NestedModel', {
     extend: 'Ext.data.Model',
     fields: [
         {name: 'sourceLanguage', type: 'string'},
         {name: 'targetLanguage',  type: 'string'},
         {name: 'specificArea',  type: 'string'},
         {name: 'subjectArea',  type: 'string'},
         {name: 'catTools',  type: 'string'},
         {name: 'price',  type: 'string'}
     ]
 });