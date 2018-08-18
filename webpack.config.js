const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './public/platformConfig/index.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
		proxy: {
			"/api": {
				"target": "http://localhost:9090",
				"changeOrigin": true
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'output management',
			template: './index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(image|png|svg|jpg|jpeg|gif)$/,
			use: {
				loader: 'file-loader'
			}
		}, {
			test: /\.tpl$/,
			use: ['ejs-loader']
		}, {
			test: /\.js$/,
			exclude: /(node_modules)|(bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
					plugins: [require('@babel/plugin-transform-object-super'),'@babel/plugin-transform-runtime']
				}
			}
		}]
	}
};