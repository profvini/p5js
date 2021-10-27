function setup() {
  createCanvas(710, 400, WEBGL);
}

function draw() {
  background(220);
  normalMaterial();
  
  translate(-250,-100,0)
  push()
    rotateX(frameCount *0.01)
    rotateY(frameCount *0.01)
    rotateZ(frameCount *0.01)
    plane(70);
  pop()
  
  translate(250, 0, 0)
  push()
    rotateX(frameCount *0.01)
    rotateY(frameCount *0.01)
    rotateZ(frameCount *0.01)
    box()
  pop()
  
  translate(250, 0, 0)
  push()
    rotateX(frameCount *0.01)
    rotateY(frameCount *0.01)
    rotateZ(frameCount *0.01)
    cylinder(50, 30)
  pop()
  
  translate(-500, 200, 0)
  push()
    rotateX(frameCount *0.01)
    rotateY(frameCount *0.01)
    rotateZ(frameCount *0.01)
    cone(50,70)
  pop()
  
  translate(160, 0, 0)
  push()
    rotateX(frameCount *0.01)
    rotateY(frameCount *0.01)
    rotateZ(frameCount *0.01)
    torus(40,15)
  pop()
  
  translate(160, 0, 0)
  push()
    rotateX(frameCount *0.01)
    rotateY(frameCount *0.01)
    rotateZ(frameCount *0.01)
    sphere(40)
  pop()
  
  translate(160,0, 0)
  push()
    rotateX(frameCount *0.01)
    rotateY(frameCount *0.01)
    rotateZ(frameCount *0.01)
    ellipsoid(30, 60, 20)
  pop()
  
  
}
