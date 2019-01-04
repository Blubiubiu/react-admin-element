/**
 * @desc 面包屑导航
 * @author lsy
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'element-react';
import { inject, observer } from 'mobx-react';

import './style.scss';

@inject('router')
@observer
class BreadCrumb extends Component {
	render() {
		return (
			<Breadcrumb separator="/">
				{this.props.router.routerName.map((item) => {
					return item.component ? (
						<Breadcrumb.Item key={item.name}>
							<Link to={item.path}>{item.name}</Link>
						</Breadcrumb.Item>
					) : (
						<Breadcrumb.Item className="bread__blank" key={item.name}>
							{item.name}
						</Breadcrumb.Item>
					);
				})}
			</Breadcrumb>
		);
	}
}

export default BreadCrumb;
