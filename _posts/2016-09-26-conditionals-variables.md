---
layout: "post"
title: "🔂 Conditionals & Variables"
date: "2016-09-27 21:48"
---

## Do Now (in <span style="color: #ED1F5E">p5</span>)

1. Create a canvas that is the size of the screen
2. Create a shape (`ellipse()`, `rect()`, etc) that follows your mouse
3. Write a conditional so that the `fill()` of the shape changes if the mouse is on the **left** or **right** side of the screen.

Like this:

<iframe src="{{ site.baseurl }}/Code_Examples/left_right/index.html" width="100%" height="200px" style="border:none"></iframe>

---

## Conditionals & Variables

Our next challenge is to make a sketch where a ~~ball~~ shape bounces around the screen.

This is a more complicated than the sketches we've done so far, because we will be **defining** our own variables.

To figure out what variables we need, think about what needs to **change** so a shape looks like it's bouncing. Let's look at it:

<iframe src="{{ site.baseurl }}/Code_Examples/Trumpoo" width="100%" height="200px" style="border:solid"></iframe>

A pile of :poop: moves across the screen. What changes?

1. The `x position` of the shape
2. The `y position` of the shape

Now, the :poop: hits the edge of the screen. What changes?

3. The `x direction` – if the shape hits the left edge, it should go right. If it hits the right edge, it should go left.
4. The `y direction` – if the shape hits the top, it should start moving down. If it hits the bottom, it should start moving up.

| Specification     | Points     |
| :------------- | :-------------: |
| Your `canvas` must resize to the window.            | 1|
| User created variables |   3 |
| Conditionals for the left/right and top/bottom edge of the screen | 1 |
| **Extension** | ✱ |
| Ball bounces using only **2** conditionals | 2 |
|**Total:**| __ / 5|
