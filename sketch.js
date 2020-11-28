function setup() {
  createCanvas(1200,800);
 fixedRect=createSprite(400, 100, 50, 80);
 movingRect=createSprite(30, 100,80,30);
 fixedRect.shapeColor="green"
 movingRect.shapeColor="green"

 movingRect.velocityX = 5;
 fixedRect.velocityX = -5;
}

function draw() {
  background(0);  
  
  if(isTouching1(movingRect,fixedRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor="red"
   }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor="green"
   }
    bounceOff1(movingRect,fixedRect);
  
  drawSprites();
}
ffdfgkkv(&jjfhjkd)

TextTrackCueList;FocusNavigationEvent;



