var fillTop
var fillMiddle
var fillBottom

function setup() {
	createCanvas(windowWidth, windowHeight)
	fillTop = "white"
	fillMiddle = "white"
	fillBottom = "white"
}

function draw() {
background('white')
textSize(18)
fill('#2B3642')

	if (mouseY < windowHeight / 3) {
		fillTop = "#FA3E27"
		fillMiddle = "white"
		fillBottom = 'white'
		fill("#FA3E27")
		text("Move your mouse up and down",40,mouseY)
	} else if (mouseY < 2 * windowHeight / 3) {
		fillTop = "white"
		fillMiddle = "#EDB538"
		fillBottom = "white"
		textSize(36)
		fill("#EDB538")
		text("Keep going...",40,mouseY)
	} else if (mouseY < windowHeight) {
		fillTop = "white"
		fillMiddle = "white"
		fillBottom = "#25FD27"
		textSize(72)
		fill("#25FD27")
		text("Go!",40,mouseY)
	}

	fill('#F5F2F0')
	rect(windowWidth/2-10,windowHeight/3,20,windowHeight)
	rectMode(CENTER)
	fill('#2B3642')

	rect(windowWidth / 2, windowHeight / 3, 100, 200, 10, 10, 10, 10)
		// Top Light
	fill(fillTop)
	ellipse(windowWidth / 2, windowHeight / 3 - 60, 50, 50)
		// Middle Light
	fill(fillMiddle)
	ellipse(windowWidth / 2, windowHeight / 3, 50, 50)
		// Bottom Light
	fill(fillBottom)
	ellipse(windowWidth / 2, windowHeight / 3 + 60, 50, 50)
}
