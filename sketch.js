const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var maxSnow = 100;

function preload(){
  bgImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1300,700);
  engine = Engine.create();
  world = engine.world;
  
  if (frameCount % 90 === 0) {
    particles.push(new Particles((random(width / 2 + 320, width / 2 - 320)), 0, 10, 10));
  }
}

function draw() {
  background(bgImg);

  Engine.update(engine);
  
  for (var m = 0; m < maxSnow; m++) {
    console.log("Particles Displayed")
    particles[m].display()
  }
  
  drawSprites();
}