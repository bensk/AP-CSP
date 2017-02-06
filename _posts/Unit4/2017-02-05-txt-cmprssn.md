---
layout: "post"
title: "🗜 txt cmprssn"
date: "2017-02-06 22:53"
category: "Unit 4 – Representation"
---

## 🎯 Learning Targets
`AP` I can analyze how data representation, storage, security, and transmission of data involve computational manipulation of information.

`AP` I can use computers to process information, find patterns, and test hypotheses about digitally processed information to gain insight and knowledge.

I can develop a strategy (heuristic algorithm) for compressing text.

## Do now

> SMH. LOL.

Why do we use abbreviations in texts?

## 🗜Text Compression

We "compress" txt 2 save time. Computers do it too, to save **time** and **space**.

Compression: represent data with fewer bits. Why might that be useful? Think about the [Bytes & File Sizes](http://bsk.education/AP-CSP/unit%204%20%E2%80%93%20representation/2017/02/03/bytes-file-sizes.html) research that you did.

## Decode Text

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/253237587&amp;color=7f1ae5&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

> I wish I was a little bit taller    
> I wish I was a baller    
> I wish I had a girl who looked good, I would call her    
> I wish I had a rabbit in a hat with a bat    
> And a six four Impala    

| Symbol | Value    |
|--------|----------|
| ☀      | `I_`     |
| ☂      | `wish_`  |
| ☃      | `aller_` |
| ☄      | `was_a_` |
| ★      | `had_a_` |
| ☆      | `_a_`    |

> ☀☂☀☄little_bit_t☃☀☂☀☄b☃☀☂☀★girl_who_looked_good,_☀would_call_her_☀☂☀★rabbit_in☆hat_with☆bat_And☆six_four_Impala

**Original text size:** 172 bytes    
**Compressed text size:** 111 bytes

So we saved 61 bytes, right?    

**WRONG**

We also need to let our recipient _decode_ our message.

**Dictionary size:** 34 bytes   
**Total:** 145 bytes    
**Compression:**  27 bytes, or 15.75% !!

## 🗜 txt cmprssn

Choose a text from English class and try to `compress` it.

Your goal is to get the **highest** compression rate. Keep note of your strategy.

What's the best compression _scheme_?

## Heuristic

>  a problem solving approach (algorithm) to find a satisfactory solution where finding an optimal or exact solution is impractical or impossible.

What kind of scenarios is our heuristic good for?

You could very easily create a "compressed" file that's **BIGGER** than the original!

## Questions
- What did all groups’ processes for compression have in common?
- Will following this process always lead to the same compression?
- If you send the compressed poem, would your friend will be able to read it? Why is the dictionary important?
- Why do you want to compress anything? What’s the point?

**Case Study**

A simple message has been compressed below:

![](https://code.org/curriculum/docs/csp/U1L13-compressed-message.png)

What was the original message?

What was the compression rate?
