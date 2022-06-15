//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine,myworld;
var ground, ball;

function setup(){
    var canvas = createCanvas(1000,400);
   
    myengine = Engine.create();
    myworld = myengine.world;

    slope = Bodies.rectangle(490,-350,40,40,slopeOptions);
    World.add(myworld,slope);


    var slopeOptions = {
     isStatic : true
     
    }

    //Code for brown ground
    var ground_options ={
        isStatic: true, 
    }

    ground = Bodies.rectangle(600,390,1000,20,ground_options);
    World.add(myworld,ground);
    console.log(ground);


    // Code for yellow box
    var yellowBox_options ={
        isStatic: true,
        angle:-45
        
    }

    yellowBox = Bodies.rectangle(790,320,100,20,yellowBox_options);
    World.add(myworld,yellowBox);

    // Code for ball
    var ball_options ={
        restitution: 1.5
    }

   

     ball = Bodies.circle(790,100,20,
                          ball_options);
     World.add(myworld,ball);

    //BOXES
    block1 = Bodies.rectangle(400,200,20,20);
    World.add(myworld,block1);

    block2 = Bodies.rectangle(400,100,20,80);
    World.add(myworld,block2);

    block3 = Bodies.rectangle(340,200,100,100);
    World.add(myworld,block3);
    
    ball2 = Bodies.circle(350,100,10,ball_options);
    World.add(myworld,ball2);
  
    block4 =Bodies.rectangle(230,200,20,100);
    World.add(myworld,block4);

    block5 =Bodies.rectangle(130,200,20,100);
    World.add(myworld,block5);

    block6 = Bodies.rectangle(180,50,100,20);
    World.add(myworld,block6);

    block7 = Bodies.rectangle(180,0,20,100);
    World.add(myworld,block7);

    block8 = Bodies.rectangle(180,-50,100,20);
    World.add(myworld,block8);


    block9 = Bodies.rectangle(142,-100,20,100);
    World.add(myworld,block9);

    block10 = Bodies.rectangle(219,-100,20,100);
    World.add(myworld,block10);
}

function draw(){
    background("lightgreen");
    Engine.update(myengine);
    rectMode(CENTER);


    text("WAIT TILL END",500,100);
    

    fill("brown")
    rect(ground.position.x,ground.position.y,1200,20);
    
    
    fill("yellow")
    push();
    translate(yellowBox.position.x,yellowBox.position.y);
    rotate(-45);
    rectMode(CENTER);
    rect(0, 0, 100, 20);
    pop();
   
    fill("orange")
    push();
    translate(slope.position.x , slope.position.y)
    rectMode(CENTER);
    rect(0,0,40,40);
    pop();
 
    fill("blue");
    rect(block1.position.x,block1.position.y,20,20);
    rectMode(CENTER);

    fill("red");
    rect(block2.position.x,block2.position.y,20,80);
    rectMode(CENTER);

    fill("coral");
    rect(block3.position.x,block3.position.y,100,100);
    rectMode(CENTER);

    fill("red")
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    fill("cyan")
    ellipseMode(RADIUS);
    ellipse(ball2.position.x, ball2.position.y,20);

    fill("lightseagreen");
    rect(block4.position.x,block4.position.y,20,100);
    rectMode(CENTER);

    fill("magenta");
    rect(block5.position.x,block5.position.y,20,100);
    rectMode(CENTER);

    fill("lime");
    rect(block6.position.x,block6.position.y,100,20);
    rectMode(CENTER);

    
    fill("mediumspringgreen");
    rect(block7.position.x,block7.position.y,20,100);
    rectMode(CENTER);

     
    fill("lightpink");
    rect(block8.position.x,block8.position.y,100,20);
    rectMode(CENTER);


    fill("mediumseagreen");
    rect(block9.position.x,block9.position.y,20,100);
    rectMode(CENTER);

    fill("lightblue");
    rect(block10.position.x,block10.position.y,20,100);
    rectMode(CENTER);
}

