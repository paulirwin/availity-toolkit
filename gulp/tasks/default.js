var gulp = require('gulp');

gulp.task('default', [
  'less',
  'copy',
  'build',
  'server:sync',
  'watch'
]);
