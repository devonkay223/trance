var x, y, z;

webSocketPort = new osc.WebSocketPort({
  socket: ws
});

// send message
maxAPI.addHandler("send", (...args) => {
  if (webSocketPort && isConnected) {
      webSocketPort.send({
              address: "/max/midi",
              args: [{
                      type: "i",
                      value: args[0]
              }]
          });
  }
});

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







