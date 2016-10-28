---
layout: "post"
title: "🌐 Internet Simulator"
date: "2016-10-28 11:00"
category: "Unit 2 – The internet"
---

## Do Now (In Classroom)

Open the `code.org` invitation and join our group. 

## Signals & Protocols

Yesterday you made a device a set of rules. What you were developing is called a **protocol**.

> **Protocol** - A set of rules governing the exchange or transmission of data between devices.

> **Bit** - a single `binary digit`

We're going to use the [Internet Simulator](https://studio.code.org/s/netsim/stage/2/puzzle/1) to send 2-bit messages.

Login and see what you can figure out. Click all the buttons, try typing, see what happens.

## Internet Simulator
- **SHARED** wire between the two people.
- The wire can hold **only** a single state - `A` or `B` - and it can be set by either person at any time.
- At any time either person can read the wire to see which state it’s in

Neither partner is “sending” or receiving anything. You can always set or see the state of the wire.

Challenge: figure out a protocol to send messages back and forth. Your goal should be to develop a protocl that sends messages _as quickly as possible_. This is what's called a **bitrate**.

> **Bitrate** - the number of bits that are conveyed or processed per unit of time. e.g. 8 bits/sec.

## Assessment
A binary message consisting of four bits was sent to you by a friend. The message was supposed to be `ABAB`. Unfortunately, your friend set the bit on the wire _once every 2 seconds_, but you read the wire _once every second_.

Assuming that the first bit was sent and read at the same time, what message did you receive instead?
