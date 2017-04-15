// THIS FILE IS JUST FOR EXPLANATION. CAN BE DELETED

// configure for tests
var webpackConfig = require('./webpack.config.js');
module.exports = function(config){
  // set configs on karma
  config.set({
    browser: ['Chrome'],  // which browser to run tests in
    singleRun: true,
    framework: ['mocha'], // what framework to use for describe and it
    files: ['app/tests/**/*.test.jsx'], // globbing patern - test all files in tests or subfolder that end in *.test.jsx
    preprocessors: { // specify what to do with test files
      'app/tests/**/*.test.jsx': ['webpack','sourcemap']
    },
    reporters: ['mocha'], // checkbox for fail or pass
    client: {
      mocha:{
        timeout: '5000' // cancel tests after 5 seconds
      }
    },
    webpack: webpackConfig, // load in webpack
    webpackServer:{
      noInfo: true
    }
  });
}
