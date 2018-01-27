var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('scss/main.scss')
        .pipe(sourcemaps.init()) //inicjalizacja map kodu źródłowego
        .pipe(sass().on('error',sass.logError)) // wyświetlanie błędów w konsoli
        .pipe(autoprefixer({
            browsers: ['last 4 versions']
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        })) //uruchomienie konwersji sass do css w formacie skompesowanym
        .pipe(sourcemaps.write()) //dopisanie map kodu źródłowego
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});