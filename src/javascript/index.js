import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import JsContainer from './container/JavaScript'
import Scope from './component/Scope'
import Closure from './component/Closure'
import Listener from './component/Listener'

import './css/index.css'

class JavaScript extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<div className='javascript-container'>

				<Route
					path='/javascript'
					exact
					component={ JsContainer }
				/>

				<Route
					path='/javascript/scope'
					component={ Scope }
				/>

				<Route
					path='/javascript/closure'
					component={ Closure }
				/>

				<Route
					path='/javascript/listener'
					component={ Listener }
				/>

			</div>

		)
	}
}

export default JavaScript