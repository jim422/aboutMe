import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import JsContainer from './container/JavaScript'
import './css/index.css'

class JavaScript extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props)
		return (
			<div className='javascript-container'>
				<JsContainer/>
			</div>

		)
	}
}

export default JavaScript