/**
 * This view is an example list of people.
 */
Ext.define('FreelancerSelection.view.main.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mainlist',
    layout:'fit',
	height: 550,
    requires: [
        'FreelancerSelection.store.Personnel',
		'Ext.grid.plugin.RowExpander',
		'FreelancerSelection.plugins.RowExpanderGrid',
		'FreelancerSelection.view.main.MainController',
        'FreelancerSelection.view.main.MainModel'
    ],
	controller: 'main',
    viewModel: 'main',
	forceFit:true,
    title: 'Freelancer',
    bind:{
        store:'{freelancer}',
        selection:'{theRow}'
    },
    selType: 'checkboxmodel',
    tbar: [{
        tooltip: 'Add Freelancer',
        disabled: true,
        bind: {
            disabled: '{!theRow}',
            iconCls: '{addButton.icon}',
            text: '{addButton.text}'
        },
        handler: 'addFreelancer'
    }, '-', {
        iconCls: 'Click to send mail',
        disabled: true,
        bind: {
            disabled: '{!theRow}',
            iconCls: '{reqButton.icon}',
            text: '{reqButton.text}'
        },
        handler:'requestParticipation'
    }],
    frame: true,
    id:'freelancerGrid',
    columns: [
		{ text: 'Freelancer',  dataIndex: 'freelancer_name', width: 200, align:'left',
        renderer : function(value, meta) {
            var record = meta.record.data;
                if(record.potential_p && !record.selected_p)
                    meta.style = "color:green;";
                if(record.active_project_member_p == '1')
                    meta.style = "background-color:darkseagreen; color:black;";
                return value;
        }},
        { text: 'Worked With Cust Before', dataIndex: 'no_times_worked_for_customer', width: 50, align:'center',renderer : 'activeProj'},
		{ text: 'Trans', dataIndex: 'no_times_trans_for_customer', width: 20, align:'center',renderer : 'activeProj'},
		{ text: 'Edit', dataIndex: 'no_times_edit_for_customer', width: 20, align:'center',renderer : 'activeProj'},		
		{ text: 'Price(Hours)', dataIndex: 'price_hour', align:'left',renderer : function(value, meta) {
            var record = meta.record.data;
                if(value == 'Not Available')
                    meta.style = "color:red;";
                else
                    meta.style = "color:green;";
                if(record.active_project_member_p == '1')
//                    meta.style = "background-color:darkseagreen; color:black;";
                return value;
        }}
    ],
    listeners:{
        afterRowExpander:'onExpandRow'
    },
	 plugins:[{
		ptype:'rowexpandergrid',
		gridConfig:{
			forceFit:true,
			viewModel:'main',
			 bind: {
				store: '{nestedStore}'
			},
            columns: [
                { text: "Source Language", dataIndex: 'sourceLanguage', align:'center', flex:1},
                { text: "Target Language", dataIndex: 'targetLanguage', align:'center', flex:1},
                { text: 'Subject Area', dataIndex: 'subjectArea', align:'left', flex:2},
                { text: "Specific Area", dataIndex: 'specificArea', align:'left', flex:2},
                { text: 'Cat Tools', dataIndex: 'catTools', align:'left', flex:2},
                { 
                    text: "Price s-word", dataIndex: 'price', align:'left', flex:4,
                    renderer:function(value, meta, record, rowIndex, colIndex, store){
                        var icon = '';
                        if(value.length > 0)
                            icon = '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i> ';
                       return '<div><div style="color:#5fa2dd">'+icon+'<b>'+value+'</b></div>';
                    }
                }
            ],
            border:true,
            frame: false,
            header:false

		}
    }     
	]
});