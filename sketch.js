const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball1,ball2,ball3,ball4,ball5;
var sling1,sling2,sling3,sling4,sling5;

function setup(){
createCanvas(windowWidth / 2, windowHeight / 1.5);
engine = Engine.create();
world = engine.world;

ground = new Ground (370,590,900,20);
ball1 = new Pendulum(160,300,70,70)
ball2 = new Pendulum(210,300,70,70)
ball3 = new Pendulum(280,300,70,70)
ball4 = new Pendulum(320,300,70,70)
ball5 = new Pendulum(370,300,70,70)
sling1 = new Sling(ball1.body,{x:160 , y:100})
sling2 = new Sling(ball2.body,{x:230 , y:100})
sling3 = new Sling(ball3.body,{x:290 , y:100})
sling4 = new Sling(ball4.body,{x:360 , y:100})
sling5 = new Sling(ball5.body,{x:430 , y:100})

}

function draw(){
background("black")
Engine.update(engine);

ground.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{ x: mouseX, y: mouseY});
}