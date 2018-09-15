import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import JsContainer from './container/JavaScript'
import Scope from './component/Scope'
import Closure from './component/Closure'
import Listener from './component/Listener'
import Cors from './component/Cors'

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

				<Route
					path='/javascript/cors'
					component={ Cors }
				/>

			</div>

		)
	}
}

export default JavaScript