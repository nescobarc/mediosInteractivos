function setup() { 
  createCanvas(900,600);
  background(229,223,214);
  
  noStroke();
  fill(219,212,128);
  ellipse(400,340,280,280); //Circulo Amarillo
  
  
  strokeWeight(1);
  stroke(0,0,0);
  fill(212,168,142);
  ellipse(390,330,210,210); //Circulo Naranja
  
  strokeWeight(1);
  stroke(0,0,0);
  fill(55,95,146);
  ellipse(380,320,160,160); //Circulo Azul
	
	strokeWeight(5);
  stroke(0,0,0);
  line(0,350,520,50); //1
  
  strokeWeight(4);
  line(50,560,480,150); //2
  
  strokeWeight(6);
  line(680,0,570,350); //3
  
  strokeWeight(5); 
  line(460,120,780,120); //Horizontal
  line(470,190,800,190); //Horizontal
  
  noFill();
  strokeWeight(3);
  arc(800, 100, 200, 200,PI, PI);
  stroke(211, 172, 169);
  arc(800, 100, 194, 194,PI, PI);

  stroke(0,0,0);
  strokeWeight(3); 
  fill(127, 149, 77);
  quad(42, -10, 80, 10, 45, 60, 5, 45); // Verde
  fill(15, 15, 17);
  quad(0, 43, 45, 60, 30, 90, 0, 75); //Negro
  fill(243, 231, 222);
  quad(-20, -20, 42, -10, 4, 43, -20, 30); // Rosado

  strokeWeight(15);
  line(860, 90, 900, 60);
	
}