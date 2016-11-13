---
layout: "post"
title: "📇 Something we need to address..."
date: "2016-11-13 14:41"
category: "Unit 2 – The internet"
---

So far, we have communicated messages between two people. Our "internet" looks like this:

<iframe src="{{ site.baseurl }}/Code_Examples/BinaryCommunication" width="100%" height="400px" style="border:0px"></iframe>

But the actual **internet** looks more like this:

![](https://46qasb3uw5yn639ko4bz2ptr8u-wpengine.netdna-ssl.com/files/2015/11/internet-map-FB.jpg)

Yikes.

Our "simple" 1:1 protocols will break down. To get a sense of how the inventors of the internet designed a solution, let's play a game of Battleship.

## Battle🛳 Round 1
- The object of Battleship is to try and sink another player's ship before they sink yours.  
- The other player's ship is somewhere on his/her board
- Each turn, you try to guess your opponent’s ship location by calling out a coordinate on the grid, like `A2`.
- The other player also tries to hit your ship by calling out coordinates.  

[Example Board](https://docs.google.com/document/d/1oKi5_35xB-6Np5stnbGq7MCKnRZVC5qCVUQmAJByrTI/edit)

**You maintain and mark two grids:**
- Your _Ship Boards_ - where you record shots fired against you.
- Your _Target Boards_ - where you record the shots you fired against others.

### Starting a New Game

- Each player places a ship on their board - one ship for each opponent
- A ship occupies two contiguous squares on the grid - vertically or horizontally. NO Diagonal placement.
- Once the guessing begins, the players may not move the ships.  

## Battle🛳 Round 10
Now, how could that information be transmitted using bits?

1. List all the information that you needed to play Battleship.
2. Diagram your protocol.

While developing your protocol here are some questions and suggestions to think about:

- Remember that ultimately you are making a communication protocol for a computer to read, so if it’s hard for a human to decipher, but would be easy to describe for a computer, that’s fine.
- A message you send over the Internet is just a string of 0s and 1s -- so your protocol should indicate how the bits work (i.e. what is the binary representation?)
- Think about using numeric addresses rather than people’s names.
- Think about what else you can communicate with binary to reduce the total number of bits.[^hex] How “efficient” can you make your message?  How small can you make the size of a message?

[^hex]: Hexadecimal!



## IP Addresses

Go to: `216.58.217.174`

`ipconfig getifaddr en0`
