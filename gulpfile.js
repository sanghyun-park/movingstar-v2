var gulp = require('gulp'),     
    sass = require('gulp-ruby-sass') 
    notify = require("gulp-notify") 
    bower = require('gulp-bower');

var config = {
     sassPath: './resources/sass/movs.scss',
     bowerDir: './bower_components' 
}

gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDir)) 
});

gulp.task('icons', function() { 
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*') 
        .pipe(gulp.dest('./public/assets/fonts')); 
});

gulp.task('css', function() { 
    return sass(config.sassPath, {
             style: 'compressed',
             loadPath: [
                 config.bowerDir + '/bootstrap-sass/assets/stylesheets',
                 config.bowerDir + '/font-awesome/scss',
             ]
        }) 
        .pipe(gulp.dest('./public/assets/css')); 
});

gulp.task('default', ['bower', 'icons', 'css']);
