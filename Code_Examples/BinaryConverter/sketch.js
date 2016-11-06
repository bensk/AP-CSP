function setup() {
	createCanvas(windowWidth, windowHeight);
	input = createInput()

	input.position(10, 102)
}

function draw() {
	background('white');
	textAlign('left')

	textFont('sans-serif')
	textSize(36)
	text('⬇Type a number here',10,72);
	textSize(72);
	textAlign('right')

	var number = int(input.value());
	var num = number.toString(2);
	var num16 = number.toString(16);

	if (num >= 0) {

		text('In binary, ' + number + ' is', windowWidth - 10, 132);
		textFont('courier');
		text(num, windowWidth - 10, 180);
		textSize(12);
		text("and in hexadecimal (base 16), " + number + " is", windowWidth - 10, 190)
		textSize(72);
		text(num16, windowWidth - 10, 300)

	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
