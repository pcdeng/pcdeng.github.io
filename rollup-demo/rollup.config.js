import json from 'rollup-plugin-json';
const typescript = require('rollup-plugin-typescript2')

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'demo'
  },
  plugins: [
    json(),
    typescript(),
  ]
}
