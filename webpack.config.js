'use strict';

var path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    devServer: {
        contentBase: __dirname
    },
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.(woff2?|ttf|eot|svg|png|jpg)(\?.*)?$/, loaders: ['url'] },
            { test: /\.jade$/, loaders: ['jade'] },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.js$/, loader: 'babel-loader?presets[]=es2015'}
        ]
    }
};

if(process.env.NODE_ENV === 'development')
    module.exports.devtool = 'cheap-module-eval-source-map';
