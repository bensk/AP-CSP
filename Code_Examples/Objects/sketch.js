var x
var y
var width
var height
var balls = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  x = windowWidth / 2
  y = windowHeight / 2
  width = 10
  height = 10
   for (var i=0; i<10; i++) {
    balls.push(new Ball());
  }
  // ball = new Ball()
  // ball1 = new Ball()
}

function draw() {
  background('white')
  // ellipse(x, y, width, height)
  // ellipse(y,x,width,height)
  // ellipse(x,x,width,height)
  // ball.display()
  // ball.move()
  // ball1.display()
  // ball1.move()
  
  for (var i=0; i<balls.length; i++) {
    balls[i].move();
    balls[i].display();
  }
  
}

function Ball() {
  this.x = random(windowWidth/2,windowWidth/2+100);
  this.y = windowHeight/2;
  this.diameter = width;
  this.speed = 1;

  this.move = function() {
    // this.x += random(-this.speed, this.speed);
    // this.y += random(-this.speed, this.speed);
    
    
    if (this.x < windowWidth) {
    this.x = this.x + 10
    this.diameter = this.diameter+1
  } else {
    this.x = windowWidth / 2
    this.diameter = 10
  }
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}