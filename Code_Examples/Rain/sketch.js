var x
var y
var width
var height
var drops = []

function setup() {
	createCanvas(windowWidth, windowHeight)
	x = windowWidth / 2
	y = windowHeight / 2
	width = 10
	height = 10
	for (var i = 0; i < 100; i++) {
		drops.push(new Drop());
	}
	// ball = new Ball()
	// ball1 = new Ball()
}

function draw() {
	background('white')
		// ellipse(x, y, width, height)
		// ellipse(y,x,width,height)
		// ellipse(x,x,width,height)
		// ball.display()
		// ball.move()
		// ball1.display()
		// ball1.move()
	textSize(64)
	text("☂️", mouseX - 30, mouseY)
	for (var i = 0; i < drops.length; i++) {
		drops[i].move();
		drops[i].display();
	}
	print(drops)
		// this.speed = this.speed * 9.81
}

function Drop() {
	this.x = random(0, windowWidth);
	this.y = random(0, windowHeight);

	this.speed = 20;

	this.move = function() {
		// this.x += random(-this.speed, this.speed);
		// this.y += random(-this.speed, this.speed);


		if (this.y <windowHeight) {
			this.y = this.y + 1 * this.speed
			this.x = this.x + random(-3, 3)

		} else {
			this.y = 0

		}
	};

	this.display = function() {
		textSize(32)
		text("💧", this.x, this.y)
	};
}
