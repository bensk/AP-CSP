function setup() {
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  background('white')
  strokeWeight(100-(mouseY+pmouseY)/20)
  line(windowWidth/2,0,mouseX,mouseY)
  text(mouseX + ", " + mouseY,10,10)
}