import React, { Component } from 'react';
import { Menu, Button } from 'antd';
import { config } from './config';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
const MenuItemGroup = Menu.ItemGroup;

class NavBar extends Component {
	handleClick = (e) => {
		this.props.history.push(e.key);
	};

	createNavBar(routes) {
		return routes.map(item => {
			return item.children
				? this.createSubMenu(item)
				: this.createMenuItem(item);
		});
	}

	createMenuItem(route) {
		return (
			<MenuItem
				key={route.path}
			>{route.title}
			</MenuItem>
		);
	}

	createSubMenu(route) {
		return (
			<SubMenu
				title={route.title}
				key={route.title}
			>
				<MenuItemGroup>
					{
						route.children.map(item => {
							return this.createMenuItem(item);
						})
					}
				</MenuItemGroup>
			</SubMenu>
		);
	}

	render() {
		return (
			<div className='navbar'>
				<Menu
					selectedKeys={[this.props.location.pathname]}
					mode='horizontal'
					onClick={this.handleClick}
				>
					{
						this.createNavBar(config.routes)
					}
				</Menu>

				<div className='login'>
					<Button type='primary'>登陆</Button>
					<Button>注册</Button>
				</div>
			</div>
		);
	}
}

export default NavBar;
