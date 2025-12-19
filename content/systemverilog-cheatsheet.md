---
title: 📄 An Extensive SystemVerilog Cheatsheet
draft: "true"
---
# A Brief Introduction

The #SystemVerilog programming language it a toolset that allows users to describe hardware *logic* and *verify* their designs.  This brief introduction will guide you through the basics of digital design with a focus on describing them through `SystemVerilog`.

## Hardware Description Languages vs. Programming Languages

SystemVerilog is a hardware description language, not like your typical imperative programming language like C or Python is. There are some key points to note:

1. Parallelism is an *intrinsic* property in hardware. When two operations, gates, or any combinational component is written out one below another, they happen **at the same time**, so to speak. Remember that everything's connected, and you'll need state machines to make things sequential.

2. Testing your program involves creating a new module that manually drives the inputs of your design. You can't really make an executable to compute the outputs of your design easily. 

>[!warning] In fact, testing designs can be extremely cumbersome and sometimes may involve SAT algorithms and model-checking. 

3. Variables in hardware description languages (`logic`, `bit`, `wire`) represent individual singular bits and interconnections rather than a processor defined word (`int` in C or Python).

## Modular Design

A key feature of SystemVerilog is that your designs can be instantiated as modules. Think of modules as units of reuse, much like functions are to an imperative programming language (of course, remember that these units are laid in parallel). 

Modules in SystemVerilog are defined like this:
```systemverilog
module halfAdder (
	//portlist
	input logic a, b,
	output logic sum, carry
);
//body 
endmodule: halfAdder 
```
... and are used within another module like this:
```systemverilog
module systemTop (
  input logic in_a, in_b;
  output logic sum
);
	logic c, carry; 
	halfAdder myHalfAdder (.b(in_a), .a(in_b), .sum(c), .carry);
	halfAdder yourHalfAdder (.a(c), .b(in_b), .sum, .carry());
endmodule: systemTop
```

Here's some things to note:
* In SystemVerilog, blocks of code typically have some sort of `begin` and `end` keyword (in this case `module` and `endmodule`) that act much like curly braces in C.
* Note that variables have different namespaces and can be connected in any sort of way. The port connection `.a(c)` means that `yourHalfAdder`'s `a` is connected to `systemTop`'s `c`. 

>[!info] `.sum` is equivalent to `.sum(sum)`!

>[!bug] Only **outputs** can optionally be disconnected.

The upshot with creating modules is that you can easily replicate functional units, and modify those units with the whole system. Debugging efforts become easier when creating more and more modules. Now that we know what modules are -- let's see how we can make modules that do useful computation.
### Gate Descriptions for Combinational Circuits

A ==combinational circuit== is one that generates an output that is a solely a function its inputs, much like a mathematical function $\vec{y} = f(\vec{x})$. Basic constituents of combinational circuits are called ==logic gates==, which you typically know as `and`, `or`, `nor`, `nand`, `xor`. Use the power of Boolean Algebra and encoding, to create some complex combinational functions!

In SystemVerilog, instantiating a gate is extremely similar to instantiating a module:
```systemverilog
and NAME (OUTPUT, INPUT1, INPUT2, INPUT3, ...);
```

>[!question]- Try to create a `halfAdder` circuit with SystemVerilog gates.
> ```systemverilog
> module halfAdder (
> 	input logic a, b,
> 	output logic sum, cout
> );
> 	xor x1 (sum, a, b);
> 	and a2 (cout, a, b);
> endmodule: halfAdder
>```

>[!question]- Try to create a `fullAdder` circuit with SystemVerilog gates. You may also use the `halfAdder` module. 
> ```systemverilog
> module fullAdder (
> 	input logic a, b, cin
> 	output logic sum, cout
> );
> 	 logic x, y, z;
> 	halfAdder ha (.a, .b, .sum(x), .cout(y));
> 	xor x1 (sum, x, cin);
> 	and a2 (z, sum, cin);
> 	or o3 (cout, z, y);
> endmodule: fullAdder
>```

### Procedural Descriptions

While creating gates might be useful, it can often be cumbersome. We can simplify the process with two tools, `always_comb` and `assign` statements.

```systemverilog
assign y = a ^ c | ~b & d && x;

always_comb begin : name 
	if(b) begin 
		y = 1'b0; //1-bit 0.
	end 
	else begin 
		y = a & b ^ ~c;
	end 
end
```

Both boolean and logical operators work like they do in C.
### Procedural Descriptions for Sequential Designs 

## Testing your Design 

## Beginner Tips for Style



# Advanced Procedural Designs 
# Design Verification
# Formal Verification with SystemVerilog Assertions 