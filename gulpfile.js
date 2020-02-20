'use strict';

/**
 The custom gulp file to build and serve the web site.
 */
//The main gulp task creator
var gulp = require('gulp');
//SASS transpilation to CSS
var sass = require('gulp-sass');
//Refresh the browser when the files are updated.
var browserSync = require('browser-sync').create();

//Minify JS codes
var uglify = require('gulp-uglify');

//Filter files by extension and pass them to a callback
var gulpIf = require('gulp-if');

//Minify CSS codes
var cssnano = require('gulp-cssnano');

//CSS sourcemaps to find the class definistions easily
var sourcemaps = require('gulp-sourcemaps');

//Optimize images
var imagemin = require('gulp-imagemin');

//Caches the optimized images not to optimize them with every build/run
var cache = require('gulp-cache');

//Delete the given folder contents for clean up
var del = require('del');
//Run multiple tasks concurrently
var runSequence = require('run-sequence');

//Handles AngularJS dependency injection
var ngAnnotate = require('gulp-ng-annotate');

//Renames files
var rename = require('gulp-rename');

//Injects the JS and CSS file paths into the index.html file
var inject = require("gulp-inject");
//Concat(merge) files
var concat = require('gulp-concat');

//Reads bower files from bower.json to process them
var bowerMain = require('main-bower-files');

//Filter files by extension and return the paths.
var gulpFilter = require('gulp-filter');

//Minify HTML files
var htmlmin = require('gulp-htmlmin');

//Concatenates AngugularJS templates
var angularTemplatecache = require("gulp-angular-templatecache");

//This will redirect all requests to index.html file to allow seo friendly urls like tld/sports intead of tld/#/sports
var historyApiFallback = require('connect-history-api-fallback');

var babel = require('gulp-babel');

var minify = "yes";
var isServe = "false";

var conf = {
    srcDir: 'src/',
    appStylesDir: 'src/app/',
    destDir: 'assets/',
    cssDestDir: 'assets/css/',
    imagesDestDir: 'assets/images/',
    imagesSrcDir: 'src/images/',
    fontsSrcDir: ['src/fonts/*', 'assets/vendor/bootstrap-sass/assets/fonts/bootstrap/*', 'assets/vendor/bootstrap/dist/fonts/*'],
    fontsDestDir: 'assets/fonts/',
    jsSrcDir: 'src/app/',
    jsDestDir: 'assets/scripts/'
};

var bowerConf = {
    "overrides": {
        "admin-lte": {
            "main": [
                "**/AdminLTE.css",
                "**/adminlte.js",
                "**/_all-skins.min.css",
                "**/jquery-jvectormap-1.2.2.min.js",
                "**/jquery-jvectormap-world-mill-en.js",
                "**/bootstrap3-wysihtml5.all.min.js",
                "**/bootstrap3-wysihtml5.min.css",
                "**/slider.css",
                "**/bootstrap-timepicker.min.css",
                "**/iCheck/**/_all.css",
                "**/iCheck/**/futurico.css",
                "**/iCheck/**/polaris.css",
                "**/icheck.min.js",
                "**/jquery.inputmask.js",
                "**/jquery.inputmask.date.extensions.js",
                "**/jquery.inputmask.extensions.js"
            ],
            "dependencies": {
                "jquery": "^3.2.1",
                "jquery-ui": "1.11.4",
                "jquery-slimscroll": "slimscroll#^1.3.8",
                "jquery-sparkline": "^2.1.3",
                "bootstrap": "^3.3.7",
                "font-awesome": "^4.7.0",
                "moment": "^2.18.1",
                "chart.js": "1.0.*",
                "datatables.net": "^1.10.15",
                "datatables.net-bs": "^2.1.1",
                "fastclick": "^1.0.6",
                "Flot": "flot#^0.8.3",
                "fullcalendar": "^3.4.0",
                "ion.rangeSlider": "ionrangeslider#^2.2.0",
                "jvectormap": "^1.2.2",
                "jquery-knob": "^1.2.13",
                "morris.js": "^0.5.1",
                "PACE": "pace#^1.0.2",
                "select2": "^4.0.3",
                "Ionicons": "ionicons#^2.0.1",
                "inputmask": "jquery.inputmask#^3.3.7",
                "bootstrap-colorpicker": "^2.5.1",
                "bootstrap-datepicker": "^1.7.0",
                "bootstrap-daterangepicker": "^2.1.25",
                "bootstrap-timepicker": "^0.5.2",
                "bootstrap-slider": "*"
            }
        },
        "bootstrap": {
            "main": [
                "**/bootstrap.min.css",
                "**/bootstrap.min.js"
            ]
        },
        "mocha": {
            "ignore": true
        },
        "jquery-slimscroll": {
            "main": "**/jquery.slimscroll.min.js"
        },
        "inputmask": {
            "ignore": true
        },
        "font-awesome": {
            "main": [
                "**/font-awesome.min.css",
                "**/fontawesome-webfont.eot",
                "**/fontawesome-webfont.woff2",
                "**/fontawesome-webfont.woff",
                "**/fontawesome-webfont.ttf",
                "**/fontawesome-webfont.svg"
            ]
        },
        "Flot": {
            "main": [
                "**/jquery.flot.js",
                "**/jquery.flot.resize.js",
                "**/jquery.flot.pie.js",
                "**/jquery.flot.categories.js"
            ]
        },
        "select2": {
            "main": [
                "**/select2.min.css",
                "**/select2.full.min.js"
            ]
        },
        "bootstrap-colorpicker": {
            "main": [
                "**/bootstrap-colorpicker.min.css",
                "**/bootstrap-colorpicker.min.js"
            ]
        },
        "ckeditor": {
            "ignore": true
        }
    }
};

gulp.task('bower', function () {

    var jsFilter = gulpFilter('**/*.js', {restore: true});
    var cssFilter = gulpFilter(['**/*.css'], {restore: true});
    var fontFilter = gulpFilter(['**/*.eot', '**/*.woff', '**/*.svg', '**/*.ttf'], {restore: true});
    var imageFilter = gulpFilter(['**/*.gif', '**/*.png', '**/*.svg', '**/*.jpg', '**/*.jpeg'], {restore: true});

    return gulp.src(bowerMain(bowerConf))
    // JS
        .pipe(jsFilter)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(conf.jsDestDir))
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(uglify())
        .pipe(rename("vendor.min.js"))
        .pipe(gulp.dest(conf.jsDestDir))
        .pipe(jsFilter.restore)
        // CSS
        .pipe(cssFilter)
        .pipe(concat('vendor.css'))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(rename("vendor.min.css"))
        .pipe(gulp.dest(conf.cssDestDir))
        .pipe(cssFilter.restore)

        // FONTS
        .pipe(fontFilter)
        .pipe(gulp.dest(conf.fontsDestDir))
        .pipe(fontFilter.restore)

        // IMAGES
        .pipe(imageFilter)
        .pipe(gulp.dest(conf.imagesDestDir))
        .pipe(imageFilter.restore)

});

//JS operations
gulp.task('js', function () {
    return gulp.src([
        conf.jsSrcDir + '/app.js',
        conf.jsSrcDir + '/core/**/*.js',
        conf.jsSrcDir + '/pages/**/*.js',
        conf.jsSrcDir + '/modules/**/*.js',
        conf.jsSrcDir + '**/*.html'
    ])
        .pipe(gulpIf('*.html', htmlmin({
            removeEmptyAttributes: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true
        })))
        .pipe(gulpIf('*.html', angularTemplatecache('templateCacheHtml.js', {
            module: 'main',
            root: 'app'
        })))
        .pipe(concat("main.js"))
        .pipe(ngAnnotate())
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulpIf(minify === 'yes', uglify()))
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest(conf.jsDestDir))
});

//SASS operations
gulp.task('sass', function () {
    return gulp.src(
        [
            conf.srcDir + "index.scss",
            conf.appStylesDir + '**/**/*.scss'
        ])
        .pipe(concat("main.css"))
        .pipe(sass().on('error', sass.logError)) // log errors to console
        .pipe(gulpIf(minify === 'yes', cssnano()))	//Minify
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest(conf.cssDestDir)) // Save in the given folder
});

//INJECT operations
gulp.task('inject', function () {
    return gulp.src('src/index.html')
    //Remove assets from the link of the css and js files.
        .pipe(inject(gulp.src(conf.cssDestDir + 'vendor.min.css', {read: false}), {
            ignorePath: 'assets/',
            starttag: '<!-- bower:css -->',
            endtag: '<!-- endbower:css -->'
        }))
        .pipe(inject(gulp.src(conf.cssDestDir + 'main.min.css', {read: false}), {
            ignorePath: 'assets/',
            starttag: '<!-- app:css -->',
            endtag: '<!-- endapp:css -->'
        }))
        .pipe(inject(gulp.src(conf.jsDestDir + (isServe === "yes" ? 'vendor.js' : 'vendor.min.js'), {read: false}), {
            ignorePath: 'assets/',
            starttag: '<!-- bower:js -->',
            endtag: '<!-- endbower:js -->'
        }))
        .pipe(inject(gulp.src(conf.jsDestDir + 'main.min.js', {read: false}), {
            ignorePath: 'assets/',
            starttag: '<!-- app:js -->',
            endtag: '<!-- endapp:js -->'
        }))
        .pipe(gulp.dest(conf.destDir));
});

// Watchers
gulp.task('watch', function () {
    gulp.watch('src/app/**/*.scss', ['sass', browserSync.reload]);
    gulp.watch('src/app/**/*.html', ['js', browserSync.reload]);
    gulp.watch('src/app/**/*.js', ['js', browserSync.reload]);
});

// Start browserSync server
gulp.task('browserSync', function () {
    browserSync.init({
        port: 3030,
        server: {
            baseDir: 'assets',
            livereload: true,
            index: 'index.html',
            middleware: [historyApiFallback()]
        }
    });
});

gulp.task('images', function () {
    return gulp.src(conf.imagesSrcDir + '**/*.+(png|jpg|jpeg|gif|svg|ico)')
    // Caching images
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest(conf.imagesDestDir))
});

//Copy fonts
gulp.task('fonts', function () {
    return gulp.src(conf.fontsSrcDir)
        .pipe(gulp.dest(conf.fontsDestDir))
});

//Clean up
gulp.task('clean', function () {
    return del.sync(
        'assets/css',
        'assets/images',
        'assets/scripts',
        'assets/fonts',
        '!assets/vendor'
    ).then(function (cb) {
        return cache.clearAll(cb);
    });
});

gulp.task('clean:assets', function () {
    console.log("clean assets should backup the current assets folder when build called");
    return del.sync([
        'assets/**/*',
        '!assets/images',
        '!assets/images/**/*',
        '!assets/vendor',
        '!assets/vendor/**/*']);
});

gulp.task('serve', function (callback) {
    minify = "no";
    isServe = "yes";
    runSequence(
        ['sass', 'js'],
        ['inject'],
        ['watch', 'browserSync'],
        callback
    )
});

gulp.task('build', function (callback) {
    runSequence(
        'clean:assets',
        'sass',
        'js',
        'bower',
        ['images', 'fonts'],
        ['inject'],
        callback
    )
});
