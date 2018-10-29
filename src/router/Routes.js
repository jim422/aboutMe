import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import NoMatch from '../error_pages/NotMatch'
import {config} from './config';

class Routes extends Component {
	constructor(props) {
		super(props)
	}

	createRoutes(routes) {
		let routeList = [];

		this.loop(routeList, routes);
		return routeList;
	}

	loop(container, routes) {
		routes.forEach(item => {
			item.children
				? this.loop(container, item.children)
				: container.push(
					<Route
						key={item.path}
						{...item}
					/>
				)
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