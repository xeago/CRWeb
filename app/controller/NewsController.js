Ext.define('CRWeb.controller.NewsController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs:
		{
            News: 'News',
        },
        control: 
		{
            'button[action=addUser]':{ tap:'addUser'}
		},
	},
	addUser: function()
	{
		alert('jo');
	}
});


		/*showPost: function(list, index, element, record) {
		this.getNews().push({
			xtype:'panel',
			title:record.get('title'),
			html:record.get('content'),
			scrollable: true,
			styleHtmlContent:true
		});
		*/
	
	
