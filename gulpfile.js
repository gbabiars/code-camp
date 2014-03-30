var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    templates = require('./gulp_ember_templates');

var jsDependencies = [
    'bower_components/jquery/jquery.js',
    'bower_components/handlebars/handlebars.runtime.js',
    'bower_components/ember/ember.js',
    'bower_components/ember-data/ember-data.js'
];

var assets = jsDependencies.concat('app/index.html');

gulp.task('copy-assets', function() {
    gulp.src(assets)
        .pipe(gulp.dest('dist'));
})

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

gulp.task('sass', function() {
    gulp.src('app/styles/app.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/styles'));
});

gulp.task('scripts', function() {
    gulp.src(['app/app.js', 'app/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('connect', connect.server({
    root: ['dist'],
    livereload: false
}));

gulp.task('watch', function() {
    gulp.watch('app/templates/**/*.hbs', ['templates']);
    gulp.watch('app/**/*.js', ['scripts']);
});

gulp.task('default', [
    'lint',
    'templates',
    'scripts',
    'sass',
    'copy-assets',
    'connect',
    'watch'
]);