var datos;
var posX = 50;
var posY = 50;

function preload() {
  datos = loadTable('assets/Turismo.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1000, 1000);
  background(0, 0, 0);

  print(datos.rows.length);
  print(datos.columns.length);

  print(datos);
  for (var r = 0; r < 1; r++) { 

  }
}

function draw() {
  background(0,0,0);

  //print(datos.rows.length);
  //print(datos.columns.length);

  //print(datos);
  
  posX = 50;
  posY = 90;

  for (var r = 0; r < datos.getRowCount()-1; r++) { 
      var hotel = datos.getString(r, "Razón Social ó Nombre");
       if (hotel[0] == 'H') {
          print(hotel);
         var RNT = parseInt(datos.getString(r, "RNT"));
         if(RNT >= 40000){
           //3 trianglulos
          stroke(255,255,255);
          noFill();
          triangle(posX,posY, posX +30, posY - 50, posX+55, posY);      //HOTELES Mayor flujo de gente
          triangle(posX,posY+20, posX +30, posY - 30, posX+55, posY + 20);
          triangle(posX,posY+40, posX +30, posY - 10, posX+55, posY + 40);
          triangle(posX,posY+60, posX +30, posY + 10, posX+55, posY + 60);
          fill(255,0,0);
          textSize(10)
          textFont('Arial')
          stroke(255, 0, 0);
          text(hotel, posX, posY + 50);
          posX=posX+100
          
          if (posX >width - 50){
            posX = 50;
            posY = posY + 150;
          }
          
         }else if(RNT >= 30000){
           noFill();
           stroke(255)
         triangle(posX,posY, posX +30, posY - 50, posX+55, posY);
         triangle(posX,posY+20, posX +30, posY - 30, posX+55, posY + 20);
         triangle(posX,posY+40, posX +30, posY - 10, posX+55, posY + 40);
         fill(255,0,0);
         stroke(255, 0, 0)
         text(hotel, posX, posY + 35);
          posX=posX+100
               if (posX >width - 50){
            posX = 50;
            posY = posY + 150;
          }
         }
         else if(RNT >= 20000){
           noFill();
           stroke(255)
         triangle(posX,posY, posX +30, posY - 50, posX+55, posY);
         triangle(posX,posY+20, posX +30, posY - 30, posX+55, posY + 20);
         fill(255,0,0);
         stroke(255, 0, 0)
         text(hotel, posX, posY + 20);
          posX=posX+100
               if (posX >width - 50){
            posX = 50;
            posY = posY + 150;
          }
         }
         else{                                                     //HOTELES Menor flujo de gente
        noFill();
        stroke(255)
         triangle(posX,posY, posX +30, posY - 50, posX+55, posY);
         fill(200,0,0);
         stroke(255, 0, 0)
         text(hotel, posX, posY + 10);
          posX=posX+100
               if (posX >width - 50){
            posX = 50;
            posY = posY + 150;
          }
         } 
      }
  }
}
