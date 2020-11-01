var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  for (var j=40, j <=width; j=J+50)
  {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j=15, j <=width-10; j=J+50)
  {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j=40, j <=width-20; j=J+50)
  {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j=15, j <=width-30; j=J+50)
  {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j=0, j < particles.length; j++)
  {
    particles[j].display();
  }

  for (var k=0, j < particles.length; k++)
  {
    particles[k].display();
  }
}

for (var k=0; k<=width; k = k+80){
  divisions.push(new Divisions (k, hieght-divisionHeight/2, 10, divisionHeight));

}

for (var k=0; k<=width; k = k+80){
  plinkos.push(new Plinkos (k, hieght-divisionHeight/2, 10, divisionHeight));
}

for (var k=0; k<=width; k = k+80){
  particles.push(new Particles (k, hieght-divisionHeight/2, 10, divisionHeight));
}

if (frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
}