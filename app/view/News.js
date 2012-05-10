Ext.define("CRWeb.view.News", {
    extend: 'Ext.navigation.View',
	xtype: 'News',
		
    config: {
	
		title:'Nieuws',
		displayField:'title',
		
		items: {
			xtype:'list',
			itemTpl:'{title}',
			
			store: {
				autoLoad:true,
				fields:['title','author','content'],
				proxy: {
					type:'jsonp',
					url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
	                reader: {
	                    type: 'json',
	                    rootProperty: 'responseData.feed.entries'
	                }
				}
			}
		}
    }
});