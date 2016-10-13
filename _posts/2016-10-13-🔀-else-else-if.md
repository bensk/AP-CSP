---
layout: "post"
title: "🔀 <code>else</code> & <code>else if</code>"
date: "2016-10-13 11:50"
---

## Learning Targets
I can use `if`, `else`, and `else if` to create multiple conditions in a p5 sketch.

## `else if`
Move your mouse across this sketch:
<iframe src="{{ site.baseurl }}/Code_Examples/ElseAndElseIf" width="500px" height="500px"></iframe>

How many conditionals do I have?

What's **wrong** with this one?

<script type="text/p5" data-autoplay data-preview-width="300px" data-preview-height="">
var bgColor = 'white'

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(bgColor)
    // fill(bgColor);
    // ellipse(250,250,mouseY,mouseY)
  if (mouseX < 4 * windowWidth / 5) {
    bgColor = '#6638F0';
  } else if (mouseX < 3 * windowWidth / 5) {
    bgColor = '#890424';
  } else if (mouseX < 2 * windowWidth / 5) {
    bgColor = '#20C8B6';
  } else if (mouseX < windowWidth / 5) {
    bgColor = '#82BCFB';
  } else {
    bgColor = '#E12874';
  }
}
</script>
