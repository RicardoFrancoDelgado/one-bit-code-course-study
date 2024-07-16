module.exports = {
  entry: {
    index: './src/index.js', // por padrão ele utiliza o nome de entrada na saída
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/, 
      use: ['style-loader', 'css-loader']
    }]
  }
}

