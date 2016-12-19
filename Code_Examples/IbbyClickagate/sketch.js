var score = 0;
var button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton("Click Me For A Million Dollars!");
  button.mousePressed(scoreup);
  button.mouseMoved(randomRectangle);
  button.position(random(width), random(height));
  background(50);
  noStroke();

}

function draw() {
  text(score + 1, 15, 15);
}

function randomRectangle() {
  button.position(random(width), random(height));
  background(random(255), random(255), random(255));


}

function scoreup() {
  score = score + 1
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}