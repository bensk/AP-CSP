---
layout: "post"
title: "Creative Challenge"
date: "2017-01-06 21:55"
category: "Unit 3 – Building Apps"
---

## 🎯 Learning Targets
- `AP` I can create a computational artifact for creative expression.
- `AP` I can collaborate to develop a program.

Open this page on your computer to find out your project from the Project Generator™.

<iframe src="http://alpha.editor.p5js.org/embed/Hk4vzKhBg" style = "border:none" width = "100%"></iframe>

```js
// For the curious:
function setup() {
    createCanvas(windowWidth, windowHeight);
    var nouns = ['monkey', 'rock', 'Turtle', 'Dubai', 'XBOX', 'Mom', 'chicken spot', 'Park', 'Phone', 'hamster ', 'Spain', 'Johan', 'book', 'scientist', 'Person', 'Car ', 'Musician'];
    var noun = random(nouns); // select random word
    var adjectives = ['Stupid', 'pretty', 'Fat', 'happy', 'Lovely', 'amazing', 'Smart', 'Scary', 'Huge', 'Amazing', 'funny', 'astonishing', 'Lazy', 'beautiful', 'pretty', 'Horrible', 'Beautiful', 'Cloudy', ]
    var adjective = random(adjectives);
    textSize(18);
    text("Your project is...", 0, 32);
    textAlign('center');
    textStyle('bold');
    textSize(48);
    text(adjective, windowWidth / 2, 48);
    text(noun, windowWidth / 2, 96);
}
```
