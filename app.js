var MQTT_CLIENT_ID = "rdanijel_aquaponic_web"+Math.floor((1 + Math.random()) * 0x10000000000).toString();
var MQTT_CLIENT = new Paho.MQTT.Client("iot.eclipse.org", 443, "/ws", MQTT_CLIENT_ID);
MQTT_CLIENT.connect({ onSuccess: myClientConnected, useSSL: true });
MQTT_CLIENT.onMessageArrived = myMessageArrived;

function myClientConnected() {
  MQTT_CLIENT.subscribe("rdanijel_aquaponic_1/test/from_nodeMcuMini");
}

function myMessageArrived(message) {
  var messageBody = message.payloadString;
  var messageHTML = $("<p>"+messageBody+"</p>");
  $("#updateMe").prepend(messageHTML);
};

function myButtonWasClicked() {
  $("#updateMe").text("The text is updated!");
}
