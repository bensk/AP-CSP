// 🌐 Declare my global variables!
var left = "Option one"
var right = "Option two"
var bg = 'white'
var choice;
var story;
var storyStage = 0;
var storyBranch;

function setup() {

    createCanvas(windowWidth, windowHeight);
    // 🔨 Create two story options
    leftButton = createP(left);
    rightButton = createP(right);
    // 🎨 Style the left button
    leftButton.position(10, windowHeight / 2);
    leftButton.style("width", "45%");
    leftButton.style("text-align", "center");
    // 🎨 Style the right button
    rightButton.style("text-align", "center");
    rightButton.style("width", "45%");
    rightButton.position(windowWidth / 2, windowHeight / 2);
    // 📜 Create a place for the story
    story = createP("This is the story so far...do you want to turn left or right?");
    story.position(10, 10);

}

function draw() {

    background(bg);
    text(storyStage, 10, 60);
    // 🗣 Call the choose() function, where the story happens
    if (storyBranch == "left" && storyStage == 1) {
        bg = 'green'
    } else if (storyBranch == 'right' && storyStage ===1){
      bg = 'gold'
    }
    if (storyBranch == "left" && storyStage == 2) {
        bg = 'pink';
    } else if (storyBranch == "right" && storyStage == 3) {
        bg = 'purple';
    }
}


function keyPressed() {


    // ⌨ This function controls what happens when the left and right arrows are pressed.
    if (keyCode === LEFT_ARROW) {
        leftStory();
    } else if (keyCode === RIGHT_ARROW) {
        rightStory();
    }
}



function leftStory() {
    storyBranch = 'left'
    storyStage += 1;
}

function rightStory() {
    storyBranch = 'right';
    storyStage += 1;
}
