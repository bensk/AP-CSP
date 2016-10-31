var xpos = 1;
var ypos = 1;
var xdir = 1;
var ydir = 1;
var speed = 42;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  textSize(72);
  text("🎃", xpos, ypos);
  xpos = xpos + xdir * speed;
  ypos = ypos + ydir * speed;
  if (xpos >= windowWidth - 12 || xpos <= 0) {
    xdir = xdir * -1;
  }
  if (ypos >= windowHeight - 12 || ypos <= 0) {
    ydir = ydir * -1;
  }
  fill('white')
  textSize(windowWidth/5);
  text("Happy Halloween", 0, windowHeight / 2, 150)
}