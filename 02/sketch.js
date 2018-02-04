 var posX = 80;
 var posY = 90;
 var negro = (40,40,40);

function setup() { 
  createCanvas(1000, 600);
  background(206,193,166);
  
  noStroke();
  
  for ( x=80; x<120; x= x +32){ // Rectángulos Negros 1
   for ( y=90; y<220; y=y +110){
     fill (negro);
     rect(x,y,30,108);
}
}
  for ( i = 1; i<=6; i ++){ // Rectángulos Rojos 1
  fill (177,69,51);
   rect(142,posY,64,19);
    posY = posY + 36;     
}
 posY = 90 
    for ( i = 1; i<=6; i ++){ // Rect Cafés 1
  fill (75,52,39);
   rect(206,posY,64,19);
    posY = posY + 36;     
} 
   posY = 109
    for ( i = 1; i<=6; i ++){ // Rect Café Claro 1
  fill (180,171,141);
   rect(206,posY,64,17);
    posY = posY + 36;     
} 
    for ( x=270; x<304; x= x +32){ // Rectángulos Negros 2
   for ( y=90; y<220; y=y +110){
     fill (negro);
     rect(x,y,30,108);
}
}
   posY = 90 
    for ( i = 1; i<=6; i ++){ // Rect Cafés 2
  fill (75,52,39);
   rect(332,posY,64,19);
    posY = posY + 36;     
} 
   posY = 109
    for ( i = 1; i<=6; i ++){ // Rect Café Claro 2
  fill (180,171,141);
   rect(332,posY,64,17);
    posY = posY + 36;     
} 
      for ( x=396; x<430; x= x +32){ // Rectángulos Negros 3
   for ( y=90; y<220; y=y +110){
     fill (negro);
     rect(x,y,30,108);
}
}
  posY = 90
    for ( i = 1; i<=6; i ++){ // Rectángulos Rojos 2
  fill (177,69,51);
   rect(458,posY,64,19);
    posY = posY + 36;     
} 
     posY = 90 
    for ( i = 1; i<=6; i ++){ // Rect Cafés 3
  fill (75,52,39);
   rect(522,posY,64,19);
    posY = posY + 36;     
} 
   posY = 109
    for ( i = 1; i<=6; i ++){ // Rect Café Claro 3
  fill (180,171,141);
   rect(522,posY,64,17);
    posY = posY + 36;     
} 
    posY = 90
    for ( i = 1; i<=6; i ++){ // Rectángulos Rojos 3
  fill (177,69,51);
   rect(586,posY,64,19);
    posY = posY + 36;     
} 
  for ( x=650; x<683; x= x +32){ // Rectángulos Negros 4
   for ( y=90; y<220; y=y +110){
     fill (negro);
     rect(x,y,30,108);
}
} 
       posY = 90 
    for ( i = 1; i<=6; i ++){ // Rect Cafés 4
  fill (75,52,39);
   rect(712,posY,64,19);
    posY = posY + 36;     
} 
  
   posY = 109
    for ( i = 1; i<=6; i ++){ // Rect Café Claro 4
  fill (180,171,141);
   rect(712,posY,64,17);
    posY = posY + 36;     
} 
      posY = 90
    for ( i = 1; i<=6; i ++){ // Rectángulos Rojos 4
  fill (177,69,51);
   rect(776,posY,64,19);
    posY = posY + 36;     
} 
   posY = 325
  for ( i = 1; i<=6; i ++){ // Rectángulos Rojos 1.1
  fill (177,69,51);
   rect(80,posY,64,19);
    posY = posY + 36;     
} 
  posY = 325 
    for ( i = 1; i<=6; i ++){ // Rect Cafés 1.1
  fill (75,52,39);
   rect(142,posY,64,19);
    posY = posY + 36;     
} 
   posY = 308
    for ( i = 1; i<=6; i ++){ // Rect Café Claro 1.1
  fill (180,171,141);
   rect(142,posY,64,17);
    posY = posY + 36;     
} 
  
  strokeWeight (3);
  stroke (negro);
  line (236,307,236,522); //Vertical
  line (206,415,269,415); //Horizontal
  
  noStroke(0);
  
     posY = 325
  for ( i = 1; i<=6; i ++){ // Rectángulos Rojos 1.2
  fill (177,69,51);
   rect(270,posY,64,19);
    posY = posY + 36;     
} 
  posX =334;
  for ( i = 1; i<=3; i ++){
  strokeWeight (3);
  stroke (negro);
    line (posX,415,posX+60,415);
  	posX = posX + 190;
  }   
    posY =410;
  	posX = 365;
  for ( i = 1; i<=3; i ++){
  strokeWeight (3);
  stroke (negro);
    line (posX,307,posX,posY+110);
  	posX = posX + 190; 
  }  
  noStroke();
       posY = 325
  for ( i = 1; i<=6; i ++){ // Rectángulos Rojos 1.3
  fill (177,69,51);
   rect(396,posY,64,19);
    posY = posY + 36;     
} 
    posY = 325 
    for ( i = 1; i<=6; i ++){ // Rect Cafés 1.2
  fill (75,52,39);
   rect(460,posY,64,19);
    posY = posY + 36;     
} 
   posY = 308
    for ( i = 1; i<=6; i ++){ // Rect Café Claro 1.2
  fill (180,171,141);
   rect(460,posY,64,17);
    posY = posY + 36;     
} 
      posY = 325 
    for ( i = 1; i<=6; i ++){ // Rect Cafés 1.3
  fill (75,52,39);
   rect(586,posY,64,19);
    posY = posY + 36;     
} 
   posY = 308
    for ( i = 1; i<=6; i ++){ // Rect Café Claro 1.3
  fill (180,171,141);
   rect(586,posY,64,17);
    posY = posY + 36;     
} 
         posY = 325
  for ( i = 1; i<=6; i ++){ // Rectángulos Rojos 1.3
  fill (177,69,51);
   rect(650,posY,64,19);
    posY = posY + 36;     
} 
        posY = 325 
    for ( i = 1; i<=6; i ++){ // Rect Cafés 1.4
  fill (75,52,39);
   rect(776,posY,64,19);
    posY = posY + 36;     
} 
   posY = 308
    for ( i = 1; i<=6; i ++){ // Rect Café Claro 1.4
  fill (180,171,141);
   rect(776,posY,64,17);
    posY = posY + 36;     
}  
}