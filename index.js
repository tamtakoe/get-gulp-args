var gutil = require('gulp-util');

function getArgs() {
    var args = [];

    for (var key in gutil.env) {
        if (gutil.env.hasOwnProperty(key) && key !== '_' && key !== 'color' && key !== 'gulpfile' && gutil.env[key]) {
            args.push(key);
            args[key] = gutil.env[key];
        }
    }

    return args;
}

module.exports = getArgs;