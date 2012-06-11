Ext.define('CRWeb.store.Sponsor', {
    extend: 'Ext.data.Store',
	xtype:'Sponsor',
	config: {
        fields: [ 'url'],      
        proxy: {		
            type: 'jsonp',
            url: 'https://www.dropbox.com/s/5ajw9bebdbcp2ab/kindasfw.json?dl=1',
            reader: {
                type: 'json'
            }
        }
	}
})