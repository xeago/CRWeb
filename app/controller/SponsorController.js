Ext.define('CRWeb.controller.SponsorController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            SponsorPage: 'SponsorPage'
        },
        control: {
			'SponsorPage List'::{
				itemtap: 'alertIt'
				}
            
        }
		//alertIt: function(){alert('Konichiwa !');}
		
    },	
});