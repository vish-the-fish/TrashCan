const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground;
var dustbin; 
function preload(){
    dustbin = loadImage("dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,570,200,20);
    box2 = new Box(910,510,20,100);
    
    box3 = new Box(1090,510,20,100);

    paper = new Paper(200,200);
    ground = new Ground(600,height,1200,20);
    
}

function draw(){
    background(255);
    Engine.update(engine);
    box1.display();
    box2.display();
   
    box3.display();
   
    paper.display();
    ground.display();
    imageMode(CENTER);
   image(dustbin,1000,515,220,130);
}
function keyPressed(){
    if(keyCode == UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.postion,{x:85,y:-85})
    }
}