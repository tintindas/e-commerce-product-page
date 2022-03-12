const { src, dest, watch, series } = require('gulp')
const browsersync = require('browser-sync').create()

const browsersyncServe = (cb) => {
	browsersync.init({
		server: {
			baseDir: '.'
		}
	})
	cb()
}

const browsersyncReload = (cb) => {
	browsersync.reload()
	cb()
}

const watchTask = () => {
	watch(['index.html', 'style.css'], browsersyncReload)
}

exports.default = series(browsersyncServe, watchTask)
