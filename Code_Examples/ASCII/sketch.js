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
	text('ASCII Converter',10,72);
	
	
var binary = input.value();
textSize(12);
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
text("Binary", windowWidth/4, 180)
text(output,10,200, windowWidth/2)
text("Hexadecimal", 3*windowWidth/4, 180)
text(hex, windowWidth/2+10, 200, (windowWidth/2-10))
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
