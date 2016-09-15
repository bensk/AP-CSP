var x
var y
var xDirection
var yDirection
fill1 = 'blue'
fill2 = 'red'

function setup() {
	createCanvas(windowWidth, windowHeight)
	x = 0
	y = 0
	xDirection = 1
	yDirection = 1
}

function draw() {
	noStroke()
	background('white')
	fill(fill1)
	ellipse(x, y, 50, 50)
	fill(fill2)
	ellipse(windowWidth - x, windowHeight - y, 50, 50)
	triangle(x,y,windowWidth,windowHeight,0,0)
	x = x + xDirection * 10
	y = y + yDirection * 10
	if (x < 0 || x > windowWidth) {
		xDirection = xDirection * -1
		fill1 = 'green'
		fill2 = 'green'
	} 
	
	if (y < 0 || y > windowHeight) {
		yDirection = yDirection * -1
		fill1 = 'yellow'
		fill2 = 'yellow'
	}

}