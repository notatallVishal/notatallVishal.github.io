---
title: 🔐USB v2 Spec Recreation
---

```verilog
	initial begin 
		$display("Hello world!\n");
	end 
```

In November 2024, I decided to recreate a subset of the USB v2 specification in #SystemVerilog. The simulated model can send and request packets of data through `IN` and `OUT` transactions. 

In this project, I learned:
- How to write tight interconnect between multiple modules. 
- How to model different levels of protocol abstraction in SystemVerilog, by jumping between differential signaling and digital abstractions.
- The math and engineering encryption, by implementing cyclic redundancy checkers, NRZI encoding/decoding schemes, and bit stuffing.