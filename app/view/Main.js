Ext.define("CRWeb.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        tabBarPosition: 'top',

        items: [
            {
                xtype: 'nestedlist',
				title: 'Nieuws',
                iconCls: 'home',
				displayField: 'title',
				
				store: {
					type: 'tree',

					fields: [
						'title', 'link', 'content',
						{name: 'leaf', defaultValue: true}
					],

					root: {
						leaf: false
					},

					proxy: {
						type: 'jsonp',
						url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog&num=10',
						reader: {
							type: 'json',
							rootProperty: 'responseData.feed.entries'
						}
					}
				},
				
				detailCard: {
					xtype: 'panel',
					scrollable: true,
					styleHtmlContent: true
				},
			
				listeners: {
					itemtap: function(nestedList, list, index, element, post) {
						this.getDetailCard().setHtml(post.get('content'));
					}
				}
            },
			{
				xtype: 'nestedlist',
				title: 'Nieuws',
                iconCls: 'home',
				displayField: 'title',
				
			},
			{
				xtype: 'nestedlist',
				title: 'Nieuws',
                iconCls: 'home',
				displayField: 'title',
				
			},
			{
				xtype: 'nestedlist',
				title: 'Sponsoren',
                iconCls: 'home',
				displayField: 'title',
				
			}
        ]
    }
});
