var x, y, z;

var xebraState = new Xebra.State({
  hostname: "127.0.0.1",
  port: 8086,
  supported_objects: Xebra.SUPPORTED_OBJECTS
});
xebraState.connect();

var sliderObj;
sliderObj.setParamValue("distance", 72);
// webSocketPort = new osc.WebSocketPort({
//   socket: ws
// });

// // send message
// maxAPI.addHandler("send", (...args) => {
//   if (webSocketPort && isConnected) {
//       webSocketPort.send({
//               address: "/max/midi",
//               args: [{
//                       type: "i",
//                       value: args[0]
//               }]
//           });
//   }
// });

window.addEventListener('devicemotion', function(e) 
{ 
  x = parseFloat(e.acceleration.x).toFixed(3);
  y = parseFloat(e.acceleration.y).toFixed(3);
  z = parseFloat(e.acceleration.z).toFixed(3); 

  console.log("(", x, ", ", y, ", ", z, ") \n");

  var message = new OSC.Message('/test/random', Math.random());
  osc.send(message);
});

function getPerm(){
  DeviceMotionEvent.requestPermission()
}







