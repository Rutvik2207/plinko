function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
var particles=[];
var plinko=[];
var ground=[];

var groundHeight=300
   for(var k=0; k<=width; k=k+80){
     ground.push(new Ground(k,height-groundHeight/2,10,groundHeight ));
   }


function draw() {
  background(255,255,255);  
  drawSprites();
}