Ext.define("CRWeb.view.Main", {
    extend: 'Ext.tab.Panel',

    config: {
		
		tabBarPosition: 'top',
		tabBar: {
			layout: { pack:'center'},
			
			//ui: 'gray'
			
		},
		
        items: [
		/*	{ xtype: 'Home' }, */
			{ xtype: 'News' ,
				
			},
			{ xtype: 'Tweets'},
			{ xtype: 'SponsorPage'},			
			{ xtype: 'RecentSongs'},	
			{
				
				docked: 'bottom',
				xtype: 'Player'
			}
        ]
    },
	
});
