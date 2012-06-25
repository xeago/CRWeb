Ext.define("CRWeb.view.Info", {
    extend: 'Ext.Container',
	xtype: 'Info',
	requires : ['Ext.data.proxy.JsonP'],
    config: {
	
		title:' ',
		layout:
		{
			type:'vbox',
			animation: {
				type: 'slide',
				direction: 'left',
				duration: 250
			},

		},
        scrollable:true,
		//displayField:'title',
		//cls:'displaynone',
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
				cls:'info-panel',
                styleHtmlContent: true,
				html            : '<div class="info-header">Contact</div>' +
                '<div class="info-tekst">'+
                '<p><strong>Stichting Carnaval-Radio.nl</strong></p>' +
                '<p><i>E-mail:</i> <a target="_blank" href="mailto:info@carnaval-radio.nl?subject=Mobile-Support">info@carnaval-radio.nl</a></p>' + 
                '<p><i>Website:</i> <a target="_blank" href="http://www.carnaval-radio.nl">Carnaval-Radio.nl</a></p>' +
                '</div>' +
                '<div class="info-header">Help</div>' +
                '<div class="info-tekst">'+
                '<p><strong>Afspelen: </strong></p><p>Druk links onderin de balk op de ">" (play) knop om Carnaval-Radio te beluisteren.</p>' +
                '<p><strong>Kwaliteit aanpassen: </strong></p><p>Druk rechts onderin de balk op de "High" of "Low" knop om de kwaliteit aan te passen. De tekst op de knop geeft de huidige status aan.</p>' +
                '<p><strong>Meer informatie over Carnaval Radio: </strong></p><p>Onze website bevat nog veel meer informatie dan deze mobiele applicatie, neem daar eens, een kijkje.</p>' +
                '</div>' + 
                '<div class="info-header">Bedankt</div>' +
                '<div class="info-tekst">'+
                '<p>Via deze weg willen we alle sponsoren en vrienden bedanken die Carnaval Radio een warm hart toedragen. We bedanken de gemeente Brunssum omdat zij al sinds ons bestaan het initiatief Carnaval Radio steunen. Dank gaat ook uit naar Lars Brand, Pascal Chermin, Nick Nijenhuis en Twan Wolthof voor het ontwikkelen van deze applicatie en onze website.</p>' +
                '</div>'
                ,
			}
            
		],
		
		
    }
});


