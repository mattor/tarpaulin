const fs = require("fs")
const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = (env, argv) => {
    const example = argv.example || "hilbert"
    const examplePath = `src/${example}.js`

    if (!fs.existsSync(examplePath)) {
        throw new Error(`No example called "${argv.example}"`)
    }

    return {
        entry: {
            example: [
                "@babel/polyfill",
                path.resolve(__dirname, examplePath),
            ],
        },
        devtool: "cheap-source-map",
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                title: `${example} - Tarpaulin`,
            }),
        ],
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
        resolve: {
            alias: {
                "tarpaulin": path.resolve("../src/index.js"),
            },
        },

    }
}
