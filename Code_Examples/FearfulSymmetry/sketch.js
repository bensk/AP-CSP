var x = 0;
var y = 0;
var xdir = 1;
var ydir = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();

}

function draw() {
  
  noStroke();

  background('white');

  // original
  fill('#E32173')
  ellipse(x, y, 50, 50);
  // reflected over y axis
  fill('#7F1AE5')
  ellipse(windowWidth - x, y, 50, 50);
  // relfected over x axis
  fill('#00C9B6')
  ellipse(x, windowHeight - y, 50, 50);
  // reflected through the origin
  fill('#FEF790')
  ellipse(windowWidth - x, windowHeight - y, 50, 50);
  x = x + 10 * xdir;
  y = y + 10 * ydir;
  if (x <= 0 || x >= windowHeight) {
    xdir = xdir * -1;
  }
  if (y <= 0 || y >= windowHeight) {
    ydir = ydir * -1;
  }

  if (keyIsPressed === true) {

    x = mouseX;
    y = mouseY;

  }
  // for (x = mouseX; x <= windowWidth - mouseX; x += 50) {
  // 	ellipse(x, mouseY, 50, 50)
  // }
  // for (y = mouseY; y <= windowHeight - 50; y += 50) {
  // 	ellipse(mouseX, y, 50, 50);
  // }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}