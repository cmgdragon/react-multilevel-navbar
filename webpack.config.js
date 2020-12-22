const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
          }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            minify: false
        })
    ],
    devServer: {
        port: 1234,
        open: true
    }
}