x = 20;
y = 30;

function setup() {
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  // background('white')
  if (key === "h"){
  line(x,y,mouseX,y)
  }
  if (key === "v"){
  line(x,y,x,mouseY)
  }
}

function keyPressed(){
  x = mouseX
  y = mouseY
}