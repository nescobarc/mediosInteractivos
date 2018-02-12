var posX = 0;
var posY = 200;
var posX2 = 300;
var posY2 = 0
var dir = 1;
var dir2 = 1;
var cont = 0;
var y = 1;
var x = 1;
var e = 0;
var b = 0;
var b1 = 0;
var o = 0;
var o1 = 0;
var m = 0;
var m1 = 0;
var a = 0;
var a1 = 0;
var p = 0;
var p1 = 0;


function setup() {
  createCanvas(320, 210);

}

function draw() {
  background(220);
  stroke (1);
  cont += 1;
  fill(posX, 80, 100); // Cuadrado Abajo 
  rect(posX, posY - 50*y, 20, 20);

  triangle(posX - 30*1/x, posY - 40*y, posX - 10*1/x, posY -45*y, posX - 30*1/x, posY - 20*y);

  ellipse(posX - 60*1/x, posY - 40*y, 20, 20);

  line(posX - 80*1/x, posY - 30*y, posX - 90*1/x, posY - 50*y);

  triangle(posX - 120*1/x, posY - 55*y, posX - 100*1/x, posY - 50*y, posX - 110*1/x, posY - 30*y);

  line(posX - 145*1/x, posY - 40*y, posX - 135*1/x, posY - 50*y);
  line(posX - 140*1/x, posY - 40*y, posX - 130*1/x, posY - 50*y);

  ellipse(posX - 165*1/x, posY - 35*y, 15, 30);

  if (cont < 45 && cont < 110) {
    posX = posX + 5 * dir;
    posX2 = posX2 - 5;
  }
  if (cont > 45 && cont < 110){
		posX += 2*dir;  
    posX2 += -2*dir;
    posY += -2*dir2; 
    posY2 += 2*dir2;
  }
  if (cont == 75 || cont == 100){
		dir = -dir;
  }
  if (cont == 90 || cont== 105){
		dir2 = -dir2;
  }
  if (cont >= 110){
		posX = 160;  
    posX2 = 160;
    posY = 105; 
    posY2 = 105;   	 
    y =0;
    x += 0.1;
  }

  fill(posX, 80, 100);
  rect(posX2, posY2 + 30*y, 20, 20); // Cuadrado Arriba 



  triangle(posX2 + 55*1/x, posY2 + 30*y, posX2 + 35*1/x,  y*25+posY2, posX2 + 55*1/x, y*50 + posY2);

  ellipse(posX2 + 80*1/x, y*40 + posY2, 20, 20);

  line(posX2 + 100*1/x, y*50 + posY2, posX2 + 110*1/x,y*30+posY2);

  triangle(posX2 + 145*1/x, y*25+ posY2, posX2 + 120*1/x, posY2 + 30*y, posX2 + 130*1/x, y*50+ posY2);

  line(posX2 + 165*1/x, y*45+ posY2, posX2 + 155*1/x, y*30+ posY2);
  line(posX2 + 160*1/x, y*45 + posY2, posX2 + 150*1/x, y*30+ posY2);

  ellipse(posX2 + 185*1/x, posY2 + 45*y, 15, 30);
  
	if (cont >= 130){
    noStroke();
    fill(150, 20, 40);
    triangle(140, 115, 160, e+ 60, 180, 115);
    triangle(b + 120, b1 + 80, 145, 115, 170, 100);
    triangle(o + 125, o1 + 150, 165, 115, 140, 115);
    triangle(m1+200,  m+ 80 , 180, 115, 140, 115);
    triangle(a + 200, a1 + 150, 160, 115, 180, 115);
    triangle(145, 110, 180, 110, 160, p1 + 150);
    
    }
  if (cont > 135){
    e = e - 1;
    b = b - 1;
    b1 = b1 - 1;
    o = o - 1;
    o1 = o1 + 1;
    m = m - 1;
    m1 = m1 + 1;
    a = a + 1;
    a1 = a1 + 1;
    p1= p1+ 1;
  }
    
}