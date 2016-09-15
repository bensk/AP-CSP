function setup() {
  createCanvas(windowWidth, 200);
}

function draw() {
  background("white");
  line(windowWidth/2,0,windowWidth/2,windowHeight)
  ellipse(mouseX,mouseY,50,50)
  textSize(18)
  if(mouseX>windowWidth/2){
    fill('#4FC2A1')
    text("I'm on right side!",mouseX+30,mouseY)
  } else {
    fill('#EDB538')
    text("I'm on left side!",mouseX-150,mouseY)
  }
  ellipse(mouseX,mouseY,50,50)
}
