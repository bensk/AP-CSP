function setup() {
    createCanvas(400, 200);
}

function draw() {
    background('grey')
    strokeWeight(3);
    line(.3375*windowWidth, .35*windowHeight, 175, 43);
    line(.1625*windowWidth, 70, 25, 43);
    ellipse(100, 110, 100, 100);
    ellipse(100, 80, 70, 70);
    ellipse(100, 50, 40, 40);
    strokeWeight(1);
    fill('#FF6600');;
    triangle(98,60,104,58,100+mouseX/20,70+mouseY/20);
    fill('white');
    ellipse(92,50,5,5);
    ellipse(108,50,5,5);
    textSize(24);
    fill('black')
    textFont('Proxima Nova')
    textStyle('italic')
    text("Do you want to build a me?",10,200);

}
