const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, groundObject;
var world;
var paper;

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  groundObject = new ground(width / 2, 670, width, 20);
  dustbinObj = new dustbin(1200, 650);
  console.log(width);

  paper = new Paper(100, 600);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(230);

  paper.display();
  groundObject.display();
  dustbinObj.display();

  text("Use LEFT and RIGHT arrows to move", 50, 50);

  if (keyDown(RIGHT_ARROW)) {
    Body.setVelocity(paper.body, { x: 10, y: -5 });
  }
  if (keyDown(LEFT_ARROW)) {
    Body.setVelocity(paper.body, { x: -10, y: -5 });
  }
}
