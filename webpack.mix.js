let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/assets/js/app.js', 'public/js')
//    .sass('resources/assets/sass/app.scss', 'public/css');
mix.options({
    processCssUrls: false,
    publicPath: 'public'
});

mix.js('resources/assets/js/app.js', 'public/js')
    .extract(['./resources/assets/js/vendor.js'], 'js/vendor.js')
    .webpackConfig({
        output: { chunkFilename: 'js/[name].js', publicPath: '/' }
    })
    // .minify()
    // .version()
    .sourceMaps();
mix.sass('resources/assets/sass/app.scss', 'public/css');
