var direction = 1;
var x = 0
var bgColor = 'white'
var fillColor = 'black'
var speed = 10;

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	
	noStroke()
	background(bgColor)
	text("Speed = " + speed, 10, 10)
	fill(fillColor)
	// fill(0,abs(x-256) , abs(x-256))
	ellipse(windowWidth/2, windowHeight/2, x, x)
	for (i = 0; i <= speed; i++) {
		x = x + 1 * direction
		if (x > windowWidth || x < 0) {
			direction = direction * -1
		}
		if(direction != 1){
			bgColor = 'black'
			fillColor = 'white'
		} else{
			bgColor = 'white'
			fillColor = 'black'
		}
	}
}