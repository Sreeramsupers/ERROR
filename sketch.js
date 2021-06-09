var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var backImg,flakes,flakeImg

var flake = [];


function preload(){ 
  backImg = loadImage("images/snow1.jpg")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  

  
}

function draw() {
  background(backImg); 
  Engine.update(engine);

  // sno flake
  for (var j = 75; j <=width; j=j+50) { 
    flake.push(new Flakes(j,75));
  }

  
  
  drawSprites();
}
