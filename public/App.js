import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom'
import './assets/css/index.css'

//组件
import AboutMe from './about_me/index.js'
import PlatformConfig from './platform_config/PlatformConfig'

const { Header, Content, Footer } = Layout;

class App extends Component {
	render() {
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Header className='header'>
				</Header>

				<Content className='content'>

						<Route
							exact
							path='/'
							render={() => (<Redirect to="/aboutMe"/>)}
						/>
						<Route
							path={'/aboutMe'}
							component={ AboutMe }
						/>
						<Route
							path={'/platformConfig'}
							component={ PlatformConfig }
						/>


				</Content>

				<Footer className='footer'>
				</Footer>
			</Layout>
		)
	}
}

export default App