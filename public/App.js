import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom'
import './assets/css/index.css'

//组件
import NavHead from './navbar/NavHead'
import AboutMe from './about_me/index.js'
import PlatformConfig from './platform_config/PlatformConfig'

const { Header, Content, Footer } = Layout;

class App extends Component {
	render() {
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Header className='header'>
					<Route
						component={NavHead}
					/>
				</Header>

				<Content className='content'>
					<Switch>
						<Route
							exact
							path='/'
							render={() => (<Redirect to="/aboutMe"/>)}
						/>
						<Route
							exact
							path='/aboutMe'
							component={AboutMe}
						/>

						<Route
							path='/platformConfig'
							component={PlatformConfig}
						/>

						<Route
							path='/a'
							component={ab}
						>
							<Route path='/fff' component={ab}/>
						</Route>

						<Redirect
							to='/aboutMe'
						/>
					</Switch>

				</Content>

				<Footer className='footer'>
				</Footer>
			</Layout>
		)
	}
}

export default App

function ab() {
	return (
		<div>ab</div>
	)
}