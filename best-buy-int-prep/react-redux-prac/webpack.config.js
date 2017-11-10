module.exports = {
	entry: './main.js',
	output: {
		path: './',
		filename: 'bundle.js'
	},
	devServer:{
		port: 8080,
		inline: true
	},

	module:{
		loaders:[
			{
				test: /.\jsx?/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets:['es2015', 'react']
				}
			}
		]
	}
};