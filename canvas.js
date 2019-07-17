var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

var c; // context
c = canvas.getContext('2d');
// c.fillStyle = "rgba(255, 0, 0, 0.5)"
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(100, 0, 0, 0.5)"
// c.fillRect(200, 200, 100, 100);
// c.fillStyle = "rgba(5, 0, 0, 0.5)"
// c.fillRect(300, 300, 100, 100);
//
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();
//
// for(var i = 0; i < 20; i++){
//   c.beginPath();
//   c.arc(300 + i, 300 + i, 30, Math.PI, -Math.PI, false);
//   c.strokeStyle = "blue";
//   c.stroke();
// }
//
// for(var i = 0; i < 20; i++){
//   x = Math.random() * window.innerWidth;
//   y = Math.random() * window.innerHeight;
//
//   c.beginPath();
//   c.arc(x, y, 30, Math.PI, -Math.PI, false);
//   c.strokeStyle = "red";
//   c.stroke();
// }
var x = 200;
var velocity = 1;
function animate(){
  requestAnimationFrame(animate);

  c.clearRect(0,0,innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, 300, 30, Math.PI, -Math.PI, false);
  c.strokeStyle = "red";
  c.stroke();
  x += velocity;
  if((x + 30 >= innerWidth) && (velocity == 1)){
    velocity = -1;
  } else if((x - 30 <= 0) && (velocity == -1)){
    velocity = 1;
  }
}

animate();
