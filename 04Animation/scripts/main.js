

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
myOtherBox = document.getElementById('myOtherBox');

function spin(){
 myOtherBox.object3D.rotation.x -= rotationSpeed;
console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps

function bigBox(x) {
  x.style.height = "3";
  x.style.width = "9";
   x.style.depth = "3";
}

function normalBox(x) {
  x.style.height = "1";
  x.style.width = "3";
  x.style.depth = "1";
}
