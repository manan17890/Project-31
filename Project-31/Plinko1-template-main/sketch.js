var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var particle;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 80; k <=160; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 160; k <=240; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 240; k <=320; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 320; k <=400; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 400; k <=480; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 480; k <=560; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 560; k <=640; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 640; k <=720; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 720; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create fixed plinko 
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,65));
  }
  for (var j = 20; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,125));
  }
  for (var j = 30; j <=width+10; j=j+50) 
  {
    plinkos.push(new Plinko(j,185));
  }
  for (var j = 60; j <=width+10; j=j+50) 
  {
    plinkos.push(new Plinko(j,245));
  }
  for (var j = 20; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,305));
  }
  for(var i = 0;i < particles.length;i++){
    particles[i].display();
  }

  //create particle objects
  
    
}
 


function draw() {
  background("lightgreen");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }
  
  //display the plinkos 
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var i = 0 ; i < particles.length , i++ ;) {

    particles[j].display();
  }

}