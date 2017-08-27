var webpack = require('webpack');

module.exports = {
    entry: './src/app.jsx',

    output: {
        filename: 'app.js',
        path: __dirname + '/public'
    },

    module : {
        loaders: [
            {
              test: /\.jsx?/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
              query: {
                "presets": ["es2015", "react"]
              }
            }
        ]  
    }
}