(function Gulp() {

    /**
     * @property gulp
     * @type {Object}
     */
    var gulp = require('gulp');

    /**
     * @property stylish
     * @type {Object}
     */
    var stylish = require('jshint-stylish');

    /**
     * @property jshint
     * @type {Object}
     */
    var jshint = require('gulp-jshint');

    /**
     * @property tasks
     * @type {Object}
     */
    var tasks = {

        /**
         * @method lint
         * @return {void}
         */
        lint: function() {
            var files = ['./components/*.js'];
            gulp.src(files)
                .pipe(jshint('.jshintrc'))
                .pipe(jshint.reporter(stylish));
        }

    };

    // Register out Gulp tasks!
    gulp.task('test', tasks.lint);

})();