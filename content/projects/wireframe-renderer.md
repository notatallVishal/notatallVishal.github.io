---
title: Wireframe Renderer on FPGA
---

```verilog
	initial begin 
		$display("Hello world!\n");
	end 
```

```python
	def main():
		print("Hello world!")
```

```c
	int main() {
		printf("Hello world!\n");
		return 0;
	}
```

Over 2024 Summer, me and a few buddies (+ the oversight of my digital design professor) worked with a Xilinx Spartan-7 Board to create an on board weak-projection wireframe renderer. The hardware descriptions were written in #SystemVerilog , with some other software elements written in #Python and #C.

This wireframe render has options to render, rotate, and move any flashed `.ply` mesh. We even implemented functionality to change the color of the wireframe itself.  
# Design

For this project, we created a `.ply` to `.coe` converter in #C to convert vertex and mesh data into two separate block RAM components compatible with Xilinx Vivado. 

Projection calculations then get calculated through the datapath on each of the 3-D vertex data to create their 2-D screen-space coordinates. Lines between vertices then get selected from the edge table and then drawn on screen with [Bresenham's Line Algorithm](https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm) onto a black-white frame-buffer. 

The frame-buffer's content is then displayed through HDMI (with the help of a VGA-HDMI conversion IP block provided by Xilinx).
## Python Simulation

Memory constraints on the RealDigital Boolean Board posed a significant challenge, particularly in achieving precise vertex and screen-space coordinates. We developed a simulated prototype in #Python to analyze the error loss across different bitwidths in a fixed-point system.

| ![[wireframe-renderer-prec2.png]] | ![[wireframe-renderer-prec5.png]] |
| --------------------------------- | --------------------------------- |
| *Precision of 2 bits fixed-point* | *Precision of 5 bits fixed-point* |
# See Also
[[opengl|OpenGL Renderer in C]]
