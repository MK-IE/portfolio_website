const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["babel-polyfill", "./src/javascript/index.js"],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(svg|png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: "webfonts",
                    outputPath: "css/webfonts",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};
