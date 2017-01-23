var c;
var d;
var e;
var f;
var g;
var a;
var b;

function preload() {
    c = loadSound("c.mp3");
    d = loadSound("d.mp3");
    e = loadSound("e.mp3");
    f = loadSound("f.mp3");
    g = loadSound("g.mp3");
    a = loadSound("a.mp3");
    b = loadSound("b.mp3")

} 


function setup() { 
    createCanvas(windowWidth, windowHeight);
}

function draw() { 
    background("white"); 
    text("X" + " = " + mouseX + " | " + "Y" + " = " + mouseY, 10, 10); 
    rect(65, 150, 270, 100); 
    for (var i = 100; i <= 320; i += 40) {
        line(i, 150, i, 250);
    }
    // line(100, 150, 100, 250);
    // line(140,150, 140, 250);


    if (mouseX < 100 && mouseX > 60) {
        if (mouseIsPressed) {
            // background('red');
            c.play();
        }
    }
    if (mouseX >= 100 && mouseX <= 140) {
        if (mouseIsPressed) {
            d.play();
        }
    }
    if (mouseX >= 140 && mouseX <= 180) {
        if (mouseIsPressed) {
            e.play();
        }
    }
    if (mouseX >= 180 && mouseX <= 220) {
        if (mouseIsPressed) {
            f.play();
        }
    }
    if (mouseX >= 220 && mouseX <= 260) {
        if (mouseIsPressed) {
            g.play();
        }
    }

}
