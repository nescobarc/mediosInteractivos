var estado = 0;
var Intro = 1;
var Juego = 2;
var Ganar = 3;
var Perder = 4;
var Instrucciones = 5

var Gata = []; //GATOS

var Perra = []; // PERROS
var Perro = [];

var Ratona = []; // RATONES
var Raton = [];
var Ratoncito = [];
var dientes = [];
var numero = 4;

var Pajaro = []; // PAJAROS
var Pajara = [];

var Carro; // CARRO

var im;
var p = 0;

var portada;
var mordido = false;
var contador = 5;
var instrucciones;

var tiempo = 30;

var ganar = 0;
var perder = 0;
function preload() {
  im = loadImage('Casa1.jpg');
  portada = loadImage('Portada Gato.jpg');
  instrucciones = loadImage('Instrucciones.jpg');

}

function setup() {

  estado = Intro;

  createCanvas(windowWidth, windowHeight);

  for (i = 0; i <= 0; i = i + 1) {
    Gata[i] = new Gatos(1);
  }

  for (i = 0; i <= 1; i = i + 1) {
    Perro[i] = new Perros(2);
  }

  for (i = 0; i <= 2; i = i + 1) {
    Perra[i] = new Perros(1);
  }

  for (i = 0; i <= 6; i = i + 1) { //RATONES
    Raton[i] = new Ratones(2);
  }

  for (i = 0; i <= 4; i = i + 1) {
    Ratona[i] = new Ratones(1);
    dientes[i] = false;
  }

  Pajara[0] = new Pajaros(3);

  for (i = 1; i <= 2; i = i + 1) { //PAJAROS 
    Pajara[i] = new Pajaros(1);
  }

  for (i = 0; i <= 2; i = i + 1) {
    Pajaro[i] = new Pajaros(2);
  }

  Carro = new Carros(1);

}

function draw() {
  if (estado == Intro) {
    background(portada);
		for (i = 0; i <= 4; i = i + 1) { //RATONES
    	Raton[i] = new Ratones(2);
  	}
		 
  	for (i = 0; i <= 2; i = i + 1) {
    	Ratona[i] = new Ratones(1);
    	dientes[i] = false;
  	}
    
    for (i = 0; i < Gata.length; i = i + 1) {
    	Gata[i].x = width/2; //Posición
  	Gata[i].y = height/2;
    }
    Carro.x = width; //Posición Carro
    Carro.y =height - 60;
    perder = 0;
    ganar = 0;
  } else if (estado == Instrucciones) {
    background(instrucciones);

  } else if (estado == Juego) {
    background(im);
    //Gatos

    for (i = 0; i < Gata.length; i = i + 1) {
      Gata[i].dibujarse(); // GATO se Dibuja
      Gata[i].moverse();
    }

    //PAJAROS
    for (i = 0; i < Pajara.length; i = i + 1) { //Muchos Pajaros
      Pajara[i].dibujarse(); // Pajaro se Dibuja
      Pajara[i].moverse();
    }

    for (i = 0; i < Pajaro.length; i = i + 1) {
      Pajaro[i].dibujarse(); // Pajaro se mueve
      Pajaro[i].moverse();
    }

    Carro.dibujarse(); // CARRO se Dibuja
    Carro.moverse();

    //Ratones
    for (i = 0; i < Ratona.length; i = i + 1) {
      Ratona[i].dibujarse(); // RATONA se Dibuja
      Ratona[i].moverse();
    }

    for (i = 0; i < Raton.length; i = i + 1) {
      Raton[i].dibujarse(); // RATON se mueve
      Raton[i].moverse();
    }

    for (i = 0; i < Ratoncito.length; i = i + 1) {
      Ratoncito[i].dibujarse();
      Ratoncito[i].moverse();
      Ratoncito[i].crecer();
    }

    for (i = 0; i < Ratona.length; i = i + 1) {
      for (j = 0; j < Raton.length; j = j + 1) {
        if (dist(Ratona[i].x, Ratona[i].y, Raton[j].x, Raton[j].y) < 30 && dientes[i] == false) { // Reproducción RATONES
          for (m = 0; m < numero; m = m + 1) {
            Ratoncito[m] = new Ratones(1);
          }
          numero = numero + 4;
          dientes[i] = true;
        }
      }
    }

    for (i = 0; i < Perra.length; i = i + 1) {
      Perra[i].dibujarse(); // PERRA se Dibuja
      Perra[i].moverse();
    }
    for (i = 0; i < Perro.length; i = i + 1) {
      Perro[i].dibujarse(); // PERRO se Dibuja
      Perro[i].moverse();
    }

    for (i = 0; i < Gata.length; i = i + 1) { // GATO Comerse RATON
      for (j = 0; j < Raton.length; j = j + 1) {
        if (dist(Raton[j].x, Raton[j].y, Gata[i].x, Gata[i].y) < 20) {
          Raton.splice(j, 1);
        }
      }
    }

    for (i = 0; i < Gata.length; i = i + 1) { // GATO Comerse RATON
      for (j = 0; j < Ratona.length; j = j + 1) {
        if (dist(Gata[i].x, Gata[i].y, Ratona[j].x, Ratona[j].y) < 20) {
          Ratona.splice(j, 1);
        }
      }
    }

    for (i = 0; i < Gata.length; i = i + 1) { // GATO Comerse RATON
      for (j = 0; j < Ratoncito.length; j = j + 1) {
        if (dist(Gata[i].x, Gata[i].y, Ratoncito[j].x, Ratoncito[j].y) < 30) {
          Ratoncito.splice(j, 1);
        }
      }
    }

    //Mueren todos los ratones
    if (Ratoncito.length == 0 && Raton.length == 0 && Ratona.length == 0) {
      estado = Ganar;
    }

    //Perro muerde gata
    for (i = 0; i < Gata.length; i = i + 1) {
      for (j = 0; j < Perro.length; j = j + 1) {
        if (dist(Gata[i].x, Gata[i].y, Perro[j].x, Perro[j].y) < 30) {
          mordido = true;
        }
      }
    }

    //Perra muerde gata
    for (i = 0; i < Gata.length; i = i + 1) {
      for (j = 0; j < Perra.length; j = j + 1) {
        if (dist(Gata[i].x, Gata[i].y, Perra[j].x, Perra[j].y) < 30 && mordido == false) {
          mordido = true;
        }
      }
    }

    for (i = 0; i < Gata.length; i = i + 1) {
      if (dist(Gata[0].x, Gata[0].y, Carro.x, Carro.y) < 40) {
        estado = Perder;
      }
    }
    //Segundos en forma regresiva si gata es mordida 
    if (mordido == true && frameCount % 60 == 0) {
      contador = contador - 1;
    }

    //deja de estar mordido
    if (contador == 0) {
      contador = 5;
      mordido = false;
    }

    //Segundos que quedan de estar mordido 
    if (mordido == true) {
      fill(255, 0, 0, 100);
      noStroke();
      textSize(200);
      text(contador, width / 2, height / 1.5);
    }

    if (frameCount % 60 == 0 && tiempo > 0) { //Tiempo total Juego
      tiempo = tiempo - 1;
    }
    //Tiempo 
    fill(255);
    rect(width / 2 - 20, 15, 40, 30);
    fill(0);
    textSize(30);
    textAlign(CENTER);
    text(tiempo, width / 2, 40);

    //Pierdes si tiempo llega a 0
    if (tiempo == 0) {
      estado = Perder;
    }
    /*
    if (mouseIsPressed == true && mordido == false) {
      Gata[0].x = mouseX;
      Gata[0].y = mouseY;
    }
*/
  } else if (estado == Ganar) { //Ganar Juego
    background(0);
    fill(255);
    text("¡You Won!", width / 2, height / 2);

  } else {
    background(0);
    fill(255);
    text("Game Over", width / 2, height / 2); //Perder Juego

  }
}

function touchMoved(){
	if(estado == Juego && mordido == false){
    for (i = 0; i < Gata.length; i = i + 1) {
    	Gata[i].x = touches[0].x;
    	Gata[i].y = touches[0].y;
    }
  }
	function mouseDragged(){
	return false;
}
}

function mouseDragged(){
	return false;
}
//Cambio de estados en el iPad;
function touchEnded(){
	if(estado == Intro){
  	estado = Instrucciones;  
  }else if(estado == Instrucciones){
  	estado = Juego;  
  }else if(estado == Ganar && ganar == 1){
  	estado = Intro;  
  }else if (estado == Perder && perder == 1){
  	estado = Intro;  
  }
  
  //Evitar que pase INTRO
  if (estado == Perder && perder == 0){
  	perder = 1;  
  }
  
  if (estado == Ganar && ganar == 0){
  	ganar = 1;  
  }
}
// Especie Gato
function Gatos(_genero) {
  this.x = width/2; //Posición
  this.y = height/2;
  this.tamaño = 30; // Tamaño GATOS
  this.genero = _genero;

  //Habilidades GATO
  this.dibujarse = function() {
    noStroke();

    if (this.genero == 1) {
      fill(197, 155, 110);
    }

    ellipse(this.x, this.y, this.tamaño, this.tamaño);
    stroke(0);
    strokeWeight(0.5);
    ellipse(this.x, this.y + 10, this.tamaño - 5, this.tamaño + 20); // Cuerpo
    ellipse(this.x + 5, this.y + 35, this.tamaño - 20, this.tamaño - 20); // Patas
    ellipse(this.x - 5, this.y + 35, this.tamaño - 20, this.tamaño - 20);

    triangle(this.x - 14, this.y - 6, this.x - 13, this.y - 18, this.x - 4, this.y - 14); //Orejas
    triangle(this.x + 14, this.y - 6, this.x + 13, this.y - 18, this.x + 4, this.y - 14);
    ellipse(this.x, this.y, this.tamaño, this.tamaño);
    line(this.x + 2, this.y, this.x + 10, this.y + 2); //Bigotes
    line(this.x - 2, this.y, this.x - 10, this.y + 2);
    line(this.x + 2, this.y, this.x + 10, this.y - 2);
    line(this.x - 2, this.y, this.x - 10, this.y - 2);
    fill(0);
    ellipse(this.x + 4, this.y - 7, this.tamaño - 27, this.tamaño - 27); // Ojos
    ellipse(this.x - 4, this.y - 7, this.tamaño - 27, this.tamaño - 27);

    noFill();
    stroke(0);
    curve(this.x + 170, this.y - 20, this.x + 30, this.y - 20, this.x + 30, this.y + 15, this.x, this.y + 20); //Cola Gatos
    curve(this.x + 30, this.y - 20, this.x + 30, this.y + 15, this.x + 12, this.y + 20, this.x + 20, this.y + 20);

  }

  this.moverse = function() { // Movimiento de GATO
    this.x = this.x
    this.y = this.y
  }
}

/*
  this.arrastrarse = function() {
    this.x = mouseX;
    this.y = mouseY;
  }
  */

// PERROS
function Perros(_genero) {
  this.x = random(0, width); //Posición PERROS
  this.y = random(250, height);
  this.tamaño = 40; // Tamaño PERROS
  this.genero = _genero;

  //Habilidades PERROS

  this.dibujarse = function() {
    noStroke();

    if (this.genero == 1) {
      fill(105, 77, 60);
    } else {
      fill(67, 52, 43);
    }
    stroke(0);
    strokeWeight(0.5);

    ellipse(this.x, this.y + 25, this.tamaño + 5, this.tamaño);
    ellipse(this.x, this.y, this.tamaño, this.tamaño); //PERRO

    ellipse(this.x + 8, this.y + 40, this.tamaño - 20, this.tamaño - 20); // Patas
    ellipse(this.x - 8, this.y + 40, this.tamaño - 20, this.tamaño - 20);

    fill(0);
    ellipse(this.x + 4, this.y - 7, this.tamaño - 35, this.tamaño - 35); // Ojos
    ellipse(this.x - 4, this.y - 7, this.tamaño - 35, this.tamaño - 35);

    fill(235, 154, 155);
    ellipse(this.x, this.y + 10, this.tamaño - 27, this.tamaño - 16); //Lengua

    fill(190, 163, 114);
    ellipse(this.x, this.y + 5, this.tamaño - 15, this.tamaño - 25);

    ellipse(this.x - 20, this.y, 10, 20); //Orejas
    ellipse(this.x + 20, this.y, 10, 20);

    fill(0);
    ellipse(this.x, this.y + 2, 10, 5);

  }

  this.moverse = function() { // Movimiento de los PERROS
    this.x = this.x + 4;
    if (this.x >= width + 50) {
      this.x = 0;
      this.y = random(0, height - 20);
    }

    this.crecer = function() {
      this.tamaño += 1;
    }
  }
}

// CARROS
function Carros(_genero) {
  this.x = width; //Posición Carro
  this.y =height - 60;
  this.tamaño = 40; // Tamaño CARRO
  this.genero = _genero;

  //Habilidades carro

  this.dibujarse = function() {
    noStroke();

    if (this.genero == 1) {
      fill(100, 0, 0);
    } else {
      fill(0);
    }
    stroke(0);
    strokeWeight(0.5);
    fill(0);
    ellipse(this.x + 23, this.y + 62, 30, 30); // Llantas
    ellipse(this.x + 62, this.y + 62, 30, 30);

    fill(100, 20, 50);
    rect(this.x - 30, this.y + 20, this.tamaño + 10, this.tamaño);
    rect(this.x, this.y, this.tamaño + 45, this.tamaño + 20); // Cuerpo

  }

  this.moverse = function() { // Movimiento CARRO
    this.x = this.x + random(-8, -3);
    this.y = this.y + random(0, 0);
    if (this.x >= width + 50) {
      this.x = 0;
    }
    if (this.x < -40) {
      this.x = width;
      this.y = random(0, height - 20);
    }
  }
}
//RATONES
function Ratones(_genero) {
  this.x = random(0, width); //Posición RATON
  this.y = random(250, height);
  this.tamaño = 20; // Tamaño RATON
  this.genero = _genero;
  this.dirX = 6;
  this.dirY = 5;

  this.dibujarse = function() {
    noStroke();

    if (this.genero == 1) {
      fill(183, 172, 164);
    } else {
      fill(32, 30, 34);
    }
    stroke(0);
    strokeWeight(0.5);
    ellipse(this.x + 10, this.y - 10, this.tamaño - 3, this.tamaño - 3); // Orejas
    ellipse(this.x - 10, this.y - 10, this.tamaño - 3, this.tamaño - 3);
    ellipse(this.x, this.y, this.tamaño + 5, this.tamaño + 5); //Cabeza
    fill(130, 0, 0);
    ellipse(this.x + 4, this.y - 5, this.tamaño - 25, this.tamaño - 25); // Ojos
    ellipse(this.x - 4, this.y - 5, this.tamaño - 25, this.tamaño - 25);

    fill(240, 240, 240);
    rect(this.x + 1, this.y + 7, this.tamaño - 18, this.tamaño - 13); // Dientes
    rect(this.x - 2, this.y + 7, this.tamaño - 18, this.tamaño - 13);
  }

  this.moverse = function() { // Movimiento de los RATONES
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
    }

    if (this.y >= height || this.y <= 0) {
      this.dirY = -this.dirY;
    }
    this.x = this.x + (this.dirX);
    this.y = this.y + (this.dirY);
  }
  this.crecer = function() {
    if (this.tamaño <= 20) {
      this.tamaño += 1;
    }
  }
}

function Ratoncitos(_genero) {
  this.x = random(0, width); //Posición RATONCITOS
  this.y = random(250, height);
  this.tamaño = 20; // Tamaño RATONCITOS
  this.genero = _genero;
  this.dirX = 1;
  this.dirY = 1;

  this.dibujarse = function() {
    noStroke();

    if (this.genero == 1) {
      fill(183, 172, 164);
    } else {
      fill(32, 30, 34);
    }
    stroke(0);
    strokeWeight(0.5);
    ellipse(this.x + 10, this.y - 10, this.tamaño - 3, this.tamaño - 3); // Orejas
    ellipse(this.x - 10, this.y - 10, this.tamaño - 3, this.tamaño - 3);
    ellipse(this.x, this.y, this.tamaño + 5, this.tamaño + 5); //Cabeza
    fill(130, 0, 0);
    ellipse(this.x + 4, this.y - 5, this.tamaño - 25, this.tamaño - 25); // Ojos
    ellipse(this.x - 4, this.y - 5, this.tamaño - 25, this.tamaño - 25);

    fill(240, 240, 240);
    rect(this.x + 1, this.y + 7, this.tamaño - 18, this.tamaño - 13); // Dientes
    rect(this.x - 2, this.y + 7, this.tamaño - 18, this.tamaño - 13);
  }

  this.moverse = function() { // Movimiento de los RATONES
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
    }

    if (this.y >= height || this.y <= 0) {
      this.dirY = -this.dirY;
    }
    this.x = this.x + (this.dirX);
    this.y = this.y + (this.dirY);
  }
  this.crecer = function() {
    this.tamaño += 1;
  }
}

// PAJAROS  
function Pajaros(_genero) {
  this.x = random(0, width); //Posición PAJAROS
  this.y = random(250, height);
  this.tamaño = 40; // Tamaño PAJAROS
  this.genero = _genero;

  //Habilidades PAJAROS

  this.dibujarse = function() {
    noStroke();

    if (this.genero == 1) {
      stroke(250);
    } else if (this.genero == 3) {
      stroke(250, 222, 222); //Pajara Bonus
    } else {
      stroke(0);
    }
    strokeWeight(3);
    noFill();
    arc(this.x, this.y, this.tamaño - 10, this.tamaño - 15, PI, PI); // PAJAROS CUERPO
    arc(this.x + 30, this.y, this.tamaño - 10, this.tamaño - 15, PI, PI);

  }

  this.moverse = function() { // Movimiento PAJAROS
    this.x = this.x + random(0, 0);
    this.y = this.y + random(-2, 0);
    if (this.y >= height + 50) {
      this.y = 0;
    }
    if (this.y < -40) {
      this.y = height;
    }
  }
}
