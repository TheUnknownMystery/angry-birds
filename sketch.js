//creating constants

const Engine = Matter.Engine;

const World  = Matter.World ;

const Bodies = Matter.Bodies;

//creating variables

var engine, world;

var box1,pig_1,log_1,box3,box4,pig_2,log_2;

function setup(){

    var canvas = createCanvas(1200,400);
    engine = Engine.create();

    world = engine.world;

    //ground object
    ground = new Ground(600,height,1200,20);

    //displaying objects 

    box1   = new Box(700,320,70,70);

    box2   = new Box(920,320,70,70);

    box3   = new Box(700,240,70,70);

    box4   = new Box(920,240,70,70);

    //pig object
    pig_1  = new pig(810,350);

    pig_2  = new pig(810,220);

    //log object
    log_1  = new Log(810,260,300,PI/2);

    log_2  = new Log(810,180,300,PI/2);

}

function draw(){

    background(0);
    Engine.update(engine);

 //console.log for position and angle

    console.log(box2.body.position.x);

    console.log(box2.body.position.y);

    console.log(box2.body.angle);

   //displaying objects

    //box
    box1.display();

    box2.display();

    box3.display();

    box4.display();

    //ground
    ground.display();
    //pig

    pig_1.display ();
    
    pig_2.display();

    //log
    log_1.display() ;

    log_2.display() ;

  
}