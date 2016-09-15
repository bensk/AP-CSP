function setup() {
  createCanvas(500, 500)
}

function draw() {
  background('white')
  textSize(24)
  text('Mouse X = ' + mouseX + " | Mouse Y = " + mouseY, 10, 20)
  strokeWeight(5)
  ellipse(250,350,250,250)
  ellipse(250,200,150,150)
  ellipse(250,120,100,100)
  line(325,192,411,166)
  line(411,166,192,500-mouseY)
  line(178,180,33,500-mouseY)
}