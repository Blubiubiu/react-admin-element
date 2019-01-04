/**
 * @desc 侧边导航栏
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'element-react';
import { inject, observer } from 'mobx-react';

import './style.scss';

@inject('router')
@observer
class SideMenu extends Component {
	render() {
		return (
			<Layout.Row className="admin__sidemenu__contanier">
				<Layout.Col className="admin__sidemenu__contanier__item">
					<Menu
						defaultActive={this.props.router.defaultActive}
						className="admin__sidemenu__contaniner__menu"
						theme="dark"
					>
						<div className="admin__sidemenu__contaniner__menu__logo">logo</div>
						{this.recursion(this.props.router.routerArr)}
					</Menu>
				</Layout.Col>
			</Layout.Row>
		);
	}
	//sidemenu
	recursion(arr) {
		return arr.map((item) => {
			if (item.children && item.children.length && !item.hideChildren) {
				return (
					<Menu.SubMenu
						index={item.path}
						key={item.name}
						title={
							<span>
								<i className={item.type} />
								{item.name}
							</span>
						}
					>
						<div className="admin__menu--padding">{this.recursion(item.children)}</div>
					</Menu.SubMenu>
				);
			} else if (!item.hideInMenu) {
				return (
					<Link to={item.path} key={item.name}>
						<Menu.Item index={item.path}>
							<i className={item.type} />
							{item.name}
						</Menu.Item>
					</Link>
				);
			}
		});
	}
}
export default SideMenu;
