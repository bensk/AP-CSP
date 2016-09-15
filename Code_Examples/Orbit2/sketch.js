function setup() {
createCanvas(500,500)
}

function draw() {
	background('white')
	text("Mouse: " + mouseX + ", " + mouseY, 0, 10)
	text("Window: " + windowWidth + ", " + windowHeight, 0, 20)

	ellipse(250, 250, 254, 254)
	translate(width / 2, height / 2);
	rotate((PI / 3.0) * mouseX / 100);
	strokeWeight(mouseX/10)
	point(-90, -90);
}