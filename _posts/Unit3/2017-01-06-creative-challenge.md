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

<iframe height='171' scrolling='no' title='Project Generator' src='//codepen.io/bsk/embed/JEdEWj/?height=171&theme-id=22595&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/bsk/pen/JEdEWj/'>Project Generator</a> by S-K (<a href='http://codepen.io/bsk'>@bsk</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

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

## Groups
1. Genesis + Tijuan + Yomaris
2. Mona + Terrell
3. Vianelys + Michael D. + Michael C.
4. Karen + Johan
5. Ibby + Aileen
6. Izzy + Grismely + Gregorio
7. Aaron + James
8. Jorge + Angie + Justin
