import React, { Component } from 'react'
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom'
import './css/index.css'

//组件
import NavHead from './navbar/NavHead'
import AboutMe from './about_me/index.js'
import PlatformConfig from './platform_config/PlatformConfig'
import Appeal from './appeal/index'
import JavaScript from './javascript/index'
import H5 from './h5/index'

const { Header, Content, Footer } = Layout;

class App extends Component {
	render() {
		return (
			<Layout className='layout'>
				<Header className='header'>
					<Route
						component={ NavHead }
					/>
				</Header>

				<Content className='content'>
					<Switch>
						<Route
							exact
							path='/'
							render={ () => (<Redirect to="/aboutMe"/>) }
						/>
						<Route
							exact
							path='/aboutMe'
							component={ AboutMe }
						/>

						<Route
							path='/knockout/platformConfig'
							component={ PlatformConfig }
						/>

						<Route
							path='/react/appeal'
							component={ Appeal }
						/>

						<Route
							path='/h5'
							component={ H5 }
						/>

						<JavaScript/>

						<Redirect
							to='/aboutMe'
						/>
					</Switch>

				</Content>

				<Footer className='footer'>
					&nbsp;&nbsp;&nbsp;
				</Footer>
			</Layout>
		)
	}
}

export default App