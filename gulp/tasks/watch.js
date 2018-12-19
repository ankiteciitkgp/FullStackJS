'use strict';

gulp.task('watch', function(callback){
    gulp.watch('client/src/**/*.js', gulp.series('lint', 'scripts'));
    gulp.watch(['client/scss/**/*.scss','client/src/**/*.scss'], gulp.series('styles'));
    gulp.watch('client/**/*.html', gulp.series('html', 'scripts'));
    callback();
});