Ext.define('CRWeb.store.RecentSongsStore', {
    extend: 'Ext.data.Store',

    config: {
        fields: [ 'song'],


        proxy: {
            type: 'ajax',
            url: 'Songs.json',
			//method: 'POST',
            pageParam: 'page',
			
            reader: {
                type: 'json',  
				rootProperty: 'd'				
            }
        },
		
		/*sorters: [
			new Ext.util.Sorter({
				property : 'order',
				direction: 'ASC',
				sorterFn: function(record1, record2) {
                var order1 = record1,
                    order2 = record2;
				
                return order1 > order2 ? 1 : (order1 == order2 ? 0 : -1);
				}
			})
		], */
		
		
		
		autoload: true,
    }
});

