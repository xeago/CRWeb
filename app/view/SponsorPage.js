Ext.define('CRWeb.view.SponsorPage', {

    extend: 'Ext.List',
    

    xtype: 'SponsorPage',
	id : 'Sponsors',
    config: {

		id : 'Sponsors',	
        title: 'Sponsoren',
        iconCls: 'chat',
        

     

        store: 'SponsorStore',
        limit: 10,
        disableSelection: true,

        emptyText: '<p class="no-searches">Error loading sponsors</p>',

        itemTpl: Ext.create('Ext.XTemplate',       
            '<div style="text-align:center;">',
                '<h1 style="text-align:center; margin-bottom:20px;">{type}</h1>',
				'{[this.name(values.items,values.order)]}',
            '</div>',
		 {
			name:function (items, itemsOnOneLine)
			{				
				var outputstring='';
				itemsOnOneLine= itemsOnOneLine;
				var size=100/itemsOnOneLine;
				for(i=0;i<items.length;i++)
				{
					
					outputstring+='<img src="'+items[i].logoUrl +'"  style="width:'+size+'%; max-height:'+size+'%; text-align:center; padding:1px;"></img>';
				}
				
					
			return outputstring; //we return all images of this cat.
			}
		 }
        ),
		
		listeners: 
		{	
			activate: function()
			{			
				var store = Ext.getStore('SponsorStore');
				store.load();
			}
		}
    }
});
