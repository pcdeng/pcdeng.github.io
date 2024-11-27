let data={data:{name:"中国"},children:[{data:{name:"广东"},children:[{data:{name:"广州"},value:69,x:200,y:400,r:200},{data:{name:"深圳"},value:69,x:600,y:400,r:200}],value:69,x:400,y:400,r:400}],value:69,x:400,y:400,r:400},TAU=2*Math.PI;function draw(e,a,{fillStyle:t="rgba(0, 0, 0, 0.2)",textColor:l="white"}={}){let i=a.children,{x:n,y:r,r:o}=a;if(e.fillStyle=t,e.beginPath(),e.arc(n,r,o,0,TAU),e.fill(),i)for(let a=0;a<i.length;a++)draw(e,i[a]);else{let t=a.data.name;e.fillStyle=l,e.font="1.5rem Arial",e.textAlign="center",e.fillText(t,n,r)}}let vertex=`
    attribute vec2 position;
    void main() {
        gl_PointSize = 1.0;
        gl_Position = vec4(position, 1.0, 1.0);
    }
`,fragment=`
    precision mediump float;
    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
`,points=new Float32Array([-1,-1,0,1,1,-1]);