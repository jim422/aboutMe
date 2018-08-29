import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './assets/css/index.css'

//组件
import AboutMe from './about_me/index.js'

const { Header, Content, Footer } = Layout;

class App extends Component {
	render() {
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Header className='header'>
					header
				</Header>

				<Content className='content'>
					<AboutMe/>
				</Content>

				<Footer className='footer'>
					<div> 33</div>
				</Footer>
			</Layout>
		)
	}
}

export default App