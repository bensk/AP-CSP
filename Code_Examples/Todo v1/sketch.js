var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var plannerHeight = 130;
var inbox;

function setup() {
    createCanvas(windowWidth, windowHeight);
    inbox = createInput("What do you have to do?");
    inbox.position(windowWidth - 150, 10);
    button = createButton("Add to planner");
    button.position(windowWidth - 150, 30);
    button.mousePressed(todo);


}

function draw() {

    background('white');
    textFont('Lato');
    textSize(72);
    text("🗓 Planner", 10, 96);
    textStyle('bold');
    if (windowWidth <= 768) {
        textSize(18);
    } else if (windowWidth <= 992) {
        textSize(20);
    } else {
        textSize(28);
    }

    for (var i = 0; i < 7; i++) {

        text(days[i], windowWidth / 7 * i, plannerHeight);
        line(windowWidth / 7 * i - 10, plannerHeight, windowWidth / 7 * i - 10, windowHeight);
    }



}

function todo() {
    i = 300
    item = inbox.value();
    if (item.includes("monday")) {
        paragraph = createP(item);
        paragraph.position(0, i);
        i += 20;
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}