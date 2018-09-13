import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/javascript.css'

export default class JavaScript extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className='skill-list'>
				<ul>
					<li>
						<Link
							to="/javascript/scope"
						>作用域</Link>
					</li>

					<li>
						<Link
							to='/javascript/closure'
						>闭包</Link>
					</li>

					<li>
						<Link
							to='/javascript/listener'
						>事件委托</Link>
					</li>
				</ul>

			</div>
		)
	}
}