const mix = require('laravel-mix');

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

const src = "./src/",
			dist = "./dist/";


mix
	.js(
		`${src}js/bundle.js`, 
		`${dist}js/bundle.js`
	).js(
		`${src}js/script.js`, 
		`${dist}js/script.js`
	).sass(
		`${src}scss/bundle.scss`, 
		`${dist}css/bundle.css`
	).sass(
		`${src}scss/style.scss`, 
		`${dist}css/style.css`
	)

const sizesList = [16, 32, 48, 64, 92, 128];
const resizer = require('node-image-resizer');

mix.then(async () => {
	for (let size of sizesList) {
		// create icons based on ${size} variable
		await resizer(`${src}imgs/icon.png`, {
			versions: [
				{
					path: `${dist}imgs/`,
					quality: 100,
					suffix: '_' + size,
					width: size,
					height: size,
				},
			]
		})
	}
})


