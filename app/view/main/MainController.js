/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FreelancerSelection.view.main.MainController', {
    extend: 'Ext.app.ViewController',
	requires:['FreelancerSelection.view.main.Mapper'],
    alias: 'controller.main',
    listen: {
        global: {
            onGridDataLoad: 'loadGrid',
			onFilterFired: 'filterGrid'
        }
    },
	filterGrid: function(type, params){
		var freelancerStore = this.getViewModel().getStore('freelancer'),
			checkJSONString = FreelancerSelection.view.main.Mapper.config.checkJSON,
/*			mapLanguage = function(code){
				var mappedValue = [];
				Ext.Array.each(code, function(name, index) {
						mappedValue[index] = FreelancerSelection.view.main.Mapper.config.category[name].toUpperCase();
				});
				return mappedValue;
			},*/
			castArray = function(value){
				 var casted = Ext.Array.map(value,function(item){
					return +item;
				});
				return casted;
			};
		freelancerStore.clearFilter();
		if(type === 'filter'){
			freelancerStore.filterBy(function(record){
				var row = record.data;
				return (Ext.isEmpty(params.sourceLanguage) ? true : JSON.parse(checkJSONString(row.skill_2000)).filter(function(e){ return this.indexOf(e)>-1;},castArray(params.sourceLanguage)).length > 0) &&
						(Ext.isEmpty(params.targetLanguage) ? true : JSON.parse(checkJSONString(row.skill_2002)).filter(function(e){return this.indexOf(e)>-1;},castArray(params.targetLanguage)).length > 0) &&
						(Ext.isEmpty(params.subjectArea) ? true : JSON.parse(checkJSONString(row.skill_2014)).filter(function(e){return this.indexOf(e)>-1;},castArray(params.subjectArea)).length > 0) &&
						(Ext.isEmpty(params.specificArea) ? true : JSON.parse(checkJSONString(row.skill_2024)).filter(function(e){return this.indexOf(e)>-1;},castArray(params.specificArea)).length > 0) &&
						(Ext.isEmpty(params.catTools) ? true : JSON.parse(checkJSONString(row.skill_2006)).filter(function(e){return this.indexOf(e)>-1;},castArray(params.catTools)).length > 0);
			});
			Ext.toast(freelancerStore.data.length + ' Freelancer(s) found');
		}
		else
			Ext.toast(freelancerStore.data.length + ' Freelancer(s) loaded');
	},
	activeProj: function(value, meta) {
		if(meta.record.data.active_project_member_p == '1') {
			meta.style = "background-color:darkseagreen; color:black;";
		} 
		return value;
	},
    loadGrid: function(response){
		var me = this,
			selectRow = 0,
			freelancerStore = me.getViewModel().getStore('freelancer'),
			grid = Ext.getCmp('freelancerGrid');
        	freelancerStore.loadData(response);
			freelancerStore.sort('sort_order', 'ASC');
			freelancerStore.each(function(rec){
				if (rec.get('selected_p')) {
					grid.getSelectionModel().select(selectRow, rec.get('selected_p')); 
				}
				selectRow++;
			});
    },
	requestParticipation: function(request, event){
		var selectedFreelancers = request.up('grid').getSelection(),
		freelancers = '';
		selectedFreelancers.forEach(function(freelancer, index){
			freelancers += freelancer.data.id + ';';
		});
		Ext.Function.defer(function(){
				Ext.toast('Requested freelancer to join project');
		}, 3000);
	},
	addFreelancer: function(add, event){
		var viewModel = this.getViewModel(),
		addConfig = viewModel.get('addButton'),
		addLoadConfig = {
			text: 'Loading',
			icon:'fa fa-spinner fa-spin'
		},
		selectedFreelancers = add.up('grid').getSelection(),
		freelancers = [];
		selectedFreelancers.forEach(function(freelancer, index){
			freelancers[index] = freelancer.data.id;
		});
		viewModel.set('addButton',addLoadConfig);
		Ext.Function.defer(function(){
				viewModel.set('addButton',addConfig);
				Ext.toast('Assigned freelancer to project');
				Ext.GlobalEvents.fireEvent('onAddFreelancers');
		}, 3000);
		/*Ext.Ajax.request({
			url: url,
			method:'GET',
			success: function (response) {
				viewModel.set('addButton',addConfig);
				Ext.toast('Assigned freelancer to project');
				Ext.GlobalEvents.fireEvent('onAddFreelancers');
			},
			failure: function (response) {
				viewModel.set('addButton',addConfig);
				Ext.toast('Error assigning freelancer to project');
			}
		});*/
	},
    onExpandRow: function(record,grid){
		var generatePrice = function(value){
				var prices = JSON.parse(checkJSONString(value)),
					priceList = [];
				Ext.Array.each(prices, function(price,index){
					priceList[index] = price.substring(price.indexOf('{')+1,price.lastIndexOf('}')) + " = &euro; " + price.split(" ")[0];
				});
				return priceList;
			},
			findLongest = function(value){
				return value.sort(function (a, b) { return b.length - a.length; })[0];
			},
			nestedArray = [],
			map = FreelancerSelection.view.main.Mapper.config,
			checkJSONString = map.checkJSON,
			freelancer = record.data,
			sourceLanguage = JSON.parse(checkJSONString(freelancer.skill_2000)),
			targetLanguage = JSON.parse(checkJSONString(freelancer.skill_2002)),
			subArea = JSON.parse(checkJSONString(freelancer.skill_2014)),
			specArea = JSON.parse(checkJSONString(freelancer.skill_2024)),
			category = JSON.parse(checkJSONString(freelancer.skill_2006)),
			price = generatePrice(freelancer.price_s_word),
			longest = findLongest([sourceLanguage,targetLanguage,subArea,category,specArea,price]);
		
			for(var index = 0; index < longest.length; index++){
				var row = {};
				row.sourceLanguage = map.category[sourceLanguage[index]];
				row.targetLanguage = map.category[targetLanguage[index]];
				row.specificArea = map.category[specArea[index]];
				row.subjectArea = map.category[subArea[index]];
				row.catTools = map.category[category[index]];
				row.price = price[index];
				nestedArray.push(row);
			}	
		grid.getViewModel().getStore('nestedStore').loadData(nestedArray);
    }
});
