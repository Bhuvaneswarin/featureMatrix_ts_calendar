//require("@syncfusion/ej2-build");

'use strict';

var gulp = require('gulp');


gulp.task('start', ['compile'], function(done) {
    var browserSync = require('browser-sync');
    var bs = browserSync.create('Essential JS 2');
    var options = {
        server: {
            baseDir: ['./samples', './']
        },
        ui: false
    };
    bs.init(options, done);

    /**
    * Watching typescript file changes
    */
    gulp.watch('samples/**/*.ts', ['compile', bs.reload]).on('change', reportChanges);
    gulp.watch('src/**/*.ts', ['compile', bs.reload]).on('change', reportChanges);
});

/** 
 * Compile TypeScript to JS
 */
gulp.task('compile', function(done) {
    var ts = require('gulp-typescript');
    // Default typescript config
    var defaultConfig = {
        typescript: require('typescript')
    };
    var tsProject, tsResult;
    // Create the typescript project
    tsProject = ts.createProject('tsconfig.json', defaultConfig);
    // Get typescript result
    tsResult = gulp.src(['./samples/**/*.ts', './src/**/*.ts'], { base: '.' })
        .pipe(ts(tsProject))
        .pipe(gulp.dest('./'))
        .on('error', function(e) {
            done(e);
            process.exit(1);
        }).on('end', function() {
            done();
        });
});

function reportChanges(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}