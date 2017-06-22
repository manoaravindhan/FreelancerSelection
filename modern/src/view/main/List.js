/**
 * This view is an example list of people.
 */
Ext.define('FreelancerSelection.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',
    requires: [
        'FreelancerSelection.store.Personnel'
    ],
    title: 'Freelance',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Freelance',  dataIndex: 'name', width: 100 },
        { text: 'Worked With Cust Before', dataIndex: 'email', width: 230 },
        { text: 'Subject Area', dataIndex: 'phone', width: 150 },
		{ text: 'Cat Tools', dataIndex: 'phone'},
		{ text: 'Price(Hours)', dataIndex: 'phone'}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
