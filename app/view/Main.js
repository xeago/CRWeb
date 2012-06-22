Ext.define("CRWeb.view.Main", {
    extend: 'Ext.tab.Panel',

    config: {
		
		tabBarPosition: 'top',
		tabBar: {
			layout: { pack:'center'}
		},
		
        items: [
		/*	{ xtype: 'Home' }, */
			{ xtype: 'News' },
			{ xtype: 'Tweets'},
			{ xtype: 'SponsorPage'},			
			{
				docked: 'bottom',
				xtype: 'Player'
			}
        ]
    },
	
});
