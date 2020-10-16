const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;
var ground,stand1,stand2,box;


function setup() {
  createCanvas(800,400);

  engine = Engine.create(); 
  world = engine.world; 
  Engine.run(engine);

  ground = new Ground(400,390,800,30);
  stand1 = new Ground(390,300,200,30);
  stand2 = new Ground(100,300,200,30);
  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);

  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);

  box9 = new Box(390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new Slingshot(this.polygon,{x:100,y:200});
}

function draw() {
  background("brown");  

  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("green");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",600 ,350);
  
  ground.display();
  stand1.display();
  stand2.display();
  fill("pink");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  fill("purple");
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  slingshot.display();

  ellipseMode(RADIUS)
  ellipse(polygon.position.x,polygon.position.y,20,20);

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}