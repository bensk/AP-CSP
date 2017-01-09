

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke()
var x = 25;
var y = 25;
  background('white');
  while (x < windowWidth) {
    // ellipse(x,windowHeight/2,50,50);
    // ellipse(x,windowHeight/2,mouseY-x,mouseX-x);
    // fill(x-75,x-150,x-225);
    fill(x-mouseY, x-mouseX, 128);
    ellipse(x, windowHeight / 2, 50, mouseX - x);
    ellipse(windowWidth/2, y, mouseY-y, 50);
    x = x + 25;
    y = y + 25;
  }
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}