/// <binding AfterBuild='default' />
var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var merge = require('merge-stream');

var libPath = './wwwroot/lib',
  angularPath = libPath + '/@angular',
  rxjsPath = libPath + '/rxjs',
  appjsPath = './wwwroot/app/**/*.{js,js.map}',
  cssPath = './wwwroot/css',
  testPath = './wwwroot/test';


gulp.task('default', [
  'copy:lib',
  'copy:bootstrap',
  'copy:client',
  'build:client', 
  'test']);

gulp.task('clean', function () {
    return del('wwwroot');
});

gulp.task('test', ['build:test', 'copy:test']);

gulp.task('build:client', function () {
  var tsProject = ts.createProject('client/tsconfig.json');
    var tsResult = gulp.src('client/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('wwwroot'));
});


gulp.task('build:test', function () {
  var tsProject = ts.createProject(path.resolve('./test/tsconfig.json'));
    var tsResult = gulp.src('./test/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(concat('specs.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(testPath));
});

gulp.task('copy:test',
    function() {
        gulp.src('./node_modules/jasmine-core/lib/jasmine-core/**/*',
            { base: './node_modules/jasmine-core/lib/jasmine-core' })
            .pipe(gulp.dest(testPath + '/lib/jasmine-core'));
        gulp.src('./test/index.html').pipe(gulp.dest(testPath));
    });

gulp.task('copy:lib', function () {

  var angular = gulp.src('./node_modules/@angular/**/*.js', { base: './node_modules/@angular' })
    .pipe(gulp.dest(angularPath));
  var rxjs = gulp.src('./node_modules/rxjs/**/*.js', { base: './node_modules/rxjs' })
    .pipe(gulp.dest(rxjsPath));

    gulp.src('./node_modules/core-js/client/shim.min.js').pipe(gulp.dest(libPath + '/core-js/client'));
    gulp.src('./node_modules/zone.js/dist/zone.js').pipe(gulp.dest(libPath + '/zone.js/dist'));
    gulp.src('./node_modules/reflect-metadata/Reflect.js').pipe(gulp.dest(libPath + '/reflect-metadata'));
    gulp.src('./node_modules/systemjs/dist/system.src.js').pipe(gulp.dest(libPath + '/systemjs/dist'));
    gulp.src('./node_modules/jquery/dist/jquery.min.js').pipe(gulp.dest(libPath + '/jquery'));
    gulp.src('./node_modules/jquery/dist/jquery.min.map').pipe(gulp.dest(libPath + '/jquery'));

  return merge(angular, rxjs);
});

gulp.task('copy:bootstrap', function () {
  var bootstrap = './node_modules/bootstrap/dist';
  gulp.src(bootstrap + '/css/bootstrap.min.css').pipe(gulp.dest(cssPath));
  gulp.src(bootstrap + '/js/bootstrap.min.js').pipe(gulp.dest(libPath + '/bootstrap'));

});

gulp.task('copy:client', function () {
  var content = gulp.src('./client/**/*')
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('watch', ['watch:client', 'watch:test']);

gulp.task('watch:client', function () {
  gulp.watch('client/**/*', ['copy:client', 'build:client']);
});

gulp.task('watch:test',
    function() {
        gulp.watch('test/**/*', ['test']);
    });








