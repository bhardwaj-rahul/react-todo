const webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: [

    "script-loader!jquery/dist/jquery.min.js",
    "script-loader!foundation-sites/dist/js/foundation.min.js",
    "./app/app.jsx"
  ],
  externals: {
      jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      "$": 'jquery',
      "jQuery": 'jquery'
    })
  ],
  output: {
    path:__dirname,
    filename:"./public/bundle.js"
  },
  resolve: {
    // path:__dirname,
    modules: [
      "node_modules",
      path.resolve(__dirname,"./app/components")
    ],
    alias: {
      //Greeter: path.resolve(__dirname, 'public/components/Greeter.jsx'),
      // TodoApp: path.resolve(__dirname, 'app/components/TodoApp.jsx'),
      applicationStyles: path.resolve(__dirname,'app/styles/app.css')

    },
    extensions: ["*",'.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
