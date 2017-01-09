var x = 50;
var slider;
var angle = 0;

function setup() {
	// createCanvas(windowWidth,windowHeight);
	noCanvas();
	
      
		slider = createSlider(0, 100, 50);
	

	// slider.position(x,y);
	// slider.position(0,10);
	// slider.size(500);


}

function draw() {
	// var val = slider.value();
  var offset = 0;
	
		var x = map(sin(angle + offset), -1, 1, 0, 100);
		slider.value(x); // set random value 
      offset += 0.3
	
	// x = x + random(-5,5);
	// background(val);

	angle += 0.05;
}