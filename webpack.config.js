const path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js",
    },
    resolve: {
        modules: [path.join(__dirname, "src"), "node_modules"],
        alias: {
            react: path.join(__dirname, "node_modules", "react"),
        },
        extensions: [".js", "jsx", ".json"],
    },
    devServer: {
        port: "3001",
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
};
