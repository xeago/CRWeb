Ext.define('CRWeb.controller.NewsController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
           News:'News' 
        },
        control: {
            'News list':{
			itemtap: 'showPost'
			}
        }
    },    
	showPost: function (){
		alert('test');
	}
});