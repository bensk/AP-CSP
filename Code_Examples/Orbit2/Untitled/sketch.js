function setup() {
	createCanvas(500, 500)
}
var x = 0
var y = 5
var countingUp = 1;

function draw() {
	background('white')
	text("Mouse: " + mouseX + ", " + mouseY, 0, 10)
	text("Window: " + windowWidth + ", " + windowHeight, 0, 20)
	text(x, 0, 30)

	ellipse(250, 250, 254, 254)
	translate(width / 2, height / 2);
	rotate((PI / 3.0) * x / 100);
	y += (1 * countingUp);

	if (y == 75 || y == 5) {
		countingUp *= -1;
	}
	
	strokeWeight(y)
	point(-90, -90);
	x = x + 10
}