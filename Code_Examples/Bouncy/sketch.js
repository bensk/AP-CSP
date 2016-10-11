// 1 vertex
var xpos = 50;
var ypos = 50;
// 2 vertex
var xpos1 = 83;
var ypos1 = 95;
// 3 vertext...
var xpos2 = 42;
var ypos2 = 42;
//initial direction
var xdir = 10;
var ydir = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#742FDC')
  noStroke()
  ellipse(xpos, ypos, 50, 50);
  triangle(0, windowHeight, xpos, ypos, windowWidth, windowHeight)
  xpos = xpos + xdir;
  ypos = ypos + ydir;
  //if xpos >= right edge   or  xpos <= left edge
  if (xpos >= windowWidth || xpos <= 25) {
    xdir = xdir * -1; // BOUNCE! 
  }
  if (ypos >= windowHeight || ypos <= 25) {
    ydir = ydir * -1;
  }

}