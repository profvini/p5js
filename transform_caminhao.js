let graus = 1;
function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
}

function draw() {
  
  background(220);
  translate(-300+graus,0)

  //scale(-1,1)
  
 rect(390, 120, 145, 55);
 rect(480, 85, 55, 30);

 //square (x, y, size)
 square(435, 85, 30);


 //hexagono

  push()
    rectMode(CENTER)
    translate(420,195)
    rotate(graus) 
   rect(0, 0, 30, 30);
  pop()


  push()
    rectMode(CENTER)
    translate(557,195)
    rotate(graus) 
   rect(0, 0, 30, 30);
  pop()


 //retangulo trapezio?

 beginShape();

 vertex(540, 85);
 vertex(605, 110);
 vertex(605, 175);
 vertex(540, 175);

endShape(CLOSE);
  
  
  if(graus == 360)
    graus = 1;
  else
    graus++;
}
