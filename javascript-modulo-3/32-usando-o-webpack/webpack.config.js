const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './src/index.js', // por padrão ele utiliza o nome de entrada na saída
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/, 
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  },
  plugins: [
    new MiniCssExtractPlugin() // instanciação
  ]
}

