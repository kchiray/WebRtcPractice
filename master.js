var vidyoConnector;

function onVidyoClientLoaded(status) {
	console.log("VidyoClient load state - " + status.state);
	if (status.state == "READY"){
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
			token:"cHJvdmlzaW9uAEtldmluQDdhNWU2My52aWR5by5pbwA2MzY4NjIzODQxMAAAZmUzMTMzZDI2OTM4ZGJmMzA0ZmJhNzJiNTg3ZmUyZTNlYTQ2MDI4YTQzZTM4ZTc2ODkxYmZjN2M1YTc4YjllNTBmNGU1ODhhYWE4N2Q0NmVmNGY2N2E0MWQ5ZTkzM2U4",
			displayName:"KevinDawg",
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