const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

var filesToMove = [
        'css/**/*.css',
        'assets/**',
        'index.html'
    ];

gulp.task('js', () => {
    return gulp.src('js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('move', function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(filesToMove, { base: './' })
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js', 'move']);
