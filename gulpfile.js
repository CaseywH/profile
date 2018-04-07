const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  gulp.src('public/css/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});

gulp.task('watch', function(){
  gulp.watch('public/css/style.css', ['styles']);
});
