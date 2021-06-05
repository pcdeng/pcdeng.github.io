// 一、创建 WebGL 上下文
const stage = document.getElementById('stage');
const gl = stage.getContext('webgl');

// 二、创建 WebGL 程序
// a. 创建定点着色器
const vertex = `
  attribute vec2 position;
  varying vec3 color;

  void main() {
    gl_PointSize = 1.0;
    color = vec3(0.5 + position * 0.5, 0.0);
    gl_Position = vec4(position * 0.5, 1.0, 1.0);
  }
`;
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertex);
gl.compileShader(vertexShader);

// b. 创建片元着色器
const fragment = `
  precision mediump float;
  varying vec3 color;

  void main() {
    gl_FragColor = vec4(color, 1.0);
  }
`;
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragment);
gl.compileShader(fragmentShader);

// 创建 WebGLProgram 对象
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

gl.useProgram(program);

// 三、将数据存入缓冲区
const points = new Float32Array([-1, -1, 0, 1, 1, -1]);
const bufferId = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

// 四、将缓冲区数据读取到 GPU
const vPosition = gl.getAttribLocation(program, 'position');
gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vPosition);

// 五、执行着色器程序完成绘制
gl.clear(gl.COLOR_BUFFER_BIT);
// 图元类型
/**
 * gl.POINTS
 * gl.LINES
 * gl.LINE_STRIP
 * gl.LINE_LOOP
 * gl.TRIANGLES
 * gl.TRIANGLE_STRIP
 * gl.TRIANGLE_FAN
 */
gl.drawArrays(gl.TRIANGLE_STRIP, 0, points.length / 2);
