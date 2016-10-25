---
layout: "post"
title: "✖ = Variables "
date: "2016-09-25 12:13"
category: "Unit 1 – Algorithms and p5"
---

# Part 1

## Do Now
What's a variable?

## From the AP:
> Program instructions may involve variables that are initialized and updated, read, and written    
> Meaningful names for variables and procedures help people better understand programs.

## Built-in Variables in <span style="color: #ED1F5E">p5</span>
We've actually seen a few variables in p5 already.

Look at the code below:

<script type="text/p5" data-autoplay data-preview-width="300" data-preview-height="">
// This goes at the top of your code
function setup(){
    createCanvas(windowWidth,windowHeight)
}

function draw(){
background('white')
textSize(10)
text('Mouse X = ' + mouseX + " | Mouse Y = " + mouseY, 10, 10)
}
</script>

What are `mouseX` and `mouseY` equal to? If you said "it keeps changing!" you're absolutely right. These are variables.

Take a closer look at my code. How **big** is my canvas? If you said "it keeps changing!" you...get the idea. Also variables.

### Exploring variables
✱ Create a canvas that is the width and height of the window.

✱ Draw a `line()` from the **top middle** of your screen (just below the camera) to your mouse cursor.

> Hint: you will need variables to create the canvas. How could use those same variables to find **half** your screen?

It should look something like this:

<script type="text/p5" data-autoplay data-preview-width="720" data-preview-height="">
function setup() {
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  background('white')
  line(windowWidth/2,0,mouseX,mouseY)
}
</script>

> Extend yourself! Give the line a different `stroke` and `strokeWeight`    
>Are you seeing a whole bunch of lines? How can you draw _only one_?    
> Can you "hang" a rectangle off the end of the line?    

### Back to the ~~Drawing board~~ Canvas
Go back to either your snowman or your own drawing, and add variables. But sure to use:

- `windowWidth`
- `windowHeight`
- `mouseX`
- `mouseY`

---

# Part 2

## 🗣 User-defined variables

**Steps to make a variable**
@ the top of your code:

1. Declare (ex. `var xpos`)
2. Initialize (ex. `var xpos = 50`)
3. Use (ex. `ellipse(xpos, 100, 50, 50);`)

<script type="text/p5" data-autoplay data-preview-width="" data-preview-height="">
var xpos = 50
// What happens if you change me?

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	background('#FEF790')
	fill('#7F1AE5')
	ellipse(xpos, 50, 50, 50);
}
</script>
