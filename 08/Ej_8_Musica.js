var x= 40;
var y = 0;
var Sonido;
var Amplitud;
var Verde;
var Rojo;

function preload(){
  Sonido=loadSound('assets/Cancion.mp3');
}

function setup() {
  createCanvas(400, 400);
  Sonido.loop();
  amplitud = new p5.Amplitude();
}

function draw() {
  background(220);
  
  var nivel = amplitud.getLevel();
  nivel = map(nivel, 0.0, 1.0, 0, 60);
  
  var Rojo = amplitud.getLevel();
  Rojo = map(Rojo, 0.0, 1.0, 50, 150);
  
  var Verde = amplitud.getLevel();
  Verde = map(Verde, 0.0, 1.0, 150, 90);
  
  // Forma Central
  x = 47;
  y = 0;
  fill(Rojo*3, Verde, 0);
  for(i = 0; i<8;i++){

    line(300, 200, 300 + x + nivel, 200 + y + nivel); // Abajo Derecha
     ellipse(300 + x + nivel, 200 + y + nivel, 7);
    if( i >= 4){
      x += -7;
      y += 4.5;
    }else{
      x += -4.5;
      y += 7;
    }
  }
  
  for(i = 0; i<8;i++){
    line(300, 200, 300+ x - nivel, 200 + y + nivel); // Abajo Izquierda
    ellipse(300 + x - nivel, 200 + y + nivel, 7);
    if( i >= 4){
      x += -4.5;
      y += -7;
    }else{
      x += -7;
      y += -4.5;
    }   
  }
  
  for(i = 0; i<8;i++){
    line(300, 200, 300 + x - nivel, 200 + y - nivel); // Arriba Izquierda
    ellipse(300 + x - nivel, 200 + y - nivel, 7);
    if( i >= 4){
      x += 7;
      y += -4.5;
    }else{
      x += 4.5;
      y += -7;
    }
  }
  
  for(i = 0; i<8;i++){
    line(300, 200, 300 + x + nivel, 200 + y - nivel); // Arriba derecha
    ellipse(300 + x + nivel, 200 + y - nivel, 7);
    if( i >= 4){
      x += 4.5;
      y += 7;
    }else{
      x += 7;
      y += 4.5;
    }
  }
  
  //Forma Izquierda Arriba  
  x = 67;
  y = 0;
  for(i = 0; i<8;i++){
    line(100, 100, 100 + x + nivel, 100 + y + nivel); // Abajo Derecha
    ellipse(100 + x + nivel, 100 + y + nivel, 7);
    if( i >= 4){
      x += -10;
      y += 6.6;
    }else{
      x += -6.6;
      y += 10;
    }
  }
  
  for(i = 0; i<8;i++){
    line(100, 100, 100 + x - nivel, 100 + y + nivel); // Abajo Izquierda
     ellipse(100 + x - nivel, 100 + y + nivel, 7);
    if( i >= 4){
      x += -6.6;
      y += -10;
    }else{
      x += -10;
      y += -6.6;
    }
  }
  
  for(i = 0; i<8;i++){
    line(100, 100, 100 + x - nivel, 100 + y - nivel); // Arriba Izquierda
    ellipse(100 + x - nivel, 100 + y - nivel, 7);
    if( i >= 4){
      x += 10;
      y += -6.6;
    }else{
      x += 6.6;
      y += -10;
    }
  }
  
  for(i = 0; i<8;i++){
    line(100, 100, 100 + x + nivel, 100 + y - nivel); // Arriba derecha
    ellipse(100 + x + nivel, 100 + y - nivel, 7);
    if( i >= 4){
      x += 6.6;
      y += 10;
    }else{
      x += 10;
      y += 6.6;
    }
  }
  
  //Abajo Pequeño
  x = 35;
  y = 0;
  for(i = 0; i<8;i++){
    line(130, 350, 130 + x + nivel, 350 + y + nivel); // Abajo Derecha
    ellipse(130 + x + nivel, 350 + y + nivel, 7);
    if( i >= 4){
      x += -5;
      y += 3.3;
    }else{
      x += -3.3;
      y += 5;
    } 
  }
  
  for(i = 0; i<8;i++){
    line(130, 350, 130 + x - nivel, 350 + y + nivel); // Abajo Izquierda
    ellipse(130 + x - nivel, 350 + y + nivel, 7);
    if( i >= 4){
      x += -3.3;
      y += -5;
    }else{
      x += -5;
      y += -3.3;
    }
  }
  
  for(i = 0; i<8;i++){
    line(130, 350, 130 + x - nivel, 350 + y - nivel); // Arriba Izquierda
    ellipse(130 + x - nivel, 350 + y - nivel, 7);
    if( i >= 4){
      x += 5;
      y += -3.3;
    }else{
      x += 3.3;
      y += -5;
    }
  }
  
  for(i = 0; i<8;i++){
    line(130, 350, 130 + x + nivel, 350 + y - nivel); // Arriba derecha
    ellipse(130 + x + nivel, 350 + y - nivel, 7);
    if( i >= 4){
      x += 3.3;
      y += 5;
    }else{
      x += 5;
      y += 3.3;
    }
  }
}
