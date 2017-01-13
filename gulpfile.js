var gulp = require('gulp');
var s_watch = require('./semantic/tasks/watch');
var s_build = require('./semantic/tasks/build');

gulp.task('watch-ui', s_watch);
gulp.task('build-ui', s_build);
