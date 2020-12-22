const gulp = require('gulp')
const {series} =require('gulp');

//调用js文件合并插件
const concat = require('gulp-concat');

//合并脚本
function concatScripts() {
     return gulp.src(
        [
            './src/jquery-1.9.1.min.js',
            './src/jquery-migrate-1.0.0.js',
            './src/lib/rangy/rangy-core.js',
            './src/polyfills.js',
            './src/ice.js',
            './src/dom.js',
            './src/icePlugin.js',
            './src/icePluginManager.js',
            './src/bookmark.js',
            './src/selection.js',
            './src/plugins/IceAddTitlePlugin/IceAddTitlePlugin.js',
            './src/plugins/IceCopyPastePlugin/IceCopyPastePlugin.js',
            './src/plugins/IceEmdashPlugin/IceEmdashPlugin.js',
            './src/plugins/IceSmartQuotesPlugin/IceSmartQuotesPlugin.js',            
        ]
      )
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist'));
};


exports.default = series(concatScripts)