Ext.define("CRWeb.view.News", {
    extend: 'Ext.Container',
	xtype: 'News',
	requires : ['Ext.data.proxy.JsonP'],
    config: {
	
		title:' ',
		layout:
		{
			type:'card',
			animation: {
				type: 'slide',
				direction: 'left',
				duration: 250
			},
			scrollable:true,
		},
		//displayField:'title',
		//cls:'displaynone',
		items :
		[
			{
				xtype: 'list',
				itemTpl:'{title}',
				grouped:true,
				
				store: {
					autoLoad:true,
					fields:['title','author','content','categories'],
					grouper: {
						groupFn: function(record) {
									var cat = record.get('categories');
									for (var i=0;i<cat.length;i++)
									{
										if (cat[i]=='Website')
											return 'Carnaval-Radio'
									}
									return 'Vasteloa'
								}
					},
					proxy: {
						type:'jsonp',
						url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://cr.xeago.eu/category/feed/Website.aspx',
						reader: {
							type: 'json',
							rootProperty: 'responseData.feed.entries'
						}
					}
					
					
				}
			}
		],
		
		
    }
});


Ext.define('NewsItem',{
	extend: 'Ext.Panel',
	
	xtype: 'NewsItem',
	config: 
	{
		
		scrollable:true,
	}
});

