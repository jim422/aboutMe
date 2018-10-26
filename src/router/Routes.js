import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import NoMatch from '../error_pages/NotMatch'
import {config} from './config';

class Routes extends Component {
	constructor(props) {
		super(props)
	}

	createRoutes(routes) {
		return routes.map(item => {
			return <Route
				key={item.path}
				{...item}
			/>
		})
	}

	render() {

		return <Switch>
			<Route
				exact
				path='/'
				render={ () => (<Redirect to="/aboutMe"/>) }
			/>
			{
				this.createRoutes(config.routes)
			}
			<Route
				component={NoMatch}
			/>
		</Switch>
	}
}

export {
	Routes,
}