const fs = require("fs")
const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = (env, argv) => {
    const isProd = argv.mode === "production"
    const example = argv.example || "hilbert"
    const examplePath = `examples/${example}.js`

    if (!fs.existsSync(examplePath)) {
        throw new Error(`No example called "${argv.example}"`)
    }

    return {
        entry: {
            app: [
                "@babel/polyfill",
                path.resolve(__dirname, examplePath),
            ],
        },
        devtool: "cheap-source-map",
        output: {
            pathinfo: true,
            filename: "[name].min.js",
        },
        plugins: [
            isProd ? null : new webpack.HotModuleReplacementPlugin(),
            isProd ? null : new HtmlWebpackPlugin({
                title: `${example} - Tarpaulin`,
            }),
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
