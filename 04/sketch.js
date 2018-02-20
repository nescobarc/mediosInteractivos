var BRx = 10;
var BCux = 80;
var BLx = 150;
var BLIx = 220;
var BIx = 290;
var BCix = 360;
var Brecx = 430;
var BScx = 500;
var BAx = 570;
var BTx = 640;

var tamaño = 60;
var By = 30;

var boton1x = 97;
var boton1y = 52;
var boton2x = 107;
var boton2y = 42;
var botontam = 20;

var L1x = 158; // L
var L2x = 178;
var L3x = 198;
var L1y = 40;
var L2y = 60;
var L3y = 80;

var L11x = 228; // L Inversa
var L22x = 248;
var L33x = 268;
var L11y = 40;
var L22y = 60;
var L33y = 80;

var I1x = 300; // Infinito
var I1y = 35;
var I2x = 345;
var I2y = 80;

var E1x = 390; // Ellipse
var E1y = 60;
var Etam = 35;

var herramienta = 0;
var colores = 0;

function setup() {
  createCanvas(730, 500);
  background(220);
}

function draw() {

  fill(255, 255, 255);
  rect(10, 30, 60, 60);

  fill(255, 255, 255);
  rect(27, 40, 25, 45); // Rectángulo 
  line(37, 40, 37, 85)
  line(42, 40, 42, 85)

  rect(80, 30, 60, 60);

  fill(255, 255, 255);
  rect(boton1x, boton1y, botontam, botontam); // Cuadrado Negro
  rect(boton2x, boton2y, botontam, botontam); // Cuadrado Blanco

  rect(150, 30, 60, 60);

  beginShape(); // L
  vertex(L1x, L1y);
  vertex(L2x, L1y);
  vertex(L2x, L2y);
  vertex(L3x, L2y);
  vertex(L3x, L3y);
  vertex(L1x, L3y);
  endShape(CLOSE);

  rect(220, 30, 60, 60);

  beginShape(); // L Inversa
  vertex(L11x, L11y);
  vertex(L11x, L22y);
  vertex(L22x, L22y);
  vertex(L22x, L33y);
  vertex(L33x, L33y);
  vertex(L33x, L11y);
  endShape(CLOSE);

  rect(290, 30, 60, 60);

  beginShape(); // Infinito
  vertex(I1x, I1y);
  bezierVertex(I1x, I1y, I2x, I2y, I2x, I2y);
  bezierVertex(I1x, I2y, I2x, I1y, I1x, I1y);
  endShape();

  rect(360, 30, 60, 60);

  ellipse(E1x, E1y, Etam, Etam); // Circulo

  rect(430, 30, 60, 60);

  rect(447, 40, 25, 45); // Rectángulo
  line(447, 50, 472, 50);

  rect(500, 30, 60, 60);

  rect(513, 42, 35, 35, 10); // Semi cuadrado

  rect(570, 30, 60, 60);

  ellipse(600, 60, 20, 50); // Atomo
  ellipse(600, 60, 50, 20);

  rect(640, 30, 60, 60);

  triangle(650, 75, 650, 40, 690, 75); // Triangulo 

  fill(223, 192, 219);
  rect(30, 100, 20, 20);

  fill(243, 173, 185);
  rect(100, 100, 20, 20);

  fill(219, 218, 245);
  rect(170, 100, 20, 20);

  fill(242, 217, 198);
  rect(240, 100, 20, 20);

  fill(247, 202, 197);
  rect(310, 100, 20, 20);

  fill(191, 206, 241);
  rect(380, 100, 20, 20);

  fill(188, 219, 246);
  rect(450, 100, 20, 20);

  fill(181, 227, 226);
  rect(520, 100, 20, 20);

  fill(178, 235, 208);
  rect(590, 100, 20, 20);

  fill(172, 215, 155);
  rect(660, 100, 20, 20);


  if (mouseIsPressed) {
    if (mouseX > BRx && mouseX < BRx + tamaño && mouseY > By && mouseY < By + tamaño) {
      herramienta = 0;
    }

    if (mouseX > BCux && mouseX < BCux + tamaño && mouseY > By && mouseY < By + tamaño) {
      herramienta = 1;
    }

    if (mouseX > BLx && mouseX < BLx + tamaño && mouseY > By && mouseY < By + tamaño) {
      herramienta = 2;
    }

    if (mouseX > BLIx && mouseX < BLIx + tamaño && mouseY > By && mouseY < By + tamaño) {
      herramienta = 3;
    }

    if (mouseX > BIx && mouseX < BIx + tamaño && mouseY > By && mouseY < By + tamaño) {
      herramienta = 4;
    }

    if (mouseX > BCix && mouseX < BCix + tamaño && mouseY > By && mouseY < By + tamaño) {
      herramienta = 5;
    }
    if (mouseX > Brecx && mouseX < Brecx + tamaño && mouseY > By && mouseY < By + tamaño) {
      herramienta = 6;
    }

    if (mouseX > BScx && mouseX < BScx + tamaño && mouseY > By && mouseY < By + tamaño) {
      herramienta = 7;
    }

    if (mouseX > BAx && mouseX < BAx + tamaño && mouseY > By && mouseY < By + tamaño) {
      herramienta = 8;
    }

    if (mouseX > BTx && mouseX < BTx + tamaño && mouseY > By && mouseY < By + tamaño) {
      herramienta = 9;
    }

    //empiezan los colores
    if (mouseX > 30 && mouseX < 30 + 20 && mouseY > 100 && mouseY < 100 + 20) {
      colores = 0;
    }

    if (mouseX > 100 && mouseX < 100 + 20 && mouseY > 100 && mouseY < 100 + 20) {
      colores = 1;
    }

    if (mouseX > 170 && mouseX < 170 + 20 && mouseY > 100 && mouseY < 100 + 20) {
      colores = 2;
    }

    if (mouseX > 240 && mouseX < 240 + 20 && mouseY > 100 && mouseY < 100 + 20) {
      colores = 3;
    }

    if (mouseX > 310 && mouseX < 310 + 20 && mouseY > 100 && mouseY < 100 + 20) {
      colores = 4;
    }

    if (mouseX > 380 && mouseX < 380 + 20 && mouseY > 100 && mouseY < 100 + 20) {
      colores = 5;
    }
    if (mouseX > 450 && mouseX < 450 + 20 && mouseY > 100 && mouseY < 100 + 20) {
      colores = 6;
    }

    if (mouseX > 520 && mouseX < 520 + 20 && mouseY > 100 && mouseY < 100 + 20) {
      colores = 7;
    }

    if (mouseX > 590 && mouseX < 590 + 20 && mouseY > 100 && mouseY < 100 + 20) {
      colores = 8;
    }

    if (mouseX > 660 && mouseX < 660 + 20 && mouseY > 100 && mouseY < 100 + 20) {
      colores = 9;
    }

    //colores 
    if (colores == 0) {
      fill(223, 192, 219);
    }

    if (colores == 1) {
      fill(243, 173, 185);
    }

    if (colores == 2) {
      fill(219, 218, 245);
    }

    if (colores == 3) {
      fill(242, 217, 198);
    }

    if (colores == 4) {
      fill(247, 202, 197);
    }

    if (colores == 5) {
      fill(191, 206, 241);
    }

    if (colores == 6) {
      fill(188, 219, 246);
    }

    if (colores == 7) {
      fill(181, 227, 226);
    }

    if (colores == 8) {
      fill(178, 235, 208);
    }

    if (colores == 9) {
      fill(172, 215, 155);
    }

    //herramientas

    if (herramienta == 0) {
      rect(mouseX, mouseY, 25, 45); // Rectángulo 
      line(mouseX + 10, mouseY, mouseX + 10, mouseY + 45)
      line(mouseX + 15, mouseY, mouseX + 15, mouseY + 45)
    }

    if (herramienta == 1) {
      rect(mouseX, mouseY, botontam, botontam); // Cuadrado Negro
      rect(mouseX + 10, mouseY - 10, botontam, botontam); // Cuadrado Blanco 
    }

    if (herramienta == 2) {
      beginShape(); // L
      vertex(mouseX, mouseY);
      vertex(mouseX + 20, mouseY);
      vertex(mouseX + 20, mouseY + 20);
      vertex(mouseX + 40, mouseY + 20);
      vertex(mouseX + 40, mouseY + 40);
      vertex(mouseX, mouseY + 40);
      endShape(CLOSE);
    }

    if (herramienta == 3) {
      beginShape(); // L Inversa
      vertex(mouseX, mouseY);
      vertex(mouseX, mouseY + 20);
      vertex(mouseX + 20, mouseY + 20);
      vertex(mouseX + 20, mouseY + 40);
      vertex(mouseX + 40, mouseY + 40);
      vertex(mouseX + 40, mouseY);
      endShape(CLOSE);
    }

    if (herramienta == 4) {
      beginShape(); // Infinito
      vertex(mouseX, mouseY);
      bezierVertex(mouseX, mouseY, mouseX + 45, mouseY + 45, mouseX + 45, mouseY + 45);
      bezierVertex(mouseX, mouseY + 45, mouseX + 45, mouseY, mouseX, mouseY);
      endShape();
    }

    if (herramienta == 5) {
      ellipse(mouseX, mouseY, Etam, Etam); // Circulo
    }

    if (herramienta == 6) {
      rect(mouseX, mouseY, 25, 45); // Rectángulo
      line(mouseX, mouseY + 10, mouseX + 25, mouseY + 10);
    }

    if (herramienta == 7) {
      rect(mouseX, mouseY, 35, 35, 10); // Semi cuadrado 
    }

    if (herramienta == 8) {
      ellipse(mouseX, mouseY, 20, 50); // Atomo
      ellipse(mouseX, mouseY, 50, 20);
    }

    if (herramienta == 9) { // Triangulo
      triangle(mouseX, mouseY+40 , mouseX, mouseY, mouseX + 40, mouseY + 40);
    }

  }
}