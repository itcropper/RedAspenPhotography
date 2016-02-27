var gulp = require('gulp'),
    imageResize = require('gulp-image-resize'),
    data = require('./data/Media'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify');

gulp.task('default', function () {

//    gulp.src(__dirname + '/content/images/showcase/*.jpg')
//    .pipe(imageResize({ 
//      width : 800,
//      upscale : false
//    }))
//    .pipe(gulp.dest(__dirname + '/content/images/med'));
});



gulp.task('js-concat', function(){
    return gulp.src(
            [
                'content/scripts/behavior/libs/jquery.min.js',
                'content/scripts/behavior/libs/galleria.min.js', 
                'content/scripts/behavior/libs/galleria.classic.js', 
                'content/scripts/behavior/libs/*.js',
                "content/scripts/Function1.js",
                "content/scripts/Module.js",
                "content/scripts/global.js",
                "content/scripts/home.js",
                "content/scripts/Contact.js",
                "content/scripts/gallery.js"
        ])
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('content/scripts/dist'))
        .pipe(gp_rename('scripts.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('content/scripts/dist'));
});

gulp.task('local', function(){
    return gulp.src(
            [
                'content/scripts/behavior/libs/jquery.min.js',
                'content/scripts/behavior/libs/galleria.min.js', 
                'content/scripts/behavior/libs/galleria.classic.js', 
                'content/scripts/behavior/libs/*.js',
                "content/scripts/Function1.js",
                "content/scripts/Module.js",
                "content/scripts/global.js",
                "content/scripts/home.js",
                "content/scripts/Contact.js",
                "content/scripts/gallery.js"
        ])
        .pipe(gp_concat('scripts.js'))
        .pipe(gulp.dest('content/scripts/dist'));
});


gulp.task('default', ['js-concat'], function(){});

gulp.task('local', ['local'], function(){});
