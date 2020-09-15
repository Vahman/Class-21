var move,fixed,object,object1
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 300, 50, 50);
  move=createSprite(400,100,50,50);
  fixed.shapeColor="green"
  move.shapeColor="blue"
  move.velocityY=5
  fixed.velocityY=-5
  object=createSprite(300,300,50,50);
  object1=createSprite(300,200,50,50);
  object.shapeColor="green"
object1.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  object.y=World.mouseY
  object.x=World.mouseX
  if(isTouching(fixed,move)){
move.shapeColor="red"
fixed.shapeColor="purple"
  }
else{
move.shapeColor="green"
fixed.shapeColor="green"
}
if(isTouching(object,object1)){
  object1.shapeColor="red"
  object.shapeColor="purple"
    }
  else{
  object1.shapeColor="green"
  object.shapeColor="green"
  }
bounce(move,fixed);
  drawSprites();
}

