
'use strict';


var gulp = require('gulp');

// gulp.task('start', function () {
//   nodemon({
//     script: 'server.js'
//   , ext: 'js html'
//   , env: { 'NODE_ENV': 'development' }
//   })
// })

var options = {
  csspreprocessor: 'sass',
  uglify: {
    src: [
      './bower_components/jquery/dist/jquery.js',
      './bower_components/tether/dist/js/tether.js',
      './bower_components/bootstrap/dist/js/bootstrap.js',
      './js/main.js',
      './js/**/*.js',
    ]
  },
  copy: {
    './bower_components/font-awesome/fonts/*': './public/fonts/',
    './bower_components/bootstrap/dist/fonts/*': './public/fonts'
  }
};

require('igo').dev.setDefaultGulpTasks(gulp, options);
