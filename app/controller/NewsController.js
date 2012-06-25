Ext.define('CRWeb.controller.NewsController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            News: 'News'
        },
        control: {
            'News list':{
				itemtap: 'showPost'
			}
        }
    },

	showPost: function(list, index, element, record) 
	{
	
		var container=list.getParent();
		//alert(container);
		
		container.setActiveItem(
		{
			xtype:'NewsItem',
			items :
			[	
				{
					xtype:'panel',
					layout:
					{
						type:'hbox',
						pack:'center',
						align:'center',
					},
					height:'129px',
					items :
					[	
						{
							xtype   : 'panel',
							
							html    : '<img class="logo" src="resources/images/logo.png" />'
						}													
					],
				},			
				{
					xtype:'panel',
					cls:'newsItem',
					html:record.get('content'),
				},
				
				{
					xtype:'panel',
					layout:'hbox',
					items :
					[	
						{
							xtype:'spacer'
						},
						{
							xtype:'button',
							flex:1,
							text:'Ga terug',						
							align : 'center',
							listeners:
							{
								tap:function(theItem, e, eOpts)
								{
									goBack(theItem);
								},
							},
						},
						{
							xtype:'spacer'
						},
					],
				}
			],	
		});
	}
});
function goBack(anItem)
		{
		var container=anItem.getParent().getParent().getParent()  ;
		container.setActiveItem(0);
		}