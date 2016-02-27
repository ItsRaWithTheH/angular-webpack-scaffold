'use strict';

const webpack = require('webpack')
,     path = require('path')
,     HtmlWebpackPlugin = require('html-webpack-plugin')
,     ExtractTextPlugin = require('extract-text-webpack-plugin')
,     CopyWebpackPlugin = require('copy-webpack-plugin');

const ROOT = __dirname
,     APP = ROOT + '/app'
,     BUILD = ROOT + '/build';

const ENV = process.env.npm_lifecycle_event;

module.exports = function makeWebpackConfig () {
  /**
  *Config
  */
  var config = {};

  /**
  *Entry
  */
  if (ENV === 'test') {
    config.entry = {};
  } else if (ENV === 'dev') {
    config.entry = {
      vendor: APP + '/core/vendor.js',
      app: ['webpack/hot/dev-server', APP + '/core/bootstrap.js']
    };
  } else {
    config.entry = {
      vendor: APP + '/core/vendor.js',
      app: APP + '/core/bootstrap.js'
    };
  }

  /**
  *Output
  */
  if (ENV === 'test') {
    config.output = {};
  } else if (ENV === 'dev') {
    config.output = {
      path: APP,
      publicPath: 'http://localhost:8080/',
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js'
    };
  } else {
    config.output = {
      path: BUILD,
      publicPath: '/',
      filename: '[name].[hash].bundle.js',
      chunkFilename: '[name].[hash].bundle.js'
    };
 }

  /**
  *Devtool
  */
  if (ENV === 'test') {
    config.devtool = 'inline-source-map';
  } else if (ENV === 'dev') {
    config.devtool = 'eval-source-map';
  } else {
    config.devtool = 'source-map';
  }

  /**
  *Loaders
  */
  config.module = {
    preLoaders: [],
    loaders: [
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel?presets[]=es2015!eslint',
        exclude: /node_modules/
      },
      {
        // STYLE LOADER
        test: /\.scss$/,
        loader: ENV === 'test' ? 'null' : ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.css$/,
        loader: ENV === 'test' ? 'null' : ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
        loader : 'file?name=res/[name].[ext]?[hash]'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=5000&name=img/img-[hash:6].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.json/,
        loader: 'json'
      }
    ]
  };

  /**
  *Preloaders
  */
  if (ENV === 'test') {
    config.module.preLoaders.push({
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.spec\.js$/
      ],
      loader: 'isparta-instrumenter'
    });
  }

  config.plugins = [];

  if (ENV === 'test') {
  } else if (ENV === 'dev') {
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: APP + '/index.html',
        inject: 'body'
      }),
      new ExtractTextPlugin('[name].[hash].css'),
      new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
      new webpack.HotModuleReplacementPlugin()
    );
  } else {
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: APP + '/index.html',
        inject: 'body'
      }),
      new ExtractTextPlugin('[name].[hash].css'),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          dead_code: false,
          conditionals: false,
          unused: false
        },
        mangle: {
          except: ['$', 'exports', 'require']
        }
      })
    );
  }

  /**
  *Dev server
  */
  config.devServer = {
    contentBase: APP,
    stats: 'minimal'
  };

  /**
  *Eslint
  */
  config.eslint = {
    configFile: ROOT + '/.eslintrc'
  };

  return config;
}();
