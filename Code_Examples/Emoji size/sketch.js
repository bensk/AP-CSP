var size = 10;
var speed = 1;
function setup() { 
  createCanvas(windowWidth, windowHeight);
  emoji = createInput("🔰");
  emoji.position(10,10);
  slider = createSlider(10,126,10);
  slider.position(10,20);
} 

function draw() { 
  background('white')
  e = emoji.value()
  length = e.length;
s = slider.value()
  console.log(s);
textSize(s);
	for(var x = 0; x <= width; x += s){
		for (var y = 0; y <= height; y += s){
text(e,x,y);
		}
	}
  
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}