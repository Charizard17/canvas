var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// c.fillStyle = "rgba(0, 0, 255, 0.7)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0, 255, 255, 1)";
// c.fillRect(100, 800, 100, 100);
// c.fillStyle = "rgba(0, 255, 0, 1)";
// c.fillRect(800, 100, 100, 100);
// c.fillStyle = "rgba(255, 0, 0, 0.7)";
// c.fillRect(800, 800, 100, 100);
// c.fillStyle = "rgba(111, 111, 111, 1)";
// c.fillRect(450, 450, 100, 100);

// console.log(canvas);

// Line
// c.beginPath();
// c.moveTo(100, 400);
// c.lineTo(400, 100);
// c.lineTo(600, 300);
// c.lineTo(100, 400);
// c.strokeStyle = "magenta";
// c.stroke();

// Arc / Circle
// c.arc(x: Int, y: Int, r: Int, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool (false));
// c.beginPath();
// c.arc(500, 500, 50, 0, Math.PI * 2, false);
// c.strokeStyle = "lime";
// c.stroke();

// c.beginPath();
// c.arc(750, 500, 100, 0, Math.PI * 1.5, false);
// c.fillStyle = "rgba(255, 0, 0, 0.3)";
// c.fillRect(750, 400, 100, 100);
// c.strokeStyle = "red";
// c.stroke();

// for (var i = 1; i < 10; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 50, 0, Math.PI * 2, false);
//   c.strokeStyle = "black";
//   c.stroke();
// }

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
    c.fill();
    c.fillStyle = "gray";
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
  var radius = 30;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = Math.random() - 0.5;
  var dy = Math.random() - 0.5;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
