import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'

console.log(process.env.NODE_ENV, process.my_img_path)
ReactDOM.render(
	(<BrowserRouter>
		<App/>
	</BrowserRouter>),
	document.getElementById('root')
);
