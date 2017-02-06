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

## 🗜 Compression

We "compress" txt 2 save time. Computers do it too, to save **time** and **space**.

Compression: represent data with fewer bits. Why might that be useful? Think about the [Bytes & File Sizes](http://bsk.education/AP-CSP/unit%204%20%E2%80%93%20representation/2017/02/03/bytes-file-sizes.html) research that you did.

## Decode Text

<iframe width='800' height='450' src='http://cache.vevo.com/assets/html/embed.html?video=USZM20900206' frameborder='0' allowfullscreen></iframe>

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
**Dictionary size:** 34 bytes   
**Total:** 145 bytes    
**Compression:** 15.75% !!
