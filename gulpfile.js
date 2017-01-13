var gulp = require('gulp');
var s_watch = require('./semantic/tasks/watch');
var s_build = require('./semantic/tasks/build');

gulp.task('watch-ui', s_watch);
gulp.task('build-ui', s_build);

gulp.task('copy-jquery', function() {
   return gulp.src('./node_modules/jquery/dist/jquery.min.*')
    .pipe(gulp.dest('./assets/libs/'));
});

gulp.task('build', ['build-ui', 'copy-jquery']);
gulp.task('watch', 'watch-ui');
