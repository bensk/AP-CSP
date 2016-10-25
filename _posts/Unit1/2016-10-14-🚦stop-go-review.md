---
layout: "post"
title: "🚦Stop & Go & Review"
date: "2016-10-14 21:28"
category: "Unit 1: Algorithms and p5"
---

## Learning Targets
- I can use Boolean conditions to determine which of  parts of an algorithm is used.
- I can repeat of part of an algorithm until a condition is met or for a specified number of times.

## Do Now (in Google Classroom)
Why isn't the ellipse bouncing off the right edge of the screen? Can you fix it?

Can you make the stroke weight change as the ellipse moves?

<script type="text/p5" data-autoplay data-preview-width="400" data-preview-height="">
var x;
var y;
var xDirection = 1;
var yDirection = 1;
var speed = 10;

function setup() {
  createCanvas(windowWidth, windowHeight)
  x = random(0, width)
  y = random(0, height)
}

function draw() {

  background('#29BEEA')
  strokeWeight(3)
  stroke('#FFF400')
  // strokeWeight(5)
  fill('#FF4396')
  ellipse(x, y, 25, 25)

  x = x + xDirection * speed
  y = y + yDirection * speed
  if (x >= width + 250 || x <= 0) {
    xDirection = -xDirection
  } else if (y >= height || y <= 0) {
    yDirection = -yDirection
  }
}
</script>

---

## Traffic Light

Create this "traffic light" in p5:

<iframe src="{{ site.baseurl }}/Code_Examples/TrafficLight" width="100%" height="400px" style="border:solid 1px"></iframe>

**Rubric**

| Specification                                                             | Points |
|:--------------------------------------------------------------------------|:------:|
| 3 ellipses, each light up different colors                                |   3    |
| It must be able to "light" up in three different colors **one at a time** |   1    |
| Only one light should be lit at a time                                    |   1    |
| Lights are **conditionally** activated[^1]                                |   1    |
| **Total**                                                                 |   6    |




[^1]: It's your choice how to activate the lights. Mine are based off `mouseY`. You could use a click, `mouseX`, your keyboard...whatever you want.
