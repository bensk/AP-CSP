var bgColor = 'white'

function setup() {
	createCanvas(500, 500)
}

function draw() {
	background(bgColor)
	// fill(bgColor);
	// ellipse(250,250,mouseY,mouseY)
	if (mouseX < 100) {
		bgColor = '#82BCFB';
	} else if (mouseX < 200) {
		bgColor = '#20C8B6';
	} else if (mouseX < 300) {
		bgColor = '#890424';
	} else if (mouseX < 400) {
		bgColor = '#6638F0';
	} else {
		bgColor = '#E12874';
	}
}