var vidyoConnector;

function onVidyoClientLoaded(status) {
	console.log("VidyoClient load state - " + status.state);
	if (status.state == "Ready"){
		VC.CreateVidyoConnector ({
			viewId:"renderer",
			viewStyle:"VIDYO_CONNECTORVIEWSTYLE_Default", 
			remoteParticipants: 6, 
			logFileFilter: "error",
			logFileName: "",
			userData:""

		}).then(function (vc) {
			console.log("Create success");
			vidyoConnector = vc;
		}).catch(function(error) {

		});
	}
}


	function joinCall(){
		vidyoConnector.Connect({
			host:"prod.vidyo.io",
			token:"cHJvdmlzaW9uAEtldmluQDdhNWU2My52aWR5by5pbwA2MzY4NjIzMzg3NgAAODc2NDkzOTlhNjE3MjI5ZTQ3OGE3ZmYwZTgxZWQ5NTMzZmZlZmVlYzg0YTVhZWZhNGM0OTBlODkzMTM0YjEwNWY5YTIyNDFjZDk4YTdmZjc3NGFlODg2MWU4MDIxOWY4",
			displayName:"KevDawg",
			resourceId:"Room 1",
			onSuccess: function(){
				console.log("You did it!")
			},
			onFailure: function(reason){
				console.log("You cannot do anything right!")
			},
			onDisconnected: function(reason){
				console.log("Disconnected - " + reason)
			}
		});
	}