/**
 * @desc 主页面
 * @author lsy
 */

import React, { Component } from 'react';
import { Layout } from 'element-react';
import { withRouter } from 'react-router-dom';

import SideMenu from './SideMenu';
import Header from './Header';

import './style.scss';
import { inject, observer } from 'mobx-react';

@inject('router', 'global')
@observer
class Main extends Component {
	render() {
		return (
			<Layout.Row className="admin__main__container">
				<Layout.Col style={{ flex: '0 0 240px', height: '100%' }}>
					<SideMenu />
				</Layout.Col>
				<Layout.Col style={{ flex: 'auto', overflowX: 'hidden', overflowY: 'scroll' }}>
					<Layout.Row className="admin__headerNav">
						<Header />
					</Layout.Row>
					<span>{this.props.router.single}</span>
					<div style={{ padding: '20px' }}>{this.props.children}</div>
				</Layout.Col>
			</Layout.Row>
		);
	}
}

export default withRouter(Main);
