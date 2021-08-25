let angulo = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  push()
  translate(50,50)
  fill(255,0,0);
  rect(0,0, 100, 50);
  pop()

  push()
  translate(200,50)
  fill(255,0,0);
  scale(3.5, 2)
  rect(0,0, 30, 30);
  pop()
  
  push()
  rectMode(CENTER) // muda o pivô para o centro
  translate(150, 150); // mudar a origem momentaneamente
  rotate(angulo);
  fill(0,0,255);
  rect(0,0, 100, 50);
  pop()
  
  push();
  strokeWeight(10);
  point(150,150);
  pop();
  
  angulo++;

}
