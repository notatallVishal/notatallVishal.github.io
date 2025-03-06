---
title: 🕹️ Tetris on FPGA
---
```verilog
	initial begin 
		$display("Hello world!\n");
	end 
```

```c
	int main() {
		printf("Hello world!\n");
		return 0;
	} 
```

At end of my first year, I borrowed an Altera Cyclone-IV board from my lab and decided to recreate NES Tetris with #SystemVerilog.  To help with the process, I created a `.bmp` (bitmap image) to `.mif` (memory initialization file) conversion tool in #C to easy create a sprite map memory block on my FPGA without having to manually type HEX RGB values. 

While making this Tetris game, I:
- Implemented collision, rotation, and movement of pieces.
- Designed a random piece selector which allows the user to preview the next piece. 
- Created a driver to VGA display output.
- Developed a scoring and level system where games go faster after a level is cleared.

This was my first self-made medium-scale SystemVerilog project, and *man*... did it feel cool to make. Being able to start with nothing but `1s` and `0s` and bend them to your will is absolutely crazy. 