// Try moving your mouse...
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(mouseX, mouseY, mouseX-mouseY);
  println(mouseX)
  textSize(36);
text("The framerate is " + mouseX, mouseY, 30);
}