/**
 * @desc 友情链接
 * @author lsy
 */

import React, { Component } from 'react';

import './style.scss';

export default class FriendLink extends Component {
	render() {
		return (
			<div className="admin__friendlink">
				<ul>
					<li>
						<a
							href="https://github.com/Blubiubiu/react-admin-element"
							rel="noopener noreferrer"
							target="_blank"
						>
							<img src={require('@/assets/images/github-logo.svg')} alt="" />
							<span>项目地址</span>
						</a>
					</li>
					<li>
						<a
							href="https://elemefe.github.io/element-react/#/zh-CN/quick-start"
							rel="noopener noreferrer"
							target="_blank"
						>
							<img src={require('@/assets/images/ele-logo.svg')} alt="" />
							<span>Element-react-UI</span>
						</a>
					</li>
					<li>
						<a href="https://react.docschina.org/" rel="noopener noreferrer" target="_blank">
							<img
								src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
								alt=""
							/>
							<span>React中文文档</span>
						</a>
					</li>
					<li>
						<a href="https://reacttraining.com/react-router/" rel="noopener noreferrer" target="_blank">
							<img src={require('@/assets/images/react-router-logo.png')} alt="" />
							<span>React-router英文文档(中文文档总慢半拍)</span>
						</a>
					</li>
					<li>
						<a href="https://cn.mobx.js.org/" rel="noopener noreferrer" target="_blank">
							<img src={require('@/assets/images/mobx-logo.png')} alt="" />
							<span>Mobx中文文档</span>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
