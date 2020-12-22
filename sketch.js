
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stick;
var ball1,ball2,ball3,ball4,ball5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectMode(CENTER);
	stick=createSprite(360,200,250,20);
	ball1=new Ball(400,700,60);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ball1.display();
 
}



