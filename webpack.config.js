var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

process.env.BABEL_ENV = TARGET;

var common = {
	entry: APP_PATH,
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	// add resolve.extensions
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				include: APP_PATH
			},
			// setup jsx
			{
				test: /\.jsx?$/,
				loaders: ['babel'],
				include: APP_PATH
			}
		]
	},
	plugins: [
		// new webpack.HotModuleReplacementPlugin(),
		new HtmlwebpackPlugin({
			title: 'BOBO app'
		})
	]

};

if (TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		devtool: 'eval-source-map',
		devServer: {
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,
			port: 4444
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	});
}
