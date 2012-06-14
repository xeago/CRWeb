Ext.define("CRWeb.view.SponsorPage", {
    extend: 'Ext.navigation.View',
	xtype: 'SponsorPage',
	id: 'Sponsors',
		
    config: {
	
		title:'Sponsoren',
		displayField:'title',
		scrollable:true,
		styleHtmlContent:true,
		cls: 'home',
		
		items: {
			xtype:'list',
			title:'Onze Sponsoren',
			
			itemTpl:'Sponsor',
			grouped:true,
		}
	}
});


function getSponsoren()
{
	Ext.Ajax.request({
		url:'https://www.dropbox.com/s/5ajw9bebdbcp2ab/kindasfw.json?dl=1',
		success:( function (response){
			var page=Ext.getCmp('Sponsors');
			var htmlText ;
			for	(i=0;i<response.length;i++){	
				htmlText += response[i].url;
			}
		})
	});
	page.setHtml(htmlText);
}
