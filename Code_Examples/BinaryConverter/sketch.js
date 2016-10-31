function setup() {
	createCanvas(windowWidth, windowHeight);
	input = createInput()

	input.position(10, 30)
}

function draw() {
	background('white');
	textAlign('left')
	
	textFont('sans-serif')
	textSize(12)
	text('⬇Type a number here ⬇',10,20);
	textSize(24);
	textAlign('right')


	
	var number = int(input.value());
	var num = number.toString(2);
	var num16 = number.toString(16);

	if (num >= 0) {


		text('In binary, ' + number + ' is', windowWidth - 10, 50);
		textFont('courier');
		text(num, windowWidth - 10, 80);
		textSize(12);
		text("and in hexadecimal (base 16), " + number + " is", windowWidth - 10, 110)
		textSize(24);
		text(num16, windowWidth - 10, 140)

	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}