//figure 1
var waveLengthOne = 100.0;
var waveLengthTwo = 80.0;
var stopPoint = 440;

// figure 2
// var waveLengthOne = 90.0;
// var waveLengthTwo = 135.0;
// var stopPoint = 300;

// figure 3
// var waveLengthOne = 80.0;
// var waveLengthTwo = 160.0;
// var stopPoint = 200;


var pointCount = 0;
var angle = 0.0;
var amplitude = 200;

function setup(){
  createCanvas(540,540);
}
function draw(){
  background(30,160,160);

  noFill();
  strokeWeight(1);
  stroke(100);
  translate(width/2, height/2);
  createLissajousCurve(stopPoint);
}

function createLissajousCurve(stopPoint) {
 
beginShape();
  if(pointCount > stopPoint){
    noLoop();
  } 
  for(var i=0; i < pointCount; i++){
  angle = i / waveLengthOne * TWO_PI;
  var y = sin(angle)* amplitude;
  
  angle = i / waveLengthTwo * TWO_PI;
  var x = sin(angle)* amplitude;
  let opacity = map(x, 1, width, 100, 20);
  stroke(0,20,50,opacity);
  let weight = map(pointCount, 1, stopPoint, 0.5, 6);
  strokeWeight(weight);
  vertex(x,y); 
  }
endShape();
pointCount++;
}