const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1515, 725);


	

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(620,400, 70);
	bob2 = new Bob(690, 400, 70);
	bob3 = new Bob(760,400, 70);
	bob4 = new Bob(830, 400, 70);
	bob5 = new Bob(900,400, 70);

	ground = new Ground (757.5, 200, 500, 20);

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 0,
	    height:0,
	    wireframes: false
	  }
	});
	rope1= new Rope(bob1.body, ground.body, -70*2 ,0);
	rope2= new Rope(bob2.body, ground.body, -35*2 ,0);
	rope3= new Rope(bob3.body, ground.body, 0*2 ,0);
	rope4= new Rope(bob4.body, ground.body, 35*2 ,0);
	rope5= new Rope(bob5.body, ground.body, 70*2 ,0);
	
	 

  Engine.run(engine);
  // Render.run(render);
  
}


function draw() {
  rectMode(CENTER);


  background(255, 255, 153);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  ground.display();

  fill(255, 0, 225);
  textSize(50);
  textFont("joker");
  text("NEWTON'S CRADLE", width/2 - 235 , 75);
  text("Press 'UP' arrow to move the cradle", width/2 - 320 , 675);    
    
  
  
}

function keyPressed() { 
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-500,y:500});
   } 
} 