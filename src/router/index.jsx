/**
 * @desc 路由页面
 * @author lsy
 * @todo xxx
 */

import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { recursion } from '@/assets/js/utils';
import { inject, observer } from 'mobx-react';

@inject('router')
@observer
class RouterMap extends Component {
	render() {
		return (
			<Switch>
				{recursion(this.props.router.routerArr).map((item) => (
					<Route exact key={item.path} path={item.path} component={item.component} />
				))}
			</Switch>
		);
	}
	componentDidMount() {
		this.props.router.routerName = this.findNameByPath(this.props.router.routerArr, this.props.location.pathname);
	}
	componentDidUpdate() {
		this.props.router.routerName = this.findNameByPath(this.props.router.routerArr, this.props.location.pathname);
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
						NameArr.push(item)
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
