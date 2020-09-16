const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniExtraCssPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new MiniExtraCssPlugin({
            filename: "css/[name].[contentHash].css",
        }),
        new CleanWebpackPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "javascript/bundle.[contentHash].js",
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: [MiniExtraCssPlugin.loader, "css-loader"],
            },
        ],
    },
});
