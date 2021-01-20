var movingRect,fixedRect;
function setup() {
  createCanvas(800,600);
 movingRect =  createSprite(400, 200, 50, 80);
 movingRect.shapeColor ="green";
 movingRect.debug = true;
 fixedRect =  createSprite(400, 400, 80, 80);
 fixedRect.shapeColor ="green";
 fixedRect.debug = true;
}

function draw() {
  background("blue");
  movingRect.x = mouseX;
  movingRect.y = mouseY; 
  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
    movingRect.shapeColor ="red"; 
    fixedRect.shapeColor ="red";
  }
  else{
    movingRect.shapeColor ="green"; 
    fixedRect.shapeColor ="green";
  }
  drawSprites();
}