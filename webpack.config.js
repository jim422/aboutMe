const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		uiKitIcon: './node_modules/uikit/dist/js/uikit-icons.min.js',
		index: './public/index.js'
	},
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
			},
			"/upload": {
				"target": "http://localhost:9090",
				"changeOrigin": true
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'output management',
			template: './index.html',
			chunks: ['index']
			/*files: {
				js: ["./node_modules/uikit/dist/js/uikit-icons.min.js"],
				chunks: {
					"icon": {
						entry: "./node_modules/uikit/dist/js/uikit-icons.min.js"
					}
				}
			},*/
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
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
	}
};