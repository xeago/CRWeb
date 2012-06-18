/*Ext.define('SponsorPanelList',{
	extend:'Ext.List',
	xtype:'SponsorPanelList',
	grouped:true,
	
	config:
	{
		items:
		{
			xtype:	'list',
			store : 'SponsorStore',
			itemTpl:  '{name}' ,
		}
	}

}); */



Ext.define("CRWeb.view.SponsorPage", {
    extend: 'Ext.List',
	xtype: 'SponsorPage',
	id: 'Sponsors',
		
    config: {
	
		title:'Sponsoren',
		displayField:'title',
		scrollable:true,
		styleHtmlContent:true,
		cls: 'home',
		
		emptyText: '<p class="no-searches">No sponsors found</p>',
		itemTpl: Ext.create('Ext.XTemplate',       
            '<div >',
                '<p>jojo</p>',                
            '</div>'
			),
			
		items: [
            {
                docked: 'top',
                xtype: 'titlebar'
            }
        ],
			/* items: [
			{
				xtype:'SponsorPanelList',
				title:'Sponsoren'
			}
		], 
		*/
		listeners: 
		{			
			painted : function() 
			{
				
			}
		}
	}
});


