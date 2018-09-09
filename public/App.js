import React, { Component } from 'react'
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom'
import './css/index.css'

//组件
import NavHead from './navbar/NavHead'
import AboutMe from './about_me/index.js'
import PlatformConfig from './platform_config/PlatformConfig'
import Appeal from './appeal/index'

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
							path='/knockout/platformConfig'
							component={PlatformConfig}
						/>

						<Route
							path='/react/appeal'
							component={Appeal}
						/>


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