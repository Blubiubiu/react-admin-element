/**
 * @desc 路由页面
 * @author lsy
 */

import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import { inject, observer } from 'mobx-react';

@inject('router')
@observer
class RouterMap extends Component {
	render() {
		return (
			<Switch>
				{this.props.router.distributeRouter.defaultRouter.map((item) => (
					<Route exact key={item.path} path={item.path} component={item.component} />
				))}
				<Route render={() => <Redirect to="/404" />} />
			</Switch>
		);
	}
	componentDidMount() {
		this.setDefault();
	}
	componentDidUpdate() {
		this.setDefault();
	}
	//设置侧边栏选中选项
	setDefault() {
		this.props.router.routerName = this.findNameByPath(this.props.router.routerArr, this.props.location.pathname);
		if (this.props.router.routerName[0].hideChildren) {
			this.props.router.defaultActive = this.props.router.routerName[0].path;
		} else {
			this.props.router.defaultActive = this.props.router.routerName[
				this.props.router.routerName.length - 1
			].path;
		}
	}
	/**
	 * @desc 根据path返回name
	 * @param {array} [arr] - router数据 
	 * @param {string} [path] - 选中path 
	 */
	findNameByPath(arr, path) {
		let NameArr = [],
			index = 0,
			hasParentId = (function loop(arr, index) {
				return arr.some((item) => {
					if (item.path === path) {
						NameArr = NameArr.slice(0, index);
						NameArr.push(item);
						return true;
					} else if (Array.isArray(item.children)) {
						NameArr[index] = item;
						return loop(item.children, index + 1);
					} else {
						return false;
					}
				});
			})(arr, index);
		return hasParentId ? NameArr : [];
	}
}

export default withRouter(RouterMap);
