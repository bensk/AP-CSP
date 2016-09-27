var img;
var x;
var y;
var xDirection = 1;
var yDirection = 1;
var speed = 5;

function preload() {
	img = loadImage("images/donald-dump-dribbble.png")
}

function setup() {

	createCanvas(windowWidth, windowHeight)

	x = random(0, width)
	y = random(0, height)
}

function draw() {

	background('white')

	strokeWeight(20 - y / 20)

	// line(windowWidth / 2, 0, x, y)
	strokeWeight(10)
	rectMode(CENTER)

	if (keyIsPressed) {
		stroke('#D4171C')
		textSize(50);
		text("💩",x, y)
		noStroke()
		textSize(18)
		text("You pressed a key!", 20, 20)
	} else {
		// ellipse(x, y, 25, 25)
		image(img, x, y, 50, 50);
	}

	x = x + xDirection * speed
	y = y + yDirection * speed
	if (x >= width - 50 || x <= 0) {
		xDirection = xDirection * -1;
	} else if (y >= height - 50 || y <= 0) {
		yDirection = yDirection * -1;
	}
}