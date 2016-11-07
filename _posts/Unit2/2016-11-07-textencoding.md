---
layout: "post"
title: "🗜 Text Encoding"
date: "2016-11-07 10:03"
category: "Unit 2 – The internet"
---

## 01000100 01101111 00100000 01001110 01101111 01110111 00111010
We spent a lot of time last week with numbers, but most of our communication is in text.

- How could you send _text_ with _binary_?

For example, I could decide:

| Letter  | Number  | Binary|
|---|---|---|
| h  | 1  | 001 |
| e  | 2  | 010 |
| l  | 3  | 011 |
| o  | 4  | 100|

So `hello` would be `011` `010` `011` `011` `100`. You probably don't want to start your alphabet at `h`, but you get the idea.

How many bits does it take to write `hello` in your system?

How could we sent a message with fewer bits?

##  American Standard Code for Information Interchange
![](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ASCII-Table-wide.svg/2000px-ASCII-Table-wide.svg.png)

Using the ASCII table, translate your first name from letters to numbers using the ASCII table.

Write your name as: `Name!` (capital first letter, exclamation point at the end)

See any problems?

## Unicode ([UTF-8](http://www.unicode.org/versions/Unicode9.0.0/))

Express every character as an `8-bit` sequence.

<iframe src="{{ site.baseurl }}/Code_Examples/Unicode" width="100%" height="400px" style="border:0px"></iframe>

- How could you send _emoji_ in _binary_?
- How could you _read_ this?

> <kbd>49 66 20 79 6f 75 20 63 61 6e 20 72 65 61 64 20 74 68 69 73 20 6d 65 73 73 61 67 65 2c 20 67 69 76 65 20 6d 65 20 61 20 74 68 75 6d 62 73 20 75 70 2e 20
</kbd>

Hint: `20` is a `space`. Also, `20` is not 20.

👍

## Sending Formatted Text
Please make sure you have joined [our class on Code.org](http://studio.code.org/join/JBLWCY).

Then go here: [Sending Formatted Text Activity](https://studio.code.org/s/csp1/stage/7/puzzle/2).

## Listen
![](http://www.npr.org/assets/img/2014/11/06/faces.gif)

<iframe src="https://www.npr.org/player/embed/451642332/451643622" width="100%" height="290" frameborder="0" scrolling="no" title="NPR embedded audio player"></iframe>

How are emojis decided? Why do we need a Consortium?

## Exit Slip
How many bits are required to store the word "Computer Science" in ASCII?

- 2 bits
- 4 bits
- 8 bits
- 16 bits
- 32 bits
- 64 bits
- 128 bits
