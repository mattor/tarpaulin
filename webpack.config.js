const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        app: [
            "@babel/polyfill",
            path.resolve(__dirname, "src/demo/mandelbrot.js"),
        ],
    },
    devtool: "cheap-source-map",
    output: {
        pathinfo: true,
        filename: "bundle.js",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    "babel-loader",
                ],
                include: path.join(__dirname, "src"),
            },
        ],
    },
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty",
    },
}
