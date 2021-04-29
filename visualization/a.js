const data = {
    data: {
        name: "中国",
    },
    children: [{
        data: {
            name: "广东",
        },
        children: [{
            data: {
                name: '广州'
            },
            value: 69,
            x: 200,
            y: 400,
            r: 200,
        }, {
            data: {
                name: '深圳'
            },
            value: 69,
            x: 600,
            y: 400,
            r: 200,
        }],
        value: 69,
        x: 400,
        y: 400,
        r: 400,
    }],
    value: 69,
    x: 400,
    y: 400,
    r: 400,
};

const TAU = 2 * Math.PI;

function draw(ctx, node, { fillStyle = 'rgba(0, 0, 0, 0.2)', textColor = 'white' } = {}) {
    const children = node.children;
    const { x, y, r } = node;
    ctx.fillStyle = fillStyle;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU);
    ctx.fill();
    if (children) {
        for (let i = 0; i < children.length; i++) {
            draw(ctx, children[i]);
        }
    } else {
        const name = node.data.name;
        ctx.fillStyle = textColor;
        ctx.font = '1.5rem Arial';
        ctx.textAlign = 'center';
        ctx.fillText(name, x, y);
    }
}

const vertex = `
    attribute vec2 position;
    void main() {
        gl_PointSize = 1.0;
        gl_Position = vec4(position, 1.0, 1.0);
    }
`;

const fragment = `
    precision mediump float;
    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
`;

const points = new Float32Array([
    -1, -1,
    0, 1,
    1, -1,
]);