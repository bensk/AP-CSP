function setup() {
  createCanvas(windowWidth, windowHeight)
  background('blue')
}
x = 0
y = 250
function draw() {
  background('white')
  fill('#E32173')
  ellipse(windowWidth/2, windowHeight/2, y-x, 100)
  fill('#70E6BF')
  ellipse(250, 250, 50, y-x)
  fill('black')
  textSize(32)
  text("Mouse X = " + mouseX + " | Mouse Y = " + mouseY, 0, 32)
  textSize(72)
  text("⛄️️", x, y)
  
  text("🌤",x-3,y-70)
  textSize(36)
  text("🕶",x+17,y-30)
  textAlign('center')
  textStyle('italic')
  textSize(18)
  text("'When I finally do what frozen things do in summer.'",250,400)
  if (x < windowWidth) {
    x = x + 5
    y = y + random(-5,5)
  } else{
    x = 0
  }
  if(y>500){
    y = 250
  }
}