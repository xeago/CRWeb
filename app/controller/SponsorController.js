Ext.define('CRWeb.controller.SponsorController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            SponsorPage: 'SponsorPage'
        },
        control: {
            'SponsorPage List':{
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