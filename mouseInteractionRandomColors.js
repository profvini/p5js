let cor = 0;
let t=0;

function setup() {
  createCanvas(300, 400);
  //Dimensões do Canvas
  //print("Alt "+height)
  //print("Largura" + width)
  
  //desabilita a visualização do cursor
  noCursor()
  
  //background(220);
}

function draw() { 
  background(220);
  //Posições do Mouse
  //print("Mouse X,Y:" + mouseX + ", "+ mouseY)
  
  //Esfera no centro da tela
  fill(cor)
  ellipse(width/2,height/2, 20, 20)
  
  //Esferas relativas as posicoes do mouse
  ellipse(width/2,height/2, t, t)
  ellipse(mouseX-20, 84, 33, 33); 
  
  //Esferas que seguem o mouse
  ellipse(mouseX,mouseY, 20, 20)
  ellipse(mouseX+20, 15, 33, 33); 
  
  line(mouseX, mouseY, pmouseX, pmouseY);
  
  
  //ellipse(random(0, width), random(0, height), random(10, 50), random(10, 50));
 
  if(frameCount%10==0)
    {
      cor = color(random(0,255),random(0,255),random(0,255))
      t = random(10,50)
    }
    
  
  //Exercicios
  //1. Desenhe um retangulo e mude a cor dele quando o mouse estiver dentro dele

  //2.Desenhe um retangulo e mude a cor dele quando o mouse estiver dentro dele e o usuario clicar

  //3.Divida o canvas em 4 quadrantes. Faça com que o quadrante em que o mouse estiver seja pintado de uma cor diferente

  //4.Divida o canvas em 4 quadrantes. Faça com que o quadrante em que o mouse estiver seja pintado de uma cor diferente quando o usuario clicar
}

function mouseClicked()
{
  
  //Se a cor esta branca, fica preta ou ao contrario
  /*if (cor == 0)
    cor = 255; 
  else
    cor = 0;*/
  
  //cor = random(0,255)
  //cor = color(random(0,255),random(0,255),random(0,255))
  //print (cor)
  
}
