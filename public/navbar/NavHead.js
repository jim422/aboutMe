import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
const MenuItemGroup = Menu.ItemGroup;



export default class NavHead extends Component {
	constructor(props) {
		super(props)
	}

	handleClick = (e) => {
		this.setState({
			current: e.key
		})
		this.props.history.push(e.key)
	}

	render() {
		return (
			<div className='navbar'>
				<Menu
					selectedKeys={ [this.props.location.pathname] }
					mode='horizontal'
					onClick={ this.handleClick }
				>
					<MenuItem
						key='/aboutMe'
					>aboutMe</MenuItem>

					<SubMenu
						title='knockout'
					>
						<MenuItemGroup>
							<MenuItem
								key='/knockout/platformConfig'
							>平台配置</MenuItem>
						</MenuItemGroup>
					</SubMenu>

					<SubMenu
						title='react'
					>
						<MenuItemGroup>
							<MenuItem
								key='/react/appeal'
							>
								react + antd
							</MenuItem>
						</MenuItemGroup>
					</SubMenu>
				</Menu>
			</div>

		)
	}
}