Ext.define('sponsorPanel' ,{
	extend:'Ext.Img',
	xtype: 'sponsorPanel',
	config :
	{
		xtype:'Image',		
		
		style:'-webkit-background-size: contain;background-position:center;',
		listeners: 
		{
			tap: function(){goToSponsorTab();},		
			painted : function(panel) {
				Ext.Ajax.request({
					url:'https://www.dropbox.com/s/5ajw9bebdbcp2ab/kindasfw.json?dl=1',
					success: function (response){
						imagesJson=Ext.JSON.decode(response.responseText);
						sponsorPanel=panel;
						rotateImage();
						setInterval(rotateImage,10000);
					},
				});			
			}
		}
	}
});

Ext.define('logoPanel' ,{
	extend:'Ext.Img',
	xtype: 'logoPanel',
	config :
	{
		xtype:'Image',		
		src:'resources/images/logo.png',
		style:'-webkit-background-size: contain;background-position:center;',
		listeners: 
		{
			tap: function(){goToSponsorTab();},		
			
		}
	}
});

function goToSponsorTab() 
{
	var child=Ext.getCmp('Sponsors');
	var par =child.getParent() 
	par.setActiveItem(child);

}


var imagesJson;
var imagesIndex=0;
var sponsorPanel;
var rotateImage=function(){
	if (imagesIndex>=imagesJson.length){imagesIndex=0}
	sponsorPanel.setSrc(imagesJson[imagesIndex].url);
	imagesIndex+=1;
};




var IsHigh =true ;
Ext.define('qualityButton', {
	extend:'Ext.Button', 	
	xtype: 'qualityButton',
	
	config:{
		cls: ["qualirtButton"],
		text: 'High',
		handler:function(){
			var container = this.getParent(),
			audio = container.down('audio');	
			var wasPlaying =audio.isPlaying();						
			if (IsHigh)
			{
				audio.setUrl(audioStreamUrl.low);
				this.setText('Low');
				IsHigh =false;
			}
			else 		
			{
				audio.setUrl(audioStreamUrl.high);
				this.setText('High');
				IsHigh =true;
			}
			if(wasPlaying)
			{
				audio.play();
			}			

		}
	}
});

var audioStreamUrl;


Ext.define('playerButton', {
	extend: 'Ext.Button',
	xtype:'playerButton',
	
	config:{
		iconCls: 'arrow_right',
		iconMask: true,		
		cls: ["playerButton"],
		pressedCls : 'playerButton-button-pressing',
	},
	action:'togglePlay'
});

Ext.define('playerPanel', {  
	extend: 'Ext.Container',
	xtype: 'playerPanel',
    config :{
		layout: 'hbox',
	    items: [		
			{
				xtype: 'playerButton',
				flex:1,
				
				listeners        : {
					painted : function(button) {
					Ext.Ajax.request({
						url:'https://www.dropbox.com/s/39nwd5mbxffaoec/json.json?dl=1',
						success: function (response){
							audioStreamUrl = Ext.JSON.decode(response.responseText);
							var container = button.getParent();
							audio =container.down('audio');
							audio.setUrl(audioStreamUrl.high);
						}
					}) 					
					}
				}	
			},
			{
			xtype: 'logoPanel',
			flex:2,
			},
			{
			xtype: 'sponsorPanel',
			flex:2,
			},
			{
				xtype: 'qualityButton',
				flex:1,
				
				listeners        : {
					painted : function(button) {
					Ext.Ajax.request({
						url:'https://www.dropbox.com/s/39nwd5mbxffaoec/json.json?dl=1',
						success: function (response){
							audioStreamUrl = Ext.JSON.decode(response.responseText);
							var container = button.getParent();
							audio =container.down('audio');
							audio.setUrl(audioStreamUrl.high);
						}
					}) 					
					}
				}	
			},
			
			
			{
				xtype : 'audio',
				hidden: true,
				url   : ''
			}
		]
	}
});

Ext.define("CRWeb.view.Player", {
    extend: 'Ext.Panel',
	
	xtype: 'Player',	
    config:
	{
		items:
		[
			{
				xtype:'playerPanel'
			}
		],
    }
});
