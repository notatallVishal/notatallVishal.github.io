---
title: OpenGL Renderer in C
---

```c
	int main() {
		printf("Hello world!\n");
		return 0;
	} 
```

While I was working on the [[wireframe-renderer|Weak Projection Wireframe Render]] in SystemVerilog, I decided to learn more about computer graphics. That's when I found Joey de Vires' [Learn OpenGL](https://learnopengl.com/), and I took the challenge to implement this in #C. It's implemented on `glad` and `glfw`. 

As of the end of Summer 2024 I implemented support for:
- Custom `.ply` mesh imports 
- Textures and materials
- Camera Movement and post-processing effects 

I'd love to:
- [ ] create a Graphical User Interface
- [ ] implement Bloom 
- [ ] clean up some more of the code 😅

before uploading the first build to the public.