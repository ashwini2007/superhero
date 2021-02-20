const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18
var backgroundImg, rope;
var hero, ground;
function preload() {
//preload the images here
backgroundImg = loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,400,1200,20);
 hero = new Superman(600,200,140,80)
 rope = new Rope(hero.body,{ x: 200, y:50});
 box1 = new Block(450,350,50,50);
 box2 = new Block(450,300,50,50);
 box3 = new Block(450,250,50,50);
 box4 = new Block(450,200,50,50);
 box5 = new Block(450,150,50,50);
 box6 = new Block(450,100,50,50);
 box7 = new Block(550,350,50,50);
 box8 = new Block(550,300,50,50);
 box9 = new Block(550,250,50,50);
 box10 = new Block(550,200,50,50);
 box11 = new Block(550,150,50,50);
 box12 = new Block(550,100,50,50);
 box13 = new Block(650,350,50,50);
 box14 = new Block(650,300,50,50);
 box15 = new Block(650,250,50,50);
 box16 = new Block(650,200,50,50);
 box17 = new Block(650,150,50,50);
 box18 = new Block(650,100,50,50);
 
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  hero.display();
  ground.display();
  rope.display();
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display() 
  box15.display()
  box16.display()
  box17.display()
  box18.display()


}


function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}
function mouseReleased(){
  rope.fly();
}