Ext.define('FreelancerSelection.model.FreelancerModel', {
     extend: 'Ext.data.Model',
     fields: [
         {name: 'freelancer_name', type: 'string'},
         {name: 'no_times_worked_for_customer',  type: 'number', convert: function(val){
             return +val;
         }},
         {name: 'no_times_worked',  type: 'string'},
         {name: 'sort_order',  type: 'number', convert: function(val){
             return +val;
         }},
         {name: 'price_s_word',  type: 'string'},
         {name: 'price_hour',  type: 'string', convert: function(val){
             var price;
             if(val){
                  price = JSON.parse(val.replace(/'/g, '"'));
             }
             return Ext.isArray(price) ? '&euro;' + price[0].split(' ')[0] : 'Not Available';
         }},
         {name: 'skill_2014',  type: 'string'},
         {name: 'skill_2024',  type: 'string'},
         {name: 'skill_2006',  type: 'string'},
         {name: 'skill_2002',  type: 'string'},
         {name: 'skill_2000',  type: 'string'},
         {name: 'selected_p',  type: 'boolean', defaultValue: false, convert: function(val){
             return val == '1';
         }},{
             name:'potential_p', type: 'boolean', defaultValue: false, convert: function(val){
            return val == '1';
        }}
     ]
 });