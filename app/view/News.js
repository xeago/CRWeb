Ext.define("CRWeb.view.News", {
    extend: 'Ext.navigation.View',
	xtype: 'News',
	requires : ['Ext.data.proxy.JsonP'],
    config: {
	
		title:'Nieuws',
		displayField:'title',
		
		items: [
			{
			xtype:'button',
			action:'addUser'
			
			},
			
			/*xtype:'list',
			title:'Nieuws',
			
			itemTpl:'{title}',
			grouped:true,
			
			store: {
				
				fields:['title','author','content','categories'],
				grouper: {
					groupFn: function(record) {
				                var cat = record.get('categories');
								for (var i=0;i<cat.length;i++)
								{
									if (cat[i]=='Nieuws: Games / Xbox')
										return 'Carnaval-Radio'
								}
								return 'Vasteloa'
				            }
				},
				proxy: {
					type:'jsonp',
					url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://tweakers.net/feeds/mixed.xml',
	                reader: {
	                    type: 'json',
	                    rootProperty: 'responseData.feed.entries'
	                }
				}
				*/
			],
		}
    }
);