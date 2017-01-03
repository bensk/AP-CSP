---
layout: "post"
title: "➿ Nested Loops"
date: "2016-12-09 10:19"
category: "Unit 3 – Building Apps"
---

## 🎯 Learning Target
I can use nested loops to solve programming problems.

## Do Now (in Google Classroom)
Create this (or as close as you can) using **ONE** `ellipse()` and a `while` loop.

![]({{ site.baseurl }}/images/whileloop.png)

Let's [go back to NYU](https://youtu.be/cnRD9o6odjk?t=7m50s).


## `for` loops

How many ellipses will draw?

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  // nested loop:
  y = 50;
  for (var x = 25; x < 100; x = x + 50) {

    ellipse(x, y, 50, 50);
  }

}
```

How about now?

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  // nested loop:
  y = 50;
  for (var x = 25; x < 100; x = x + 50) {
    for (var y = 25; y < 100; y = y + 50) {
      ellipse(x, y, 50, 50);
    }

  }
}
```

## Nested Loops
> A loop in a loop.

_In other words..._

![](http://bsk.education/CS9/images/NestedLoops.jpg)
