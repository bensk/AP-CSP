---
layout: "post"
title: "📇 Something we need to address..."
date: "2016-11-14 14:41"
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

A number assigned to any item that is connected to the Internet.

**Packets** - Small chunks of information that have been carefully formed from larger chunks of information.

**Protocol** - A set of rules governing the exchange or transmission of data between devices.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5o8CwafCxnU" frameborder="0" allowfullscreen></iframe>

## IPv4

👉 How could [the internet run out of room](https://www.wired.com/2011/02/internet-addresses/)?

4,300,000,000 addresses, 5,000,000,000 mobile devices...

### IPv6
👉  [340,282,366,920,938,463,463,374,607,431,768,211,456 addresses](https://googleblog.blogspot.com/2012/06/world-ipv6-launch-keeping-internet.html)

> Three hundred and forty undecillion, two hundred and eighty-two decillion, three hundred and sixty-six nonillion, nine hundred and twenty octillion, nine hundred and thirty-eight septillion, four hundred and sixty-three sextillion, four hundred and sixty-three quintillion, three hundred and seventy-four quadrillion, six hundred and seven trillion, four hundred and thirty-one billion, seven hundred and sixty-eight million, two hundred and eleven thousand, four hundred and fifty-six.

Every single computer connected to the internet has an IP address.



Go to: `216.58.217.174`

`ipconfig getifaddr en0`
