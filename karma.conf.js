// Karma configuration
// Generated on Mon Feb 09 2017 22:09:07 GMT+0300 (MSK)

const nodeRefillsPaths = require("node-refills").includePaths
const webpack = require('webpack')

module.exports = function(config) {
  config.set({
    entry: [
        'babel-polyfill'
    ],
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        { pattern: 'spec.bundle.js', watched: false },
        //{ pattern: 'src/**/!(spec|*.mock|*-mock|*.e2e|*.po|*.test).js', watched: false },
    ],

      preprocessors: {
          'spec.bundle.js': ['webpack', 'sourcemap'],
          'src/**/!(spec|*.mock|*-mock|*.e2e|*.po|*.test).js': ['webpack', 'coverage']
      },



    // list of files to exclude
    exclude: [
    ],

    plugins: [
      require("karma-webpack"),
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-sourcemap-loader"),
      require("karma-babel-preprocessor"),
      require("karma-ng-html2js-preprocessor"),
      require("karma-coverage")
    ],

    webpack: {
      plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          sassLoader: {
            includePaths: [...nodeRefillsPaths],
          }
        }
      })],
      devtool: 'inline-source-map',
      module: {
        loaders: [
            { test: /\.json$/, enforce: 'pre', exclude: /node_modules/, loader: 'json-loader'},
          {
            test: /\.js/,
            exclude: [/app\/lib/, /node_modules/],
            include: ['./src'],
            query: {
              presets: ['es2015', 'stage-0']
            },
            loader: 'babel-loader'
          },
          { test: /\.html$/, loader: 'raw' },
          { test: /\.(scss|sass)$/, loader: 'style-loader!css-loader!sass-loader' },
          { test: /\.css$/, loader: 'style-loader!css-loader' },
        ]
      }
    },

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    // test results reporter to use possible values: 'dots', 'progress' available
    // reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

      coverageReporter: {
          instrumenters: { isparta : require('isparta') },
          instrumenter: {
              'src/**/*.js': 'isparta'
          },
          dir: './coverage/',
          reporters: [
              {type: 'html'},
              {type: 'text-summary'}
          ]
      },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
