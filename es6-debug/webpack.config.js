module.exports = {
	entry : __dirname+ '/main.js', //this is the breaking change include this '__diranme'
	output : {
		path : __dirname, //this is the breaking change include this '__diranme'
		filename : 'index.js'
	},
	devServer : {
		inline: true,
		port : 3333
	},
	module : {
		loaders : [
				{
					test : /.js$/, //this means all files ending with '.js'
					exclude : /node_modules/,
					loader : 'babel-loader',
					query : {
						presets : ['es2015']
					}
				}
			]
	}
};

