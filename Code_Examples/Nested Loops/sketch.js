function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	strokeWeight(4);
	stroke(255);
  
	// // One loop...
	// 	for (var x = 0; x <= windowWidth; x = x + 50) {
	// 		fill(random(255), 0, random(255));
	// 		ellipse(x, 200, 25, 25);
	// 	}
	// // Two loop...
	// 	for (var y = 0; y <= windowHeight; y = y + 50) {
	// 		fill(random(255), 0, random(255));
	// 		ellipse(200, y, 25, 25)
	// 	}

	// nested loop:
	for (var x = 0; x <= windowWidth; x = x + 25) {
		for (var y = 0; y <= windowHeight; y = y + 25) {
          textSize(24);

          text("😱",x,y);
			fill(random(250,256), random(256), random(256));
          strokeWeight(random(5));
			rect(x, y, 25, 25);
          
		}
	}
}