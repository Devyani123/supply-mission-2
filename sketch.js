var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 dustbin1=new dustbin(835,600,20,100,0);
	 dustbin3=new dustbin(965,595,20,90,0);
	 dustbin2=new dustbin(900,650,150,20,0);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  dustbin1.display();
  dustbin3.display()
  dustbin2.display()

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.setStatic(packageBody,false);
	 }
   }
   
   