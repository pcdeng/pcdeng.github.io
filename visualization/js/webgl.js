let stage=document.getElementById("stage"),gl=stage.getContext("webgl"),vertex=`
  attribute vec2 position;
  varying vec3 color;

  void main() {
    gl_PointSize = 1.0;
    color = vec3(0.5 + position * 0.5, 0.0);
    gl_Position = vec4(position * 0.5, 1.0, 1.0);
  }
`,vertexShader=gl.createShader(gl.VERTEX_SHADER);gl.shaderSource(vertexShader,vertex),gl.compileShader(vertexShader);let fragment=`
  precision mediump float;
  varying vec3 color;

  void main() {
    gl_FragColor = vec4(color, 1.0);
  }
`,fragmentShader=gl.createShader(gl.FRAGMENT_SHADER);gl.shaderSource(fragmentShader,fragment),gl.compileShader(fragmentShader);let program=gl.createProgram();gl.attachShader(program,vertexShader),gl.attachShader(program,fragmentShader),gl.linkProgram(program),gl.useProgram(program);let points=new Float32Array([-1,-1,0,1,1,-1]),bufferId=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,bufferId),gl.bufferData(gl.ARRAY_BUFFER,points,gl.STATIC_DRAW);let vPosition=gl.getAttribLocation(program,"position");gl.vertexAttribPointer(vPosition,2,gl.FLOAT,!1,0,0),gl.enableVertexAttribArray(vPosition),gl.clear(gl.COLOR_BUFFER_BIT),gl.drawArrays(gl.TRIANGLE_STRIP,0,points.length/2);