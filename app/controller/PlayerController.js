Ext.define('CRWeb.controller.PlayerController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            Player: 'Player'
        },
        control: {
            'button[action=togglePlay]':{ tap:'togglePlay'}
        }
    },
	
	togglePlay : function(button)
	{ 
		//alert('JOI');
		var container = button.getParent();
		// use ComponentQuery to get the audio component (using its xtype)
		var audio = container.down('audio');	
		if (audio.isPlaying())
		{
			audio.pause();	
			button.setIconCls( 'arrow_right');
		}
		else 		
		{
			audio.play();
			button.setIconCls('delete');
		}
	}
	
	
});