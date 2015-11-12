var gulp = require('gulp'),
    imageResize = require('gulp-image-resize'),
    data = require('./data/Media');

gulp.task('default', function () {

    gulp.src(__dirname + '/content/images/showcase/*.jpg')
    .pipe(imageResize({ 
      width : 800,
      upscale : false
    }))
    .pipe(gulp.dest(__dirname + '/content/images/med'));
});
