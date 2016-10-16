var strokeColor = 'black';
weight = 5;



function setup() {
	createCanvas(windowWidth, windowHeight);
	textStyle('italic')
	textSize(12)
	text("b for black⚫", 10, 12)
	text("p for pink 💟", 10, 24)
	text("r for maroon 🖍", 10, 36)
	text("u for purple 💜", 10, 48)
	text("e for eraser ➖", 10, 60)
	textStyle('bold');
	textSize(36);
	text("Drawing App v1.0",windowWidth-310,36)
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
	setup();
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
