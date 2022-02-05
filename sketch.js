
let angle = 30;
let r = 200;

function setup() {
  createCanvas(540, 540);
  background(248, 150, 30);
}

function draw() {
  translate(200, 200);
  strokeWeight(24);
  stroke(77, 144,42);
  let x = r * cos(angle);
  let y = r * sin(angle);
  point(x, y);

  angle += 0.02;
  r -= 0.5;
}

function keyPressed() {
  noLoop();
}