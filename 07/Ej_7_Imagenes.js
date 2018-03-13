var Atardecer;
var Rayos;
var Nubes;
var Estrellas;

function preload(){
  Atardecer = loadImage('assets/Atardecer.jpg');
  Nubes = loadImage('assets/Nubes.jpg');
  Rayos = loadImage('assets/Rayos.jpg');
  Estrellas = loadImage('assets/Estrellas.jpg');
}

function setup() {
 createCanvas(600, 600);
  
}

function draw() {
  background(255, 255, 255);
  
   noTint();
   image(Atardecer, -150, -50);
   
   image(Estrellas, 300, -50);
   
   image(Rayos, -50, 300);
    
   image(Nubes, 300, 300);
   
   filter(INVERT);
 
}