---
layout: "post"
title: "Encoding Images"
date: "2017-02-13 16:19"
category: "Unit 4 – Representation"
---

## Learning Targets
`AP` I can apply a creative development process when creating computational artifacts.

`AP` I can describe the variety of abstractions used to represent data.

`AP` I can explain how binary sequences are used to represent digital data.

## Meta
Last week, we saw how a binary sequence could be used to encode a black and white image. In order to _decode_ that message, we saw that we needed **metadata**. Why?

> metadata - data about other data. In a digital image file, metadata describes the size of the image, number of colors, or resolution.

Depending on your encoding scheme, you used a certain number of bits to encode the height and width of your canvas, and then more bits to actually draw the image.

How could we go about drawing colorful picture?

## 🖼 Colorful Images
We saw[ last week that digital images are BIG files](http://bsk.education/AP-CSP/unit%204%20%E2%80%93%20representation/2017/02/03/bytes-file-sizes.html). Why? Well, we know we need **pixels** to display images, but how do pixels work?

<video width="100%"  controls>
  <source src="http://videos.code.org/2015/csp/concept_rgb.mp4" type="video/mp4">
</video>

- RBG goes from 0-255, for a total of 256 values of intensity.
- Like monochromatic pictures, we need to decide how many bits-per-pixel in order to decode images.

So, pixels are an abstraction of RGB, which is itself an abstraction of binary.

## 🌈 RGB

Let's look at all the possible 3-bit colors:

This code:

    0000 0100
    0000 0010
    0000 0011
    000 111 100 010
    001 110

Produces this picture:

![](https://code.org/curriculum/docs/csp/U2L04-3bitTask.png)

The first two liens are **metadata** saying the picture is 4 pixels by 2 pixels. Then, six of the pixels are turned on. There are two more possible colors. What are they?

What happens if we shift to 4-bit colors, or 5-bit colors? Why?

Now, try 6-bit colors. How many different colors can you make?

How could we write these colors with a _shorter_ amount of bits?

> Hex!

## 👤 Icon
You are going to design your own icon using either 16x16 or 32x32 pixels. You should use at least 12 bits per pixel.

Like this:

![]({{site.baseurl}}/images/bsk32px.png)

Is converting from binary (base 2) to hexadecimal (base 16) a form of [data compression](http://bsk.education/AP-CSP/unit%204%20%E2%80%93%20representation/2017/02/06/txt-cmprssn.html)?
Why or why not?
