function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0,100,50);
  slider.position(0,0);
}

function draw() {
  background('white')
  s = slider.value()
  text(s,10,30);
}