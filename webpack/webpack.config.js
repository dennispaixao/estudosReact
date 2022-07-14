const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:'production',
    devtool:'source-map',
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'bundler.js'
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
   },
    resolve:{
    extensions:['js','jsx'],
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]

    },
    resolve:{
        extensions:['.js','.jsx'],
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:"./src/index.html",
            filename: "./index.html"
        })
    ]
}