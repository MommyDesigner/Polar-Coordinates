function setup(){
  createCanvas(540, 540);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  stroke(69, 72, 81, 40);
  //fill(69, 72, 81, 100);
  noFill();
}

function draw(){
  translate(width/2, height/2);

  background(110, 149, 11, 100);
  lines(100);
}


function lines(radius){
  let offset = map(mouseX, 0, width, 0, 360);
  let offset2 = map(mouseX, 0, width, 5, radius);
  rotate(offset);
  beginShape();
  for(let theta = 0; theta < 720; theta += 0.2){
    let x = offset2 * tan(4*theta) * cos(theta);
    let y = offset2 * tan(4*theta) * sin(theta);
    vertex(x,y);
  }
  endShape(CLOSE);


}




