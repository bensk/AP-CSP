function setup() {
  createCanvas(500, 500)
}
x = 0
y = 0

function draw() {
  // line(0,0,500,500)
  background('purple')
  strokeWeight(5)
  fill('blue')
  stroke('orange')
  rect(0, 25, 500, 10)
  stroke('red')
  fill('pink')
  ellipse(250, 250, 500, 10)
  textSize(72)
  text("this is ugly", 10, 240)
  textSize(36)
  text("Thanks, BG", x, 280)
  if (x < 500) {
    x = x + 5
  } else {
    x = -50
  }


}