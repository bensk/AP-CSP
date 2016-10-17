var input, button, greeting;

function setup() {
	createCanvas(windowWidth, windowHeight)

	input = createInput()
	input.position(10, 80)
		// button = createButton('pluralize');
		// button.position(150, 70);
}

function draw() {

	background('white')
	fill('black')
	textSize(32)
	text("Oddly enough...", 10, 30)
	textSize(12)
	text("Type some numbers", 10, 50)
	text("⏬⏬⏬", 10, 70)
	var numbers = input.value();
	var number_array = numbers.split(" ");
	for (var i = 0; i < number_array.length; i++){
			if ((number_array[i] % 2) == 0){
				number_array.splice(i, 1);
        i = i-1;
			}
	}
	textSize(72)
	text(number_array, 10, 200);
}

function pluralize() {

}