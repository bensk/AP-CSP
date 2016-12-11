var x;
var y;
var speed;
var slider;
var input;
var words;

function setup() {
	createCanvas(windowWidth, windowHeight);
	input = createInput("✨");
	input.position(0, windowHeight);
	slider = createSlider(32, width, 32);
	slider.position(0, windowHeight+20)
	// words = createP("Type any emoji, then drag the slider.");
}

function draw() {
	background('white');

	var emoji = input.value();
	var number = slider.value();
	textSize(32);
	for (var x = 1; x <= windowWidth-32; x += number) {
		for (var y = 32; y <= windowHeight; y += number) {
			// words.position(x,y);
			text(emoji, x, y);

		}
	}

}
