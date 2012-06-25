Ext.define('CRWeb.store.Tweets', {
    extend: 'Ext.data.Store',

    config: {
        fields: [ 'content',  'author',  'publishedDate','link'],

        pageSize: 10,

        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=-1&q=http://feeds.feedburner.com/IprojvTwitter',

            pageParam: 'page',
			
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        },
		sorters: [
			new Ext.util.Sorter({
				property : 'date',
				direction: 'DESC',
				sorterFn: function(o1, o2) {
					var v1 = new Date(o1.data.publishedDate);
					var v2 = new Date(o2.data.publishedDate);
					var result= v1 > v2 ? 1 : (v1 < v2 ? -1 : 0);
					return result;
				}
			})
		]
    }
});
