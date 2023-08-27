const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: [
        // entry point of our app
        './client/index.js',
      ],

    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js',
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './client/index.html',
      }),
    ],

    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
            ]
            }
          },
        },
        {
          test: /.(css|scss)$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        }
      ],
    }

}