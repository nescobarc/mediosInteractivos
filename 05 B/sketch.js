var dir; // Variables
var dir1;
var x = 250;
var y = 250;
var r
var h;
var m;
var s;
var hora;
var rota;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  dir = 1;
  h = hour();
  m = minute();
  s = second();

  background(220);
  strokeWeight(8);
  if (second() % 2 == 0) { // Color
    fill(0);
  } else {
    fill(255);
  }

  ellipse(x, y, 300, 300); // Elipse

  strokeWeight (3);
  stroke(150, 42, 53);
  push();
  translate(width / 2, height / 2);
  rota = s * 6;

  rotate(rota - 90);
  line(0, 0, 80, 0);
  pop();

  push();
  translate(width / 2, height / 2);
  rotate((minute() * 6) - 90)
  line(0, 0, 60, 0);
  pop();

  push();
  translate(width / 2, height / 2);
  if (h > 12)
    rotate((0 + hour() * 30)-90)
  {
    hora = h - 12;
  }
  line(0, 0, 40, 0);
  pop();
  
  
  //print(h + ","+ m + "," + s);
}