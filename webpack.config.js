var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'app/index.jsx'),
    output: {

        filename: 'bundle.js'
    },

    resolve: {
        extensions: [ '.js', '.jsx', '.es6']
    },

    module: {
        rules: [
            {test: /\.(js|jsx)$/, exclude: path.resolve(__dirname, './node_modules'), loader: 'babel-loader'},
            {test: /\.less$/, exclude: /node_modules/, loader: 'style-loader!css-loader!postcss-loader!less-loader'},
            {test: /\.css$/, exclude: /mode_modules/, loader: 'style-loader!css-loader!postcss-loader'},
            {test: /\.(png|gif|jpeg|jpg|bmp)$/i, loader: 'url-loader?limit=5000'},
            {test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000'}
        ]
    },

    plugins: [
        //html模版插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),

        // hot reloader
        new webpack.HotModuleReplacementPlugin(),

        // open the browser when server started
        new OpenBrowserWebpackPlugin({
            url: 'http://localhost:8080'
        }),

        // judge the environment is production or development
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        }),
    ],

    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true
    }
};