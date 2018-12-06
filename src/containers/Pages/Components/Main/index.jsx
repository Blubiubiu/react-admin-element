/**
 * @desc 主页面
 * @author lsy
 * @todo xxx
 */

import React, { Component } from 'react';
import { Layout } from 'element-react';

import SideMenu from './SideMenu';
import Header from '@/components/Header'

import './style.scss';

class Main extends Component {
	render() {
		return (
			<Layout.Row className="admin__main__container">
				<Layout.Col style={{flex: '0 0 300px', height: '100%'}}>
					<SideMenu />
				</Layout.Col>
				<Layout.Col style={{flex: 'auto', overflow: 'hidden'}}>
					<Layout.Row className="admin__headerNav">
						<Header/>
					</Layout.Row>
					<div style={{padding: '20px'}}>
						{this.props.children}
					</div>
				</Layout.Col>
			</Layout.Row>
		);
	}
}

export default Main
