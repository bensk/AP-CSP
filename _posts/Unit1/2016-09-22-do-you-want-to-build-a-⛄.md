---
layout: "post"
title: "Do You Want to Build a ⛄"
date: "2016-09-22 13:41"
category: "Unit 1: Algorithms and p5"
---

## Do Now
✱ Create a canvas that is **500px** wide and **500px** tall.    
✱ Draw an `ellipse()` inside of another ellipse.    
✱ Give each `ellipse()` a different color.     

<div style="text-align: center"><a href="http://bsk.education/SE8_p5js/Code_Examples/Snowman/">☃</a></div>
> _Do you wanna build a snowman?_    
> _It doesn't have to be a snowman..._

---

```javascript
function setup(){
    createCanvas(500,500)
}
```

Use the <span style="color: #ED1F5E">p5</span> graph paper to plan your snowman[^1].

## <span class="mega-octicon octicon-light-bulb"></span> Helpful Drawing Hint
If you add this code to your sketches, you'll be able to see where your mouse is on the screen...very helpful for drawing!

```javascript
background('white')
textSize(10)
text('Mouse X = ' + mouseX + " | Mouse Y = " + mouseY, 10, 10)
```

## <span class="mega-octicon octicon-check"></span> Meeting Standards
1. At least 3 `ellipse()`, correctly layered so that it _looks_ like one is resting on top of the other.
2. At least two `line()` for the arms
3. What shape do you think I used to make the nose? Use [`p5✱ Reference`](https://p5js.org/reference/) to figure out how to make this shape.

## <span class="mega-octicon octicon-rocket"></span> Push yourself for a 4!
4. Use `fill()` and `stroke()` to give your snowman some color.

[^1]: It doesn't have to be a snowman.
