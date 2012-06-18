Ext.define("CRWeb.view.Home", {
    extend: 'Ext.Panel',
	xtype: 'Home',
		
    config: {
	
		title:'Home',
		displayField:'title',
		scrollable:true,
		styleHtmlContent:true,
		cls: 'home',
		
		html: [
				'<div style="text-align:center">',
				
				'<img src="resources/images/logo.png" />',				
				'</br></br></br>',
                '<h1>Welkom</h1>',
				'</br>',
                '<h2 style="text-align:left">Druk Hieronder op de Knop om muziek af te spelen.</h2>',
				
				'</div>'
           ].join(""),		
    }
});