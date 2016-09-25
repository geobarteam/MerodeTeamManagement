/// <binding BeforeBuild='default' />
var gulp = require('gulp');
var clean = require('gulp-clean');

var destLibs = './wwwroot/libs/';
var destTypings = './wwwroot/typings/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src([destLibs, destTypings])
        .pipe(clean());
});

gulp.task("copy:libs", () => {
    gulp.src([
            'core-js/client/shim.min.js',
            'zone.js/dist/zone.js',
            'reflect-metadata/Reflect.js',
            'systemjs/dist/system.src.js',
            '@angular/core/bundles/core.umd.js',
            '@angular/common/bundles/common.umd.js',
            '@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http/bundles/http.umd.js',
            '@angular/router/bundles/router.umd.js',
            '@angular/forms/bundles/forms.umd.js',
            'rxjs/**/*.js'
           
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest(destLibs));
});

gulp.task("copy:typings", () => {
    gulp.src([
            '**/*',
           
    ], {
        cwd: "typings/**"
    })
        .pipe(gulp.dest(destTypings));
});

gulp.task('default', ['copy:libs', 'copy:typings']);