const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require("path");
const glob = require("glob");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: glob.sync("./docs/catalog/**/*.{js,scss}"),
  output: {
    filename: "main.js",
    path: path.join(__dirname, "./dist/")
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'docs/'),
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "docs"),
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: { minimize: true }
            },
            { loader: "postcss-loader" },
            { loader: "sass-loader" },
            {
              loader: 'sass-resources-loader',
              options: {
                // Provide path to the file with resources
                resources: './docs/catalog/_variables.scss',
              },
            },
          ]
        })
      }
    ]
  },
  plugins: [

    new ExtractTextPlugin({
      filename: "main.css"
    }),

    new CopyWebpackPlugin([
      {
        context: './',
        from: 'package.json',
        to: './package.json'
      },
      {
        context: './docs/assets',
        from: '**/*',
        to: './'
      },
    ]),

    new DashboardPlugin()

  ]
};
