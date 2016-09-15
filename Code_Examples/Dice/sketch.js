function setup() {
	createCanvas(470, 240);
	background('#ED245E');
}

function draw() {
	strokeWeight(3);
	stroke(0);
	fill(255);
	rect(20, 20, 200, 200);
	fill('blue');
	ellipse(120, 120, 50, 50);
	fill(255);
	rect(250, 20, 200, 200);
	fill('blue');
	ellipse(300, 70, 50, 50);
	ellipse(350, 120, 50, 50);
	ellipse(400, 170, 50, 50);
}