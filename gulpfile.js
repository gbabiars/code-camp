var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    templates = require('./gulp_ember_templates');

var jsDependencies = [
    'bower_components/jquery/jquery.js',
    'bower_components/handlebars/handlebars.runtime.js',
    'bower_components/ember/ember.js',
    'bower_components/ember-data/ember-data.js'
];

var cssDependencies = [
    'bower_components/bootstrap/dist/css/*.css'
];

var fontDependencies = [
    'bower_components/bootstrap/dist/fonts/**'
];

gulp.task('copy-assets', function() {
    gulp.src(jsDependencies)
        .pipe(gulp.dest('dist/js'));
    gulp.src(cssDependencies)
        .pipe(gulp.dest('dist/css'));
    gulp.src(fontDependencies)
        .pipe(gulp.dest('dist/fonts'));
    gulp.src('app/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
    gulp.src(['app/**/*.js', '!app/templates.js'])
        .pipe(jshint('./.jshintrc'))
        .pipe(jshint.reporter('default'));
});

gulp.task('templates', function() {
    gulp.src('app/templates/**/*.hbs')
        .pipe(templates())
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('app'));
});

gulp.task('styles', function() {
    gulp.src('app/styles/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
    gulp.src(['app/app.js', 'app/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('connect', connect.server({
    root: ['dist'],
    livereload: false
}));

gulp.task('watch', function() {
    gulp.watch('app/templates/**/*.hbs', ['templates']);
    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/styles/**/*.sass', ['styles']);
});

gulp.task('default', [
    'lint',
    'templates',
    'scripts',
    'styles',
    'copy-assets',
    'connect',
    'watch'
]);