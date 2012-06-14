var sponsorPanel = Ext.create('Ext.Img', {
	xtype:'Image',
	flex:4,
	onTap: function(){goToSponsorTab();},
	
	style:'-webkit-background-size: contain;background-position:center;',
});

function goToSponsorTab() 
{
	var child=Ext.getCmp('Sponsors');
	var par =child.getParent() 
	par.setActiveItem(child);

}

var imagesJson;
var imagesIndex=0;
var rotateImage=function(){
	if (imagesIndex>=imagesJson.length){imagesIndex=0}
	sponsorPanel.setSrc(imagesJson[imagesIndex].url);
	imagesIndex+=1;
};
sponsorPanel.on('painted',function(){
	Ext.Ajax.request({
		url:'kindasfw.json',
		success: function (response){
			imagesJson=Ext.JSON.decode(response.responseText);
			rotateImage();
			setInterval(rotateImage,10000);
		},
	});
});

var IsHigh =true ;
var buttonToggleQuality = Ext.create('Ext.Button', {
	id: 'qualityButton',
	cls: ["qualirtButton"],
	text: 'High',
	flex:1,	 
	handler:function(){
		var container = this.getParent(),
		// use ComponentQuery to get the audio component (using its xtype)
		audio = container.down('audio');	
		if (!IsHigh)
		{
			audio.setUrl(audioStreamUrl.low);
			this.setText('High');
			IsHigh =true;
		}
		else 		
		{
			audio.setUrl(audioStreamUrl.high);
			this.setText('Low');
			IsHigh =false;
		}
	}
});



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
		if (audio.isPlaying())
		{
			audio.pause();	
			this.setIconCls( 'arrow_right');
		}
		else 		
		{
			audio.play();
			this.setIconCls('delete');
		}
	}
});

var audioStreamUrl;

button.on('painted',function(){
		Ext.Ajax.request({
			url:'json.json',
			success: function (response){
				audioStreamUrl = Ext.JSON.decode(response.responseText);
				audio =playerPanel.down('audio');
				audio.setUrl(audioStreamUrl.high);
			}
		})
	}); 

	
button.setPressedCls("playerButton-button-pressing");
//button.setHeight('10%');

var playerPanel = Ext.create('Ext.Container', {  
    layout: 'hbox',
    items: [button,sponsorPanel,buttonToggleQuality,
		{
            xtype : 'audio',
            hidden: true,
            url   : ''
        }
	]
});

Ext.define("CRWeb.view.Player", {
    extend: 'Ext.Panel',
	
	xtype: 'Player',	
    config: {
		items:[playerPanel]
    }
});
