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
			vidyoConnector.Connect({
			host:"prod.vidyo.io",
			token:"cHJvdmlzaW9uAEtldmluQDdhNWU2My52aWR5by5pbwA2MzY4NjIzNDgwNwAAMTMwMGJhMDgwZGZmOGZjOTA5OWQyNTE5YTc3ZWE0YjRhMmNiYTgwYTU0N2Q3NTcyNmEzOTA3ZmVhNmIyMjg3ZjViOGQ0ODE1MjE3ZTVjYTlhYWEzNDg0NmQ2ZTVmNGIz",
			displayName:"Kevin",
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
		}).catch(function(error) {

		});
	}
	status.downloadType;                       // Available download types with possible values of "MOBILE" "PLUGIN" "APP"
    status.downloadPathApp;                    // Path to the application installer for the app which could be invoked with a protocol handler
    status.downloadPathPlugIn;                 // Path to the Plugin that can be installed
    status.downloadPathWebRTCExtensionChrome;  // Path to the optional Chrome extension required for Screen Sharing in WebRTC
    status.downloadPathWebRTCExtensionFirefox;
    return true;
}

