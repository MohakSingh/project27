
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var diameter=70;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob(400,350);
bob2 = new Bob(440,350);
bob3 = new Bob(360,350);
bob4 = new Bob(480,350);
bob5 = new Bob(320,350);
roof = new Roof();
rope1 = new Rope(bob1.body,roof.body,0,0);
rope2 = new Rope(bob2.body,roof.body,80,0);
rope3 = new Rope(bob3.body,roof.body,-80,0);
rope4 = new Rope(bob4.body,roof.body,160,0);
rope5 = new Rope(bob5.body,roof.body,-160,0);

}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine);

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display(); 
roof.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}



