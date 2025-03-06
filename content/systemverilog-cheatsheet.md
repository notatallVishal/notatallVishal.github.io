---
title: 📄 A Quick SystemVerilog Cheatsheet
draft: "true"
---
# A Brief Introduction

The #SystemVerilog programming language it a toolset that allows user to describe hardware *logic* and *verify* their designs.  

## Hardware Description Languages vs. Programming Languages

SystemVerilog is a hardware description language, not like your typical imperative programming language like C or Python is. There are some key points to note:

1. Parallelism is an *intrinstic* property in hardware. When two operations, gates, or any combinational component is written out one below another, they happen **at the same time**, so to speak. Remember that everything's connected, and you'll need state machines to make things sequential.
2. Testing your program involves creating a new module that manually drives the inputs of your design. You can't really make an executable to compute the outputs of your design easily. 

>[!warning] In fact, testing designs can be extremely cumbersome and sometimes may involve SAT algorithms and model-checking. 

## Modular Design

A key feature of SystemVerilog is that your designs can be instantiated as modules.