const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const PurifyCssWebpack = require('purifycss-webpack');
const glob = require('glob');

const webpack = require('webpack');

let ENV_CONFIG = fs.readFileSync('./ENV_CONFIG.json', 'utf-8');

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
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
		new ExtractTextWebpackPlugin({
			filename: 'css/javascript.css',
			disable: true //由于是link标签引入，不支持热更新开发模式下禁用，生产模式下开启
		}),
		new HtmlWebpackPlugin({
			title: 'output management',
			favicon: 'favicon.ico',
			template: './index.html',
			chunks: ['index'],
			minify: {
				collapseWhitespace: true
			}
		}),
		new PurifyCssWebpack({
			paths: glob.sync(path.resolve('src/*.html'))
		}),
		new webpack.DefinePlugin({
			'NODE_ENV': JSON.stringify('production'),
			'process.my_img_path': ENV_CONFIG
		}),

	],
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextWebpackPlugin.extract({
				fallback: 'style-loader', //开发时还是传入到style标签内
				use: [{
					loader: 'css-loader'
				}, {
					loader: 'postcss-loader'
				}]
			})
		}, {
			test: /\.less$/,
			use: ExtractTextWebpackPlugin.extract({
				fallback: 'style-loader',
				use: [{
					loader: 'css-loader',
				}, {
					loader: 'less-loader',
				}, {
					loader: 'postcss-loader'
				}]
			})
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