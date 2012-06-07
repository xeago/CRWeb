Ext.define('CRWeb.controller.Tweets', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			title: 'Tweets titlebar'
		},
		control: {
			Tweets: {
				activate: 'onActivate'
			}
		}
	},

	onActivate: function() {
	
		if (!this.loadedTweets) {

			this.getTitle().setTitle(CRWeb.app.twitterSearch);

			/*Ext.getStore('Tweets').getProxy().setExtraParams({
				q: CRWeb.app.twitterSearch
			}); */
			
			Ext.getStore('Tweets').load();

			this.loadedTweets = true;
		}
	}

});
