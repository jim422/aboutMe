import React, { Component } from 'react'
import { Layout } from 'antd';
import { Route } from 'react-router-dom'
import './css/index.css'

//组件
import NavHead from './navbar/NavHead'
import {Routes} from './router/Routes'

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
					<Routes/>

				</Content>

				<Footer className='footer'>
					&nbsp;&nbsp;&nbsp;
				</Footer>
			</Layout>
		)
	}
}

export default App
