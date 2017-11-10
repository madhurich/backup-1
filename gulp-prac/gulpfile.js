const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('message', () => {
    return console.log('your message task is running');
});


gulp.task('html', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// gulp.task('jsmin', () => {
//     gulp.src('src/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'))
// });

//minify the js files and concat them then put them in 'main.js'
gulp.task('concat', () => {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', () => {
    gulp.watch('src/js/*.js', ['concat']);
    gulp.watch('src/images/*', ['images']);
    gulp.watch('src/*.html', ['html']);
});

gulp.task('default', ['concat', 'html', 'message', 'images', 'watch']);