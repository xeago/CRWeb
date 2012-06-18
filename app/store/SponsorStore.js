// Set up a model to use in our Store
Ext.define('SponsorModel', {
    extend: 'Ext.data.Model',
	xtype:'SponsorModel',
    config: {
        fields: [
            {name: 'name', type: 'string'},
            {name: 'logoUrl',  type: 'string'},
            {name: 'description',  type: 'string'},
            {name: 'sponsorType',  type: 'string'},
			{name: 'order',  type: 'int'}
        ]
    }
});

Ext.define('CRWeb.store.SponsorStore', {
	extend:'Ext.data.Store',
	xtype:	'SponsorStore',
	config : 
	{
		model: 'SponsorModel',
		proxy: {
			type: 'jsonp',
			url : 'https://www.dropbox.com/s/yitupffrygf59rg/Sponsor.json?dl=1',
			reader: {
				type: 'json',
				//rootProperty: ''
			}
		},
		autoLoad: true
		
		
	}
});