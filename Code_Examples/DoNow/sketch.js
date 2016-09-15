var x = 0
var y = 500
var xDirection = 1
var yDirection = -1
speed = 10

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background('white')
  textSize(72)
  text("Classroom",x,y+200)

  text("Do Now", x, y)

  textAlign('center')
  textStyle('italic')
  textSize(18)
  x = x + xDirection * speed
  // y = y + yDirection * speed
  if (x >= windowWidth - 300 || x < 0) {
    xDirection = xDirection * -1
    if (y >= windowHeight  || y< 0) {
      yDirection = yDirection * -1
    }

  }
}