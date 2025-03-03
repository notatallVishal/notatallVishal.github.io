---
title: Tetris on FPGA
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

My FPGA Tetris game implements the following:
- Collision, rotation, and movement of pieces.
- Random piece selection and next piece previews. 
- VGA display output through a self-made driver. 
- A scoring and level system where games go faster after a level is cleared.

This was my first self-made medium-scale SystemVerilog project, and *man*... did it feel cool to make. 