var x, y, z;

window.addEventListener('devicemotion', function(e) 
{ 
  x = parseFloat(e.acceleration.x).toFixed(3);
  y = parseFloat(e.acceleration.y).toFixed(3);
  z = parseFloat(e.acceleration.z).toFixed(3); 

  console.log("(", x, ", ", y, ", ", z, ") \n");
});

function getPerm(){
  DeviceMotionEvent.requestPermission()
}



