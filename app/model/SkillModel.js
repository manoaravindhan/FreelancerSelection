Ext.define('FreelancerSelection.model.SkillModel', {
     extend: 'Ext.data.Model',
     fields: [
         {name: 'category_id',  type: 'number'},
         {name: 'category_translated',  type: 'string'},
         {name:'tree_sortkey',type:'string'}
     ]
 });