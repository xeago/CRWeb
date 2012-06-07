Ext.define('CRWeb.view.Tweets', {

    extend: 'Ext.List',
    requires: [
        'Ext.plugin.PullRefresh'       
    ],

    xtype: 'Tweets',

    config: {

        title: 'Tweets',
        iconCls: 'chat',
        cls: 'tweets',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar'
            }
        ],

        store: 'Tweets',
        limit: 10,
        disableSelection: true,

        plugins: [         
            {
				type: 'pullrefresh',
				refreshFn: function() {   //reload the store
					var store = Ext.getStore('Tweets');
					store.removeAll();
					store.load();
					/*
					store.sort(new Ext.util.Sorter({
						property : 'date',
						direction: 'DESC',
						sorterFn: function(o1, o2) {
							var v1 = new Date(o1.data.publishedDate);
							var v2 = new Date(o2.data.publishedDate);
							var result= v1 > v2 ? 1 : (v1 < v2 ? -1 : 0);
							console.log(result);
							return result;
						} 
					}));*/
				}
			}
			
        ],

        emptyText: '<p class="no-searches">No tweets found matching that search</p>',

        itemTpl: Ext.create('Ext.XTemplate',       
           '<img src="http://api.twitter.com/1/users/profile_image/{author}" />',
            '<div class="tweet">',
                '<span class="posted">{[this.posted(values.publishedDate)]}</span>',
                '<h2>{author}</h2>',
                '<p>{content}</p>',
            '</div>',
            {
                posted: function(date) {
                    try {
                        var now = Math.ceil(Number(new Date()) / 1000),
                            dateTime = Math.ceil(Number(new Date(date)) / 1000),
                            diff = now - dateTime,
                            str;

                        if (diff < 60) {
                            return String(diff) + ' seconds ago';
                        } else if (diff < 3600) {
                            str = String(Math.ceil(diff / (60)));
                            return str + (str == "1" ? ' minute' : ' minutes') + ' ago';
                        } else if (diff < 86400) {
                            str = String(Math.ceil(diff / (3600)));
                            return str + (str == "1" ? ' hour' : ' hours') + ' ago';
                        } else if (diff < 60 * 60 * 24 * 365) {
                            str = String(Math.ceil(diff / (60 * 60 * 24)));
                            return str + (str == "1" ? ' day' : ' days') + ' ago';
                        } else {
                            return Ext.Date.format(new Date(date), 'jS M \'y');
                        }
                    } catch (e) {
                        return '';
                    }
                }
            }
        )
    }
});
