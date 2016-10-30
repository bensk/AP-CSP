function setup() {
	createCanvas(windowWidth, windowHeight);
	input = createInput()
	input.position(10, 10)
}

function draw() {
	textAlign('right')
	textSize(24);

	background('white');
	var number = int(input.value());
	var num = number.toString(2);

	if (num >= 0) {
		textFont('sans-serif')
		text('In decimal ' + number + ' is', windowWidth-10, 50);
		textFont('courier');
		text(num.toString(2), windowWidth-10, 80);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}