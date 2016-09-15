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
    text("BJC Pluralize Lab", 10, 30)
    textSize(12)
    text("Enter a noun!", 10, 50)
    text("⏬⏬⏬", 10, 70)
    var noun = input.value();
    textSize(72)
    if (noun.length >= 2) {
        if (noun.charAt(noun.length - 1) === "s" || noun.charAt(noun.length - 1) === "h" || noun.charAt(noun.length - 1) === "sh" || noun.charAt(noun.length - 1) === "ch") {
            fill('#4FC2A1')
            text(noun + "es", 10, 200)
        } else {
            fill('#E32173')
            text(noun + "s", 10, 200)
        }
    }
}

function pluralize() {

}
