Ext.define('CRWeb.store.SponsorStore', {
    extend: 'Ext.data.Store',

    config: {
        fields: [ 'type','order','items'],


        proxy: {
            type: 'ajax',
            url: 'http://cr.xeago.eu/json/solidMobileSponsor.json',

            pageParam: 'page',
			
            reader: {
                type: 'json',  
			//	rootProperty: 'responseData.feed.entries'				
            }
        },
		
		sorters: [
			new Ext.util.Sorter({
				property : 'order',
				direction: 'ASC',
				sorterFn: function(record1, record2) {
                var order1 = record1,
                    order2 = record2;
				
                return order1 > order2 ? 1 : (order1 == order2 ? 0 : -1);
				}
			})
		],
		
		
		autoload: true,
    }
});
