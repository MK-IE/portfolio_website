const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devtool: "none",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "javascript/bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(svg|png|jpe?g|gif|woff|woff2|eot|ttf|otf|pdf)$/,
                loader: "file-loader"
            },
        ],
    },

    devServer: {
        contentBase: path.resolve(__dirname, "build"),
    },
});
