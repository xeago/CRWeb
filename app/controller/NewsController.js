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

	showPost: function(list, index, element, record) {
		this.getNews().push({
			xtype:'panel',
			title:record.get('title'),
			html:record.get('content'),
			scrollable: true,
			styleHtmlContent:true
		});
	}
	
});