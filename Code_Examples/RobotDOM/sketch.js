var x
var y
var speed
var slider;

function setup() {
  createCanvas(windowWidth, windowHeight)
  x = windowWidth/2
  y = 30
  speed = 3
    // create a slider we can drag, from -30 to 30 and starting at 0
  slider = createSlider(-30, 30, 0);
  // set the position of the slider on the screen
  slider.position(windowWidth / 2-90, 90);
  // set the size of the slider
  slider.style('width', '180px');
}

function draw() {
  // We need to make a variable for the slider's value...
  var speed = slider.value();
  background('white')
  textSize(32)
  text("🤖", x, y)
  // ... so that we can move the robot
  x = x + speed
}