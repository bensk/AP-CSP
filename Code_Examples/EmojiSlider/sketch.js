var x
var y
var speed
var slider;

function setup() {
  createCanvas(windowWidth, windowHeight)
  x = windowWidth / 2
  y = 30
  speed = 3
    // create a slider we can drag, from -30 to 30 and starting at 0
  slider = createSlider(-30, 30, 0);
  // set the position of the slider on the screen
  slider.position(windowWidth / 2 - 90, 90);
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
  if (y<=50) {
    x = x + 1*speed
  } if (x>=windowWidth-50){
    y = y+1*speed
  }
}

// if x is greater than or equal to windowWidth, 
// y should increase x stays the same
// if y is greater than or equal to windowHeight, 
// y should stays the same, x decreases
// x stays the same, y decreases

// x gets bigger, y stays the same
// y gets bigger, x stays the same
// x gets smaller, y stays the same
// y gets smaller, x stays the same