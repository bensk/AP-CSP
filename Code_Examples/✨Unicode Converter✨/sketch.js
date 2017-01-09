function setup() {
	createCanvas(windowWidth, windowHeight);
	input = createInput();
	input.position(10, 102);
}

function draw() {
	background('white');
	textAlign('left');

	textFont('VT323');
	textSize(48);

	text('✨Unicode Converter✨', 10, 72);
	var binary = input.value();
	if (windowWidth <= 768) {
		textSize(16);
	} else if (windowWidth <= 992) {
		textSize(20);
	} else {
		textSize(28);
	}
	textFont('monospace');
	var number = int(input.value());
	var output = "";
	var hex = "";
	for (var i = 0; i < binary.length; i++) {
		output += binary[i].charCodeAt(0).toString(2) + " ";
		hex += binary[i].charCodeAt(0).toString(16) + " ";
	}
	var num = number.toString(2);
	var num16 = number.toString(16);
	textAlign('center');
	text("Binary", windowWidth / 4, 180);
	text("Hexadecimal", 3 * windowWidth / 4, 180);
	textAlign('left');
	text(output, 10, 210, windowWidth / 2);

	text(hex, windowWidth / 2 + 10, 210, (windowWidth / 2 - 10));
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}