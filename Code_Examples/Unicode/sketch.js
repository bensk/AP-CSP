function setup() {
	createCanvas(windowWidth, windowHeight);
	input = createInput();
	slider = createSlider(14, 36, 12);
	
	slider.position(10, 80);
	input.position(10, 102)
	
}

function draw() {
	input.size(windowWidth - 30);

	background('white');
	textAlign('left');
	textStyle('normal')

	textFont('sans-serif')
	textSize(36)

	text('✨Unicode Converter✨', 10, 72);

	var size = slider.value();
	var binary = input.value();
	textSize(size);
	textStyle('bold')
	text("Binary", 10, 160)
	text("Hexadecimal", windowWidth / 2 + 10, 160)
	textFont('monospace')

	var number = int(input.value());
	var output = "";
	var hex = "";
	for (var i = 0; i < binary.length; i++) {
		output += binary[i].charCodeAt(0).toString(2) + " ";
		hex += binary[i].charCodeAt(0).toString(16) + " ";
	}
	var num = number.toString(2);
	var num16 = number.toString(16);
	textStyle('normal')
	text(output, 10, 200, windowWidth / 2);
	text(hex, windowWidth / 2 + 10, 200, (windowWidth / 2 - 10));
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}