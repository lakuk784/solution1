
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground , wall;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 300);


	engine = Engine.create();
	world = engine.world;

    wall = new dustbin (800,250)

	ground= new rect1(500,270,1000,20)
	Engine.run(engine);

	ball= Bodies.circle(100,240,5)
	World.add(world,ball)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  
  fill ("red")
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20,20)
  
  wall .display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}
}


