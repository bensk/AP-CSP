var input, button, greeting;

function setup() {
    createCanvas(windowWidth, windowHeight)

    input = createInput()
    input.position(10, 80)
        // button = createButton('pluralize');
        // button.position(150, 70);
}

function draw() {

    background('white')
    fill('black')
    textSize(32)
    text("Lossy!", 10, 30)
    textSize(12)
    text("Enter some words!", 10, 50)
    text("⏬⏬⏬", 10, 70)
    var noun = input.value();
    textSize(72)
    noun = noun.replace(/a/g, "").replace(/e/g,"").replace(/i/g,"").replace(/o/g,"").replace(/u/g,"");
    
   text(noun,0,windowHeight/2)
  
}

function pluralize() {

}
