const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const webpack = require('webpack');

let ENV_CONFIG = fs.readFileSync('./ENV_CONFIG.json', 'utf-8');

module.exports = {
	entry: {
		index: './public/index.js'
	},
	output: {
		filename: '[name].bundle.[hash:8]js',
		path: path.resolve(__dirname, '/dist'),
		publicPath: '/',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
		proxy: {
			"/api": {
				"target": "http://localhost:9090",
				"changeOrigin": true
			},
			"/upload": {
				"target": "http://localhost:9090",
				"changeOrigin": true
			}
		},
		historyApiFallback:{
			disableDotRule: true
		},
		overlay: false
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'output management',
			favicon: 'favicon.ico',
			template: './index.html',
			chunks: ['index'],
			minify: {
				collapseWhitespace: true
			}
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
			'process.my_img_path': ENV_CONFIG
		}),
		new SWPrecacheWebpackPlugin({
			dontCacheBustUrlsMatching: /\.\w{8}\./,
			filename: 'service-worker.js',
			logger(message) {
				if (message.indexOf('Total precache size is') === 0) {
					return;
				}
				if (message.indexOf('Skipping static resource') === 0) {

					return;
				}
				console.log(message);
			},
			minify: true,
			navigateFallback: path.resolve(__dirname, '/index.html'),
			navigateFallbackWhitelist: [/^(?!\/__).*/],
			staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
		}),

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
			test: /\.(js|jsx|mjs)$/,
			exclude: /(node_modules)|(bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [ "@babel/preset-react", '@babel/preset-env'],
					plugins: [require('@babel/plugin-transform-object-super'),'@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties']
				}
			}
		}]
	},
	mode: 'development',
	resolve: {

	}
};