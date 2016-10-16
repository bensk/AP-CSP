var strokeColor = 'black';
weight = 5;



function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {

	if (mouseIsPressed) {
		strokeWeight(weight)
		stroke(strokeColor);
		// strokeWeight(abs(mouseY-pmouseY)/(mouseX-pmouseX))

		line(pmouseX, pmouseY, mouseX, mouseY);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}



function keyTyped() {
	if (key === 'b') {
		strokeColor = 'black';
		weight = 5;
	} else if (key === 'p') {
		strokeColor = '#E32173';
		weight = 5;
	} else if (key === 'r') {
		strokeColor = '#890424';
		weight = 5;
	} else if (key === 'u') {
		strokeColor = '#7E2BE1';
		weight = 5;
	} else if (key === 'e') {
		strokeColor = 'white';
		weight = 50;
	} else if (key === '+') {
		weight = weight + 10;
	} else if (key === '=') {
		weight = weight - 10;
	}
}