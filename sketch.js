var bullet , wall ;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
 
  weight = random(500,1000);
  speed = random(10,50);
 thickness = random(10,50);

  bullet = createSprite(200, 200,30,10);
  bullet.shapeColor = "grey"; 
  bullet.velocityX = speed;
 
 wall = createSprite(1500,200,thickness,height/2);
 wall.shapeColor = "black";
 wall.width = thickness;

 
 

} 

function draw(){

  background("lightblue");

  if(wall.x- bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
   var deformation =   Math.round(0.5*weight*bullet.velocityX*bullet.velocityX/2250);
   if(deformation < 50){
     bullet.shapeColor = "green";
     console.log("<100")
   }
  if(deformation >50 && deformation < 100){
   bullet.shapeColor = "yellow";
   console.log(">100&<180")
 }
  if(deformation>100){
   bullet.shapeColor = "red";
   console.log(">180")
 }
 if(collided(bullet,wall)){
   var damage = 0.5*weight*bullet.velocityX*bullet.velocityX/(wall.width*wall.width*wall.width);

   if(damage < 5){
wall.shapeColor = "green";
   }
    if(damage > 5){
     wall.shapeColor = "red";
   }
 
} 
  }
drawSprites();
}
function collided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}
