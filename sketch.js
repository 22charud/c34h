
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, apple, appleimg
var engine, backgroundd, backgroundimg 
var wind


function preload() {

  backgroundd = loadImage("background.png")
  apple = loadImage("apple.png")
  wind = loadImage("baloon2.png")

}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;
  apple = Bodies.rectangle(200,100,200,100,{isStatic:false});
  World.add(world,apple);
  wind = Bodies.rectangle(200,100,200,200,{isStatic:false})
  World.add(world,wind);


  

  
  


  
}


function draw() 
{
  background(181);
  Engine.update(engine);

  rect(apple.position.x,apple.position.y, 20,20)
  push();
  imageMode(CENTER);
  rect(wind.position.x,wind.position.y, 20,20)

}

