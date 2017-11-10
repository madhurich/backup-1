module.exports = {
	entry: './main.js',
	output:{
		path: './',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 3000
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				include: /.\jsx?$/,
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};