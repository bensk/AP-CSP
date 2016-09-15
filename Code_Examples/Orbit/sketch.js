function setup() {
  createCanvas(windowWidth, windowHeight)
x= windowWidth/2+.4*windowHeight
y= windowHeight/2

}


function draw() {
  background('white')
  text("Mouse: " + mouseX + ", " + mouseY,0,10)
  text("Window: " + windowWidth + ", "  + windowHeight, 0, 20)
  
  ellipse(windowWidth / 2, windowHeight / 2, .8 * windowHeight, .8 * windowHeight)
  strokeWeight(5)
  // point(windowWidth/2+.4*windowHeight,)
  angleMode(DEGREES)
  rotate(2*PI*mouseX/windowHeight);
  point(x,y)
 

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}