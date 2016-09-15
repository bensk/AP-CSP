function setup() {
    createCanvas(windowWidth, windowHeight)
    x = windowWidth / 2
    y = windowHeight / 2
}

function draw() {
    background('white')
    ellipse(x, y, 50, 50)

    x = x + 10
    if (x>windowWidth){
        x = 0
    }
    textSize(32)
    // text("Whoa I'm moving!",x*-1+windowWidth-100,y+40)
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}
