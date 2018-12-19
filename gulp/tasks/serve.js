'use strict';

require('require-dir')('./');

gulp.task('dev', gulp.series('scripts', 'styles', gulp.parallel('html', 'fonts', 'images', 'watch')));

gulp.task('serve', gulp.series('dev', function(){

    browserSync.init(null, {
        proxy: "http://localhost:" + process.env.SERVER_PORT,
        files: ["./dist/"],
        browser: "google chrome",
        port: 7000
    });

    gulp.watch('./dist/index.html').on('change', browserSync.reload);

}));

