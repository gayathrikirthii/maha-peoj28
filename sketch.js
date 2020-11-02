
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//list of errors for your reference. now it is working.
// launcher.js - point A in display() funciton is not defined
// sketch.js line no 6 error it is not matter.body
// check line no 115 in sketch.js
// function name is mousedragged and mousereleased it is not stonedragged it is a default function and we cannot use a custom name for it
var stoneobj, treeobj, boy, groundobj, mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var launcherobj;
var launchingForce=100;

function preload()
{
	
boy = loadImage("boy.png")
	
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

groundobj = new ground(width/2,600,width,20)
treeobj = new tree(1050,580);
stoneobj = new stone(235, 420, 30);

mango1 = new mango(1100,100,30);
mango2 = new mango(1000,130,30);
mango3=new mango(1050,180,30);
mango4=new mango(990,58,30);
mango5=new mango(1100,55,30);
mango6=new mango(970,230,30);
mango7=new mango(900,200,40);
mango8=new mango(1140,170,40);
mango9=new mango(1220,230,40);
mango10=new mango(1200,150,30)

launcherobj	= new launcher(stoneobj.body,{x:235,y:420})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(233);
  
textSize(20);
text("Press Space to get a second Chance to Play!!",50 ,50);
image(boy ,200,340,200,300);

groundobj.display()
treeobj.display()
stoneobj.display()

mango1.display()
mango2.display()
mango3.display()
mango4.display()
mango5.display()
mango6.display()
mango7.display()
mango8.display()
mango9.display()
mango10.display()

launcherobj.display();

detectollision(stoneobj,mango1);
  detectollision(stoneobj,mango2);
  detectollision(stoneobj,mango3);
  detectollision(stoneobj,mango4);
  detectollision(stoneobj,mango5);
  detectollision(stoneobj,mango6);
  detectollision(stoneobj,mango7);
  detectollision(stoneobj,mango8);
  detectollision(stoneobj,mango9);
  detectollision(stoneobj,mango10);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneobj.body, {x:235, y:420}) 
	  launcherobj.attach(stoneobj.body);
	}
  }

  function mouseDragged()
  {

    Matter.Body.setPosition(stoneobj.body, {x:mouseX, y:mouseY}) 

  }
  
  function mouseReleased()
  {
    
    launcherobj.fly();
    
  }

  function detectollision(lstone,lmango){
    
      mangoBodyPosition=lmango.body.position
      stoneBodyPosition=lstone.body.position
      //stoneBodyPosition.log("collided");
      //MattyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    
      if(distance<=lmango.r+lstone.r)
      {

        Matter.Body.setStatic(lmango.body,false);

      }
  
    }



