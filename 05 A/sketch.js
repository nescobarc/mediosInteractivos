var y = -750; // Variables
var y1 = -300;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(180);

  if (hour() == 9 || hour() == 12 || hour() == 19) {
    if (second() < 1 && minute() < 1) {
      y = 0;
      y1 = 0;
    }
    ellipse(250, 250, 750, 750 + y); // Elipse
    y = y - 1;

    if (y <= -450) {
      y1 = y1 - 1;
    }

    ellipse(250, 250, 300, 300 + y1);
    if (y <= -750) {
      background(0);
      y = -750;
      y1 = -300;
    }
  } else if (hour() == 10 || hour() == 14 || hour() == 7) {
    background(0);

    y = y + 1;
    y1 = y1 + 1;
    if (y >= -450) {
      y1 = 0;
    }
    ellipse(250, 250, 750, 750 + y);
    ellipse(250, 250, 300, 300 + y1);


    push();
    translate(width / 2, height / 2);
    rotate((second() * 6) - 90)
    line(0, 0, 80, 0);
    pop();

    push();
    translate(width / 2, height / 2);
    rotate((minute() * 6) - 90)
    stroke(194, 82, 184)
    line(0, 0, 60, 0);
    pop();

    push();
    translate(width / 2, height / 2);
    rotate((minute() / 2 + hour() * 30) - 90);
    line(0, 0, 40, 0);
    pop();
  } else {
    y = 0;
    y1 = 0;
    strokeWeight(2);

    ellipse(250, 250, 300, 300);

    push();
    translate(width / 2, height / 2); // Segundero
    rotate((second() * 6) - 90)
    stroke(194, 82, 184)
    line(0, 0, 80, 0);
    pop();

    push();
    translate(width / 2, height / 2); // Minutos
    rotate((minute() * 6) - 90)
    stroke(117, 249, 81)
    line(0, 0, 60, 0);
    pop();

    push();
    translate(width / 2, height / 2);
    rotate((minute() / 2 + hour() * 30) - 90) // Hora
    stroke(6, 76, 245)
    line(0, 0, 40, 0);
    pop();
  }

}