var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'http://50.7.241.10:8021/');
var playing=false;
var button = Ext.create('Ext.Button', {
    text: 'Button',
    id: 'rightButton',
	handler:function(){
		if (playing) audioElement.pause();
		else audioElement.play();
		playing=!playing;
	}
});

Ext.define("CRWeb.view.Player", {
    extend: 'Ext.Panel',
	xtype: 'Player',
		
    config: {
		items:[button]
		//html: '<div>tekst</div><audio src="http://50.7.241.10:8021/" autoplay="" />'
    }
});