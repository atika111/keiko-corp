const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');

// Task to combine CSS files
gulp.task('css', function() {
    return gulp.src([
            'css/bootstrap.css',
            'css/owl.transitions.css',
            'css/owl.carousel.css',
            'css/animate.css',
            'css/main.css'
        ])
        .pipe(concat('styles.css')) // Combine CSS files into one
        .pipe(gulp.dest('dist/css')); // Save combined file to destination folder
});

// Task to combine JavaScript files
gulp.task('js', function() {
    return gulp.src([
            'js/jquery.js',
            'js/ajaxchimp.js',
            'js/owl.carousel.min.js',
            'js/wow.js',
            'js/parallax.js',
            'js/nicescroll.js',
            'js/main.js',
            'js/scrollTo.js'
        ])
        .pipe(concat('scripts.js')) // Combine JS files into one
        .pipe(gulp.dest('dist/js')); // Save combined file to destination folder
});

// Task for image optimization
gulp.task('images', function() {
    return gulp.src('img/*')
        .pipe(imagemin()) // Optimize images
        .pipe(gulp.dest('dist/img')); // Save optimized images to destination folder
});

// Task for development build (includes sourcemaps)
gulp.task('dev', gulp.series('css', 'js', 'images'));

// Task for production build (minify and rename files)
gulp.task('prod', function() {
    return gulp.src('dist/**/*.css')
        .pipe(rename({suffix: '.min'})) // Add .min suffix to minified files
        .pipe(gulp.dest('dist'));
});

// Default task - run 'dev' task by default
gulp.task('default', gulp.series('dev'));
