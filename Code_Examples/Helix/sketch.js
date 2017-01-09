var x = 50;
var sliders = []
var angle = 0;

function setup() {
	// createCanvas(windowWidth,windowHeight);
	noCanvas();
	for (var i = 0; i < 400; i++) {
      
		sliders[i] = createSlider(0, 100, 50);
	}

	// slider.position(x,y);
	// slider.position(0,10);
	// slider.size(500);


}

function draw() {
	// var val = slider.value();
  var offset = 0;
	for (var i = 0; i < sliders.length; i++) {
		var x = map(sin(angle + offset), -1, 1, 0, 100);
		sliders[i].value(x); // set random value 
    
      offset += .1
	}
	// x = x + random(-5,5);
	// background(val);

	angle += .1;
}