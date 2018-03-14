var im;               //Variables
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
var mascara;
var Mascara;
var filtro = 5;


function preload(){ // Imagenes
 
im = loadImage('assets/Jirafa.jpg');
mascara = loadImage('assets/Burbujas.png');
Mascara = loadImage('assets/Jirafa.jpg');
}

function setup() {
  
createCanvas(650,650);
Mascara.mask(mascara);
}

function draw() {
  if(filtro == 5){
  image(im, 0, 100, 450, 450);
  }
  fill(255, 255, 255);
  stroke(0, 0, 0);
  
  rect(10, 30, 60, 60);

  rect(80, 30, 60, 60); // Cuadros Filtros

  rect(150, 30, 60, 60);

  rect(220, 30, 60, 60); // Reset
  
if (mouseIsPressed) {
    if (mouseX > BRx && mouseX < BRx + tamaño && mouseY > By && mouseY < By + tamaño) {
      filtro = 0;
    }

    if (mouseX > BCux && mouseX < BCux + tamaño && mouseY > By && mouseY < By + tamaño) {
      filtro = 1;
    }

    if (mouseX > BLx && mouseX < BLx + tamaño && mouseY > By && mouseY < By + tamaño) {
      background(255);
      image(Mascara,0,100,450,450); 
      filtro = 4;
    }

    if (mouseX > BLIx && mouseX < BLIx + tamaño && mouseY > By && mouseY < By + tamaño) {
      filtro = 3;
    }
}

    //filtros

    if (filtro == 0) {      //Borroso
      for (var f = mouseY - 20; f < mouseY + 20; f = f + 10) {
        for (var c = mouseX - 20; c < mouseX + 20; c = c + 10) {
          var colSel = get(c, f);
          fill(colSel);
          noStroke();
          rect(c, f, 10, 50);
          rect(10, 30, 60, 60);
        }
      }
    }

    if (filtro == 1) {
      for (var f = mouseY - 10; f < mouseY + 10; f = f + 1) {
        for (var c = mouseX - 10; c < mouseX + 10; c = c + 1) {
          var colSel = get(c, f);
          var azul = blue(colSel);
          fill(azul);
          noStroke();
          rect(c, f, 1, 1);
          rect(80, 30, 60, 60);
        }
      }
    }

    
    if(filtro == 3){
      image(im, 0, 100, 450, 450);  //Burbujas
    }

}