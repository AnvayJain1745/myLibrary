var fixedRect, movingRect;
var playRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  playRect = createSprite(400,500,100,50);
 playRect.shapeColor="orange";
 playRect.velocityY=-5;
  movingRect.velocityY = -7;
  fixedRect.velocityY = 4;
}

function draw() {
  background(0,0,0);  
  bounceOff(fixedRect,playRect)
  bounceOff(fixedRect,movingRect)
  bounceOff(movingRect,playRect)
  
  drawSprites();
}
