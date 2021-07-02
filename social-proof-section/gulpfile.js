const {series, src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
//Paths

// Compile SASS
function css(done){
    return src('./src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('./build/css'))
}
function watchFiles() {
    watch('src/scss/**/*.scss', css);
}
function images() {
    return src('src/images/**/*')
    .pipe(imagemin())
    .pipe(dest('./build/img'))
}

exports.css = css;
exports.images = images
exports.watchFiles = watchFiles;
