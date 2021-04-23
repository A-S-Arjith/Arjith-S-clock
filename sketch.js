var hr, mn, sc, scAngle, mnAngle, hrAngle
function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES)
}

function draw() {
  background(0, 0, 0);

  translate(200, 200);
  rotate(-90);

  // textSize(30);
  fill("red");
  hr = hour();
  // text('Current hour:' + hr%12, 5, 50);
  mn = minute();
  // text('Current minute:' + mn, 5, 80);
  sc = second();
  // text('Current second:' + sc, 5, 110);

  scAngle = map(sc, 0, 60, 0, 360);
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();


  mnAngle = map(mn, 0, 60, 0, 360);
  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 80, 0);
  pop();


  hrAngle = map(hr % 12, 0, 12, 0, 360);
  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 60, 0);
  pop();


  stroke(255, 0, 255);
  point(0, 0)

  //drawing the arcs
  strokeWeight(10);
  noFill();
  //Seconds
  stroke(255, 0, 0);
  arc(0, 0, 300, 300, 0, scAngle);
  //Minutes
  stroke(0, 255, 0);
  arc(0, 0, 280, 280, 0, mnAngle);
  //Hour
  stroke(0, 0, 255);
  arc(0, 0, 260, 260, 0, hrAngle);

  drawSprites();
}