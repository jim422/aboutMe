import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NoMatch from '../error_pages/NotMatch';
import { config } from './config';
import { DEFAULT_ROUTE } from '../public/config';

class Routes extends Component {
	createRoutes(routes) {
		const routeList = [];

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
					/>,
				);
		});
	}


	render() {
		return (
			<Switch>
				<Route
					exact
					path='/'
					render={() => (<Redirect to={DEFAULT_ROUTE} />)}
				/>
				{
					this.createRoutes(config.routes)
				}
				<Route
					component={NoMatch}
				/>
			</Switch>
);
	}
}

export default Routes;
