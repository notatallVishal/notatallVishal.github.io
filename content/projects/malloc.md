---
title: 💻 Dynamic Memory Allocator
---

```c
	int main() {
		printf("Hello world!\n");
		return 0;
	} 
```

In October of 2024, I decided to create my own dynamic memory allocator in #C , using syscalls from the Linux operating system. This project mimicked the functionality of `malloc()`, `free()`, `calloc()`, and `realloc()`, managing heap memory for any generic user application.

Key features of this memory allocator includes:
- Segregated explicit free lists for efficiently finding best-fit blocks
- Mini blocks to reduce external fragmentation
- Footer-less free nodes to reduce internal fragmentation
- Coalescing of adjacent free blocks 

This allocator was tested thoroughly through GDB, lots of invariant modeling-checking functions, and benchmark pseudo-code traces to verify memory safety and performance. 

>[!stats] Statistics
> Currently, the project sits at approximately **10000 KOps/s throughput** and **74% utilization** on generic use case scenarios. 
