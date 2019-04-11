const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Aeolus',
        libraryTarget: 'umd'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: '输出文档'
        }),
      ]
}