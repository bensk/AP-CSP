function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {
	background(0);
	for (var y = windowHeight/20; y <= height; y += windowWidth/10) {
		for (var x = windowWidth/20; x <= width; x += windowWidth/10){
			fill(255,140);
			ellipse(x,y,windowHeight/10,windowHeight/10);
		}
	}
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}