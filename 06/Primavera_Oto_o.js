var mx = 0.0;

function setup() {
  createCanvas(600, 500, WEBGL);
}

function draw() {
  background(150,150,150);

  //scale(0.5);
  //translate(mouseX-(width/2), mouseY-(height/2), 0);

  push();
  translate(0, 50, 0);
  rotateX(PI/2);
  fill(96 +(mx*0), 128 +(mx*-0.078), 37);
  plane(width*2, 1000);
  pop();



  push();
  rotateZ(PI);
  fill(91, 0, 0);
  cylinder(10, 80); // Arbol 2
  translate(0, 50, 0);
  fill(126 +(mx*0.145), 154 +(mx*-0.14), 47 +(mx*-0.0183));
  cone(50, 100);
  translate(0, 50, 0);
  fill(126 +(mx*0.161), 170 + (mx*-0.0816), 50 + (mx*0));
  cone(50, 100);
  translate(0, 50, 0);
  fill(126 +(mx*0.185), 180 +(mx*0.0166), 59 +(mx*0.0183));
  cone(50, 100); // Arriba
  pop();
  
  push();
  rotateZ(PI);
  fill(99, 40, 15);
  translate(110, 0, 130); 
  cylinder(10, 70); // Arbol 1
  translate(0, 50, 0);
  fill(51 +(mx*0.15), 94 +(mx*-0.075), 54 +(mx*-0.055));
  cone(50, 100); // Abajo
  translate(0, 50, 0);
  fill(58 +(mx*0.22), 116 +(mx*-0.021), 50 +(mx*0));
  cone(50, 100);
  translate(0, 50, 0);
  fill(68 +(mx*0.2866), 141 +(mx*0.0433), 49 +(mx*0.0233));
  cone(50, 100); // Arriba
  pop();
  
  push();
  fill(249, 215, 93);
  translate(200, 20, 0);
  sphere(5 - (mx*0.0083));// Centro Flor
  pop();
  
  push();
  fill (202, 45, 57);
  translate(186, 18, 0);
  sphere(7 - (mx*0.01166))// Petalo // Izquierda
  pop();

  push();
  fill (202, 45, 57);
  translate(194, 31, 0);
  sphere(7 - (mx*0.01166))// Petalo
  pop();
 
  push();
  fill (202, 45, 57);
  translate(210, 28, 0);
  sphere(7 - (mx*0.01166))// Petalo
  pop();
  
  push();
  fill (202, 45, 57);
  translate(213, 15, 0);
  sphere(7 - (mx*0.01166)) // Petalo
  pop();

  push();
  fill (202, 45, 57);
  translate(198, 8, 0);
  sphere(7 - (mx*0.01166))// Petalo
  pop();
  
   push();
  fill (34, 70, 22);
  translate(200, 35, 0);
  cylinder(1, 25); // Tallo 
  pop();
  
  push();
  fill (245, 202, 60);
  translate(200, -150, 0);
  sphere(25); // Sol
  pop();
  
  push();
  fill(249, 215, 93);
  translate(150, 20, 0);
  sphere(5 - (mx*0.0083)); // Centro Flor 2
  pop();
  
  push();
  fill (141, 38, 119);
  translate(136, 18, 0);
  sphere(7 - (mx*0.01166))// Petalo Izquierda 2
  pop();

  push();
  fill (141, 38, 119);
  translate(144, 31, 0);
  sphere(7 - (mx*0.01166))// Petalo 2
  pop();
 
  push();
  fill (141, 38, 119);
  translate(160, 28, 0);
  sphere(7 - (mx*0.01166))// Petalo 2
  pop();
  
  push();
  fill (141, 38, 119);
  translate(163, 15, 0);
  sphere(7 - (mx*0.01166))// Petalo 2
  pop();

  push();
  fill (141, 38, 119);
  translate(148, 8, 0);
  sphere(7 - (mx*0.01166))// Petalo 2
  pop();
  
   push();
  fill (34, 70, 22);
  translate(150, 35, 0);
  cylinder(1, 25); // Tallo 2
  pop();
  
    push();
  fill(249, 215, 93);
  translate(120, 20, 10);
  sphere(5 - (mx*0.0083)); // Centro Flor 4
  pop();
  
  push();
  fill (232, 138, 169);
  translate(106, 18, 10);
  sphere(7 - (mx*0.01166))// Petalo Izquierda 4
  pop();

  push();
  fill (232, 138, 169);
  translate(114, 31, 10);
  sphere(7 - (mx*0.01166))// Petalo 4
  pop();
 
  push();
  fill (232, 138, 169);
  translate(130, 28, 10);
  sphere(7 - (mx*0.01166))// Petalo 4
  pop();
  
  push();
  fill (232, 138, 169);
  translate(133, 15, 10);
  sphere(7 - (mx*0.01166))// Petalo 4
  pop();

  push();
  fill (232, 138, 169);
  translate(118, 8, 10);
  sphere(7 - (mx*0.01166))// Petalo 4
  pop();
  
   push();
  fill (34, 70, 22);
  translate(120, 35, 10);
  cylinder(1, 25); // Tallo 4
  pop();
  
    push();
  fill(249, 215, 93);
  translate(135, 30, 180);
  sphere(5 - (mx*0.0083)); // Centro Flor 3
  pop();
  
  push();
  fill (141, 38, 119);
  translate(121, 28, 180);
  sphere(7 - (mx*0.01166));// Petalo Izquierda 3
  pop();

  push();
  fill (141, 38, 119);
  translate(129, 41, 180);
  sphere(7 - (mx*0.01166))// Petalo 3
  pop();
 
  push();
  fill (141, 38, 119);
  translate(145, 38, 180);
  sphere(7 - (mx*0.01166))// Petalo 3
  pop();
  
  push();
  fill (141, 38, 119);
  translate(148, 25, 180);
  sphere(7 - (mx*0.01166))// Petalo 3
  pop();

  push();
  fill (141, 38, 119);
  translate(133, 18, 180);
  sphere(7 - (mx*0.01166))// Petalo 3
  pop();
  
   push();
  fill (34, 70, 22);
  translate(135, 55, 180);
  cylinder(1, 25); // Tallo 3
  pop();

  // ------- SU CODIGO AQUÍ ------- //


  // Actualiza a localización del marcador
  var dif = mouseX - mx;
  if (abs(dif) > 1.0) {
    mx = mx + dif/32.0;
  }
  // Mantiene el marcador en la pantalla
  mx = constrain(mx, 1, width-1);
  noStroke();
  
  // Rectángulo inferior
  push();
  fill(0, 0, 0);
  translate(0, (height/2)-2);
  plane(width, 5);
  pop();
  // Marcador de posición
  push();
  fill(0, 0 ,0);
  translate(mx-(width/2)-1, (height/2)-2);
  plane(4, 5);
  pop();
}
