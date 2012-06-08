var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'http://50.7.241.10:8021/');



var sponsorPanel  = Ext.create('Ext.Carousel', {
    layout: 'card',
	cls : ["sponsorPanel","cards"],
	flex:4,

    items : [
		{
		
		html: '<img style="height:100%;" src="https://www.dropbox.com/s/xuy6xslukyhfm77/nsfw.jpg?dl=1"></img>',
			/*xtype:'image',
			src: 'https://www.dropbox.com/s/xuy6xslukyhfm77/nsfw.jpg?dl=1',
			cls: 'sponsor-img'*/
			style :'text-align:center;',
			cls:'card'
			
		},
		{
		
		html: '<img style="height:100%;" src="https://www.dropbox.com/s/p94e345k8je513k/sfw.jpg?dl=1"></img>',
			/*xtype:'image',
			src: 'https://www.dropbox.com/s/xuy6xslukyhfm77/nsfw.jpg?dl=1',
			cls: 'sponsor-img'*/
			style :'text-align:center;',
			cls:'card'
			
		},
		{
		
		html: '<img style="height:100%;" src="https://www.dropbox.com/s/cosjve0emjwbzw7/sfw2.jpg?dl=1"></img>',
			/*xtype:'image',
			src: 'https://www.dropbox.com/s/xuy6xslukyhfm77/nsfw.jpg?dl=1',
			cls: 'sponsor-img'*/
			style :'text-align:center;',
			cls:'card'
			
		}
		
	]
});
/*sponsorPanel.setActiveItem(0);*/


var playing=false;
var button = Ext.create('Ext.Button', {
		iconCls: 'arrow_right',
		iconMask: true,
		id: 'playerButton',
		cls: ["playerButton"],
		flex:1,	 
		handler:function(){
			var container = this.getParent(),
			// use ComponentQuery to get the audio component (using its xtype)
			audio = container.down('audio');	
			if (playing)
			{
				audio.pause();		
				playing=!playing;
				this.setIconCls( 'arrow_right');
			}
			else 		
			{
				audio.play();
				playing=!playing;
				this.setIconCls('delete');
			}
		}
	});
button.setPressedCls("playerButton-button-pressing");
button.setHeight(Ext.Viewport.getWindowHeight()*0.6);
		
var playerPanel = Ext.create('Ext.Container', {
    
    layout: 'hbox',
    items: [button,sponsorPanel,
		{
            xtype : 'audio',
            hidden: true,
            url   : 'http://50.7.241.10:8021/'
        }
	]
	
});

Ext.define("CRWeb.view.Player", {
    extend: 'Ext.Panel',
	xtype: 'Player',
	
		
    config: {
		items:[playerPanel]
		//html: '<div>tekst</div><audio src="http://50.7.241.10:8021/" autoplay="" />'
    }
});



                    
function rotateCarousel()
{
	
	
	
	var next =sponsorPanel.getActiveIndex( )+1;
	//alert(sponsorPanel.getItems( ).length);
	if(!(next <sponsorPanel.getItems( ).length-1))
	{
		next=0;
	}
	//alert('rezet');
	 sponsorPanel.setActiveItem(next);
	
}

setInterval(function(){rotateCarousel()},10000);



