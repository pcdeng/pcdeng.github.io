const rc = rough.canvas(document.getElementById('stage'));
const ctx = rc.ctx;
ctx.translate(256, 256);
ctx.scale(1, -1);

const hillOpts = {
  roughness: 2.8,
  stokeWidth: 2,
  fill: 'blue',
};

// rc.path('M76 256 L176 156 L276 256', hillOpts);
// rc.path('M236 256 L336 156 L436 256', hillOpts);
rc.path('M-180 0 L-80 100 L 20 0', hillOpts);
rc.path('M -20 0 L 80 100 L 180 0', hillOpts);

// rc.circle(256, 106, 105, {
//   stroke: 'red',
//   strokeWidth: 4,
//   fill: 'rgba(255, 255, 0, 0.4)',
//   fillStyle: 'solid'
// });

rc.circle(0, 150, 105, {
  stroke: 'red',
  strokeWidth: 4,
  fill: 'rgba(255, 255, 0, 0.4)',
  fillStyle: 'solid',
});
