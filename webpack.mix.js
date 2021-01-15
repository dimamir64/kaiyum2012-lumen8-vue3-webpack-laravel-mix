const path = require('path')
const mix = require('laravel-mix')

mix.js('resources/js/app.js', 'public/js')
    .vue();
