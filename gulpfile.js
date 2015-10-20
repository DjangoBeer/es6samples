/*var gulp = require('gulp');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task('build', function () {
  return browserify({entries: 'es6/main.es6.js', debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);*/

var config = {
  src: 'js',
  dest: 'dist'
};
var es6FileGlob = '/**/*.es6.js';

var gulp = require('gulp');
var glob = require('glob');
var path = require('path');
var plugins = require('gulp-load-plugins')();
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

// Takes an array of bundles to run through browserify and babelify
function transpileES6Modules(browserifyFileEntries) {
  browserifyFileEntries.forEach(function(fileEntry) {
    var browserifyBundle = browserify({
        entries: [fileEntry.srcPath]
      })
      .transform(babelify);

    var finalStream = browserifyBundle.bundle()
      .on('log', function(e) {
        console.log(e);
        console.log("LOG");
      })
      .on('error', function(e) {
        console.log(e);
        console.log("ERRR");
      })
      .pipe(source(fileEntry.outputFilename));

    return finalStream.pipe(gulp.dest(fileEntry.dest));
  });
}

// This takes a source path and finds all files ending
// with .es6.js and creates the bundles to run through browserify
// and babelify
function handleES6Scripts(srcPath) {
  var browserifyFileEntries = [];

  var es6Filepaths = glob.sync(srcPath + es6FileGlob);
  es6Filepaths.forEach(function(filepath) {
    var filename = path.basename(filepath);
    var directoryOfFile = path.dirname(filepath);
    var relativeDirectory = path.relative(
      srcPath,
      directoryOfFile);

    // Create an object and add to the browserify bundle array
    browserifyFileEntries.push({
      srcPath: './' + filepath,
      outputFilename: filename,
      dest: path.join(config.dest, relativeDirectory)
    });
  });

  transpileES6Modules(browserifyFileEntries);
}

gulp.task('scripts:es6', function(cb) {
  handleES6Scripts(config.src);
  cb();
});