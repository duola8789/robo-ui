'use strict';

const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
    return src('./theme/*.scss')
        .pipe(sass.sync())
        .pipe(
            autoprefixer({
                browsers: ['ie > 9', 'last 2 versions'],
                cascade: false
            })
        )
        .pipe(cssmin())
        .pipe(dest('./theme-lib/theme-robo'));
}

function move() {
    return src('./theme-lib/theme-robo/**.*').pipe(dest('./lib/theme-robo'));
}

function copyfont() {
    return src('./theme/fonts/**')
        .pipe(cssmin())
        .pipe(dest('./lib/theme-robo/fonts'));
}

function watchTheme() {
    watch('./theme/**/*.scss', series(compile));
}

exports.build = series(compile, move, copyfont);
exports.watch = watchTheme;
