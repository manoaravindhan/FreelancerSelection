Ext.define('FreelancerSelection.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'freelancer_name', 'no_times_worked_for_customer', 'subjectArea','select'
    ],

    data: { items: [
        { freelancer_name: 'Jean Luc', no_times_worked_for_customer: "17 Times", subjectArea: "Marketing", select: false, catTools: 'Wordfast',price:'50' },
        { freelancer_name: 'Worf',     no_times_worked_for_customer: "17 Times",  subjectArea: "Marketing", select: false, catTools: 'Trados Studio 2015',price:'5.00' },
        { freelancer_name: 'Deanna',   no_times_worked_for_customer: "14 Times",    subjectArea: "Marketing", select: false, catTools: 'Wordfast',price:'150' },
        { freelancer_name: 'Data',     no_times_worked_for_customer: "never",        subjectArea: "Marketing", select: false, catTools: 'Wordfast',price:'50.75' }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
