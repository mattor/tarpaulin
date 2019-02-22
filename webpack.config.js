const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = (env, argv) => {
    const isProd = argv.mode === "production"

    return {
        entry: {
            app: [
                "@babel/polyfill",
                path.resolve(__dirname, "src/demo/mandelbrot.js"),
            ],
            tarpaulin: [
                path.resolve(__dirname, "src/index.js"),
            ],
        },
        devtool: "cheap-source-map",
        output: {
            pathinfo: true,
            filename: "[name].min.js",
        },
        plugins: [
            isProd ? null : new webpack.HotModuleReplacementPlugin(),
            isProd ? null : new HtmlWebpackPlugin(),
        ].filter(Boolean),
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
            ],
        },
    }
}
