var x
var y
var speed

var slider;


function setup() {
  createCanvas(windowWidth, windowHeight)
  x = 30
  y = 30
  speed = 3
  slider = createSlider(-30, 30, 5);
  slider.position(windowWidth / 2, windowHeight / 2);
  slider.style('width', '180px');

}

function draw() {

  var speed = slider.value();

  background('white')

  noStroke()

  textSize(24)

  text("Moving around the edge", windowWidth / 2, windowHeight / 2 - 32)

  text("Speed = " + speed + " | x=" + x + " | " + "y = " + y, windowWidth / 2, windowHeight / 2)
  textSize(32)
  text("🤖", x, y)
    // ellipse(x, y, 50, 50)
  if (y <= 30) {

    x = x + 1 * speed
  }
  if (y >= windowHeight - 10) {
    x = x - 1 * speed
  }
  if (x >= windowWidth - 40) {
    y = y + 1 * speed
  }
  if (x <= 5) {
    y = y - 1 * speed
  }
}

function keyTyped() {
  if (key == "=") {
    speed = speed + 5
  } else if (key == "-") {
    speed = speed - 5
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}