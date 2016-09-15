function setup() {
    createCanvas(windowWidth, windowHeight)
}
var x = 0
var y = 5
var countingUp = 1;

function draw() {
    background(map(mouseX, 0, width, 0, 255))
    fill('white')
    text("Mouse: " + mouseX + ", " + mouseY, 0, 10)
    text("Window: " + windowWidth + ", " + windowHeight, 0, 20)
    text(x, 0, 30)
    fill('#FFF400')
    ellipse(windowWidth / 2, windowHeight / 2, abs(y + 1), abs(y + 1))




    translate(width / 2, height / 2);
    stroke('#E32173')
    strokeWeight(y)
    rotate((PI / 3.0) * x / 1000);
    point(windowWidth / 4, windowHeight / 4);
    y += (1 * countingUp);
    strokeWeight(8)
    rotate(PI)
    stroke('#70E6BF')
    point(windowWidth / 6, windowHeight / 6);
    rotate((PI / 3.0) * x / 100);
    stroke('#EDB538')
    point(windowWidth / 8, windowHeight / 8);
    rotate(PI)
    stroke('#FF6600')
    point(windowWidth / 15, windowHeight / 10);
    rotate((PI / 3.0) * x / 100);

    if (y == 75 || y == 5) {
        countingUp *= -1;
    }
    rotate(PI);
    stroke('#FFEBFF')
    point(windowWidth / 15, windowHeight / 15);
    rotate(PI);
    stroke('#4FC2A1')
    point(windowWidth / 30, windowHeight / 30);


    x = x + 20

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function mousePressed() {
    noLoop();
}

function mouseReleased() {
    loop();
}
