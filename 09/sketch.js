var Gata = []; //GATOS
var Gato = [];
var Gatita = 0;

var Perra; // PERROS
var Perro;
var Perrito = 0;

var Ratona = []; // RATONES
var Raton = [];
var Ratoncito = 0;

var Pajaro = []; // PAJAROS
var Pajara = [];
var Pajarito = [];

var Carro; // CARRO

var im;
var p = 0;
function preload() {
  im = loadImage('Casa.jpg');
}

function setup() {
  createCanvas(600, 600);

  
  for (i = 0; i <= 2; i = i + 1) {
  	Gata[i] = new Gatos(1);
  }
    
  for (i = 0; i <= 1; i = i + 1) {
    Gato[i] = new Gatos(2);
  }

  Perra = new Perros(1);
  Perro = new Perros(2);

  for (i = 0; i <= 3; i = i + 1) { //RATONES
    Raton[i] = new Ratones(2);
  }

  for (i = 0; i <= 2; i = i + 1) {
    Ratona[i] = new Ratones(1);
  }
  
	Pajara[0] = new Pajaros(3);
  
  for (i = 1; i <= 2; i = i + 1) { //PAJAROS 
    Pajara[i] = new Pajaros(1);
  }

  for (i = 0; i <= 3; i = i + 1) {
    Pajaro[i] = new Pajaros(2);
  }

  Carro = new Carros(1);

}

function draw() {
  background(im)
  image(im);

  
  //Gatos
  
    for (i = 0; i < Gata.length; i = i + 1) {
  Gata[i].dibujarse(); // GATO se Dibuja
  Gata[i].moverse();
    }

  for (i = 0; i < Gato.length; i = i + 1) {
    Gato[i].dibujarse(); // GATO se mueve
    Gato[i].moverse();
  }

  if (Gatita != 0) {
    Gatita.dibujarse();
    Gatita.moverse();
    Gatita.crecer();
  }

  if (dist(Gata.x, Gata.y, Gato.x, Gato.y) <= 30 && Gatita == 0) { // Si se acercan nace Gatita
    Gatita = new Gatos(1);
  }

  //PAJAROS
  for (i = 0; i < Pajara.length; i = i + 1) { //Numerosos Pajaros
    Pajara[i].dibujarse(); // Pajaro se Dibuja
    Pajara[i].moverse();
  }

  for (i = 0; i < Pajaro.length; i = i + 1) {
    Pajaro[i].dibujarse(); // Pajaro se mueve
    Pajaro[i].moverse();
  }
	
  if (Pajarito != []) {
  for( i = 0; i < Pajarito.length; i = i+1){
    Pajarito[i].dibujarse();
    Pajarito[i].moverse();
    Pajarito[i].crecer();
  }
  }
  
  for(i = 0; i <Pajaro.length; i++){
    if (dist(Pajara[0].x, Pajara[0].y, Pajaro[i].x, Pajaro[i].y) < 30 && p < 2) { // Si se acercan nace Pajarito
      Pajarito[p] = new Pajaritos(1);
      p = p+1;
    }
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

  if (Ratoncito != 0) {
    Ratoncito.dibujarse();
    Ratoncito.moverse();
    Ratoncito.crecer();
  }

  if (dist(Ratona.x, Ratona.y, Raton.x, Raton.y) < 30 && Ratoncito == 0) { // Reproducción PRATONES
    Ratoncito = new Ratones(1);
  }

  Perra.dibujarse(); // PERRO se Dibuja
  Perra.moverse();
  Perro.dibujarse(); // PERRO se mueve
  Perro.moverse();
  if (Perrito != 0) {
    Perrito.dibujarse();
    Perrito.moverse();
    Perrito.crecer();
  }

  if (dist(Perra.x, Perra.y, Perro.x, Perro.y) < 30 && Perrito == 0) { // Reproducción PERROS
    Perrito = new Perritos(1);
  }

  if (mouseIsPressed == true) {
    Perro.x = mouseX;
    Perro.y = mouseY;
  }
	
  
  for (i = 0; i < Gato.length; i = i + 1) { // GATO Comerse RATON
    for (j = 0; j < Raton.length; j = j + 1) {
      if (dist(Raton[j].x, Raton[j].y,Gato[i].x, Gato[i].y) < 30) {
        Raton.splice(j,1);
  //      print("gato come raton");
      }
    }
  }
  
  for ( i = 0; i < Gato.length; i = i + 1) { // GATO Comerse RATON
    for ( j = 0; j < Ratona.length; j = j + 1) {
      if (dist(Gato[i].x, Gato[i].y, Ratona[j].x, Ratona[j].y) < 30) {
        Ratona.splice(j, 1);
      }
    }
  }
}

// Especie Gato

function Gatos(_genero) {
  this.x = random(0, width); //Posición
  this.y = random(250, height);
  this.tamaño = 30; // Tamaño GATOS
  this.genero = _genero;

  //Habilidades GATO

  this.dibujarse = function() {
    noStroke();

    if (this.genero == 1) {
      fill(197, 155, 110);
    } else {
      fill(151, 107, 64);
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
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    if (this.x >= width) {
      this.x = 0;
    }
    this.crecer = function() {
      this.tamaño += 1;
    }
  }
}
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
    
    ellipse(this.x - 20, this.y , 10, 20); //Orejas
    ellipse(this.x + 20, this.y , 10, 20);
    
    fill(0);
    ellipse(this.x, this.y + 2, 10, 5);

  }

  this.moverse = function() { // Movimiento de los PERROS

    if (dist(this.x, this.y, Carro.x, Carro.y) >= 60) { // PERRO persiguiendo CARRO
      this.x = this.x + random(-1, 0);
      this.y = this.y + random(-1, 1);
    } else {
      this.x = this.x + random(-4, 0);
      this.y = this.y + random(-1, 1);
    }
    if (this.x >= width + 50) {
      this.x = 0;
    }
    if (this.x < -40) {
      this.x = width;
    }
    this.crecer = function() {
      this.tamaño += 1;
    }
  }
}

function Perritos(_genero) {
  this.x = random(0, width); //Posición PERRITOS
  this.y = random(200, height);
  this.tamaño = 20; // Tamaño PERRITOS
  this.genero = _genero;

  //Habilidades PERRITOS
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
    
    ellipse(this.x - 20, this.y , 10, 20); //Orejas
    ellipse(this.x + 20, this.y , 10, 20);
    
    fill(0);
    ellipse(this.x, this.y + 2, 10, 5);

  }

  this.moverse = function() { // Movimiento PERRITOS
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    if (this.y >= height + 50) {
      this.y = 0;
    }
    if (this.y < -40) {
      this.y = height;
    }
  }

  this.crecer = function() {
    if (this.tamaño < 40) {
      this.tamaño += 0.1;
    }
  }
}

// CARROS
function Carros(_genero) {
  this.x = random(0, width); //Posición Carro
  this.y = random(250, height);
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
    this.x = this.x + random(-4, 0);
    this.y = this.y + random(-1, 1);
    if (this.x >= width + 50) {
      this.x = 0;
    }
    if (this.x < -40) {
      this.x = width;
    }
  }
}
//RATONES
function Ratones(_genero) {
  this.x = random(0, width); //Posición RATON
  this.y = random(250, height);
  this.tamaño = 20; // Tamaño RATON
  this.genero = _genero;

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
    this.x = this.x + random(-1, 2);
    this.y = this.y + random(-1, 1);
    if (this.x >= width + 50) {
      this.x = 0;
    }

    if (this.x < -40) {
      this.x = width;
    }
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
    }else if(this.genero == 3){
      stroke(250, 222, 222);           //Pajara fertil
  	}else {
      stroke(0);
    }
    strokeWeight(3);
    noFill();
    arc(this.x, this.y, this.tamaño - 10, this.tamaño - 15, PI, PI); // PAJAROS CUERPO
    arc(this.x + 30, this.y, this.tamaño - 10, this.tamaño - 15, PI, PI);

  }

  this.moverse = function() { // Movimiento PAJAROS
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-2, 1);
    if (this.y >= height + 50) {
      this.y = 0;
    }
    if (this.y < -40) {
      this.y = height;
    }
  }
}

// PAJARITOS 
function Pajaritos(_genero) {
  this.x = random(0, width); //Posición PAJARITOS
  this.y = random(250, height);
  this.tamaño = 20; // Tamaño PAJARITOS
  this.genero = _genero;

  //Habilidades PAJAROS
  this.dibujarse = function() {
    noStroke();
    if (this.genero == 1) {
      stroke(0);
    } else {
      stroke(0);
    }
    strokeWeight(3);
    noFill();
    arc(this.x, this.y, this.tamaño - 10, this.tamaño - 15, PI, PI); // PAJAROS CUERPO
    arc(this.x + 30, this.y, this.tamaño - 10, this.tamaño - 15, PI, PI);
  }

  this.moverse = function() { // Movimiento PAJAROS
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-2, 1);
    if (this.y >= height + 50) {
      this.y = 0;
    }
    if (this.y < -40) {
      this.y = height;
    }
  }

  this.crecer = function() {
    if (this.tamaño < 40) {
      this.tamaño += 0.1;
    }
  }
}