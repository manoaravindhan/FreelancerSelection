Ext.define('FreelancerSelection.view.main.PanelController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.panel',
    listen: {
        global: {
            onAddFreelancers: 'init'
        }
    },
    init: function (mainView) {
        Ext.MessageBox.show({
            title: 'Freelancers',
            msg: 'Loading Freelancer...',
            progressText: 'Initializing...',
            width:300,
            wait: {
                interval: 200
            },
            progress:true,
            closable:false,
            draggable: false
        });
        
        var freelancer_endpoint_url = 'app/store/json/freelancer.json';

        var category_endpoint_url = 'app/store/json/availableCategory.json';

        var projectId = [],
            filter = '',
            endPoints = {
                freelancer: freelancer_endpoint_url,
                category: category_endpoint_url
            },
            getAjax = function(url) {
            return new Ext.Promise(function (resolve, reject) {
                Ext.Ajax.request({
                    url: url,
                    success: function (response) {
                        resolve(response);
                    },
                    failure: function (response) {
                        reject(response);
                    }
                });
            });
        },
        mapData = function(value){
            var mapValue = {};
            Ext.Array.forEach(value.data,function(record, index){
                    mapValue[record.category_id] = record.category_translated;
            });
            Ext.apply(FreelancerSelection.view.main.Mapper.config.category,mapValue);
        };
        
        filter = endPoints.freelancer;
        Ext.Promise.all([getAjax(filter),
                        getAjax(endPoints.category)]).then(function(response){
                            mapData(JSON.parse(response[1].responseText));
                            Ext.GlobalEvents.fireEvent('onGridDataLoad', JSON.parse(response[0].responseText).data);
                            Ext.MessageBox.hide();
        },function(){
            Ext.MessageBox.hide();
            Ext.toast('Error loading data');
        });
    }
});