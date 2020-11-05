var thickness,wall;


var bullet,speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(223,321)
	weight=random(30,52)
thickness=random(22,83)

	bulllet=createSprite(50, 200, 20,20,wieght,);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1500,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(hasCollided (bullet,wall))
  {
  	bullet.velocityX=0;
	  var damage=0.5 * weight * speed* speed(thickness*thickness*thickness)
  }
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
	}

	if(damage<10 && deformation>100)
	{
		wall.shapeColor=color(230,230,0);
	}

	
  
  
  drawSprites();
 
}



function hasCollided(lbullet,lwall)
{
	bulletRightEdge = lwall.x;
	if(bulletRightEdge>=wallLeftEdge)
{
return true
}
	
return false
}