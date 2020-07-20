var bullet,wall;
var speed,weight,thickness;
 
 
function setup() {
  createCanvas(1600,400);
 
  speed = random(35,90);
  weight = random(400,1500);
  thickness = random(22,83)
 
   bullet = createSprite(100, 200, 100, 50);
   bullet.velocityX = speed;
   
  wall = createSprite(1200,200,thickness,height/2);
 
  wall.shapeColor = "black";
  bullet.shapeColor = "black"
 
 
}
 
function draw() {
  background(255,255,255);  
 
  if(hasCollided(wall, bullet)) {
      bullet.velocityX = 0; 
      var damage = (0.5 * weight * speed * speed)/(thickness*thickness*thickness)
       
        if(damage > 10) {
          wall.shapeColor = color(255,0,0);
  
        }

        if(damage < 10) {
         wall.shapeColor = color(0,255,0);
        }

      } 
 
 
  drawSprites();
}

function hasCollided(object1,object2) {
  object2RightEdge = object2.x + object2.width;
  object1LeftEdge =  object1.x;
  if(object2RightEdge >= object1LeftEdge) {
    return true;
  } 
  return false;
}