
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var GameState = "onBoy"
var mango1, mango2, mango3, mango4, mango5;
var stone1, boy1;
var connector1;
var tree1;
var ground1;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	stone1 = new stone(95,200,50,70)
	mango1 = new mango(Math.round(random(484, 750)),Math.round(random(354, 298)),60);
	mango2 = new mango(Math.round(random(491, 583)),Math.round(random(380, 242)),60);
	mango3 = new mango(Math.round(random(527, 705)),Math.round(random(389, 253)),60);
	mango4 = new mango(Math.round(random(542, 611)),Math.round(random(363, 223)),60);
	mango5 = new mango(Math.round(random(505, 578)),Math.round(random(401, 318)),60);
	tree1 = new tree(587,420,400,500)
  boy1 = new boy(307,568,300,300)
	ground1 = new ground(368, 675, 900, 50)
	connector1 = new connector(stone1.body, {x:210,y:490})
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(mouseX)
  drawSprites();
  
  connector1.showThis();
  stone1.display();
  tree1.display();
  mango1.show();
  mango2.show();
  mango3.show();
  mango4.show();
  mango5.show();
  boy1.display();
  ground1.display();
  
  

 
}

function mouseDragged()
{
  Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY})
}


 function mouseReleased()
  {
   connector1.fly();
   //GameState = "launched";
  }

 function keyPressed()
{
    if(keyCode === 32)
    {
       Matter.Body.setPosition(stone1.body, {x:235, y:420})
    }
}



