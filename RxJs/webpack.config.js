const path = require('path');

module.exports = {
  entry: {
    app: './src/main.ts' 
  },
  devtool: "inline-source-map",
  output: {
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}