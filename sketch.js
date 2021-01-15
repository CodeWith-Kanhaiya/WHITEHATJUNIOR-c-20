var fixedRect, movingRect;
var fixedRect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect1 = createSprite(200,100,50,80);
  fixedRect1.shapeColor = "blue";
  fixedRect1.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red"; 
  }
  else if(movingRect,fixedRect1)            {
    movingRect.shapeColor = "turquoise";
    fixedRect1.shapeColor = "turquoise";  
 }
 else{
  movingRect.shapeColor = "maroon";
  fixedRect1.shapeColor = "maroon";
  fixedRect.shapeColor  = "maroon";  
 } 
  
  drawSprites();
}
function isTouching(movingRect,fixedRect) {
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    return true
}
else {
    return false
}
}
