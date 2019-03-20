const fs = require("fs")
const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = (env, argv) => {
    const isProd = argv.mode === "production"

    let examplePath = "examples/hilbert.js"
    if (argv.example) {
        const argvExample = `examples/${argv.example}.js`
        if (fs.existsSync(argvExample)) {
            examplePath = argvExample
        } else {
            throw new Error(`No example called "${argv.example}"`)
        }
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
