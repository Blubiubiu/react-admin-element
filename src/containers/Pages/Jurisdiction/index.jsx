/**
 * @desc 权限
 * @author lsy
 */

import React, { Component } from 'react';

import Role from './Role';
import Juris from './Juris';

import './style.scss';

export default class Jurisdiction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeName: '1',
			roleArr: [
				{
					title: 'admin',
					name: '1',
					desc: 'admin 为系统最高级用户，一般情况拥有所有权限'
				},
				{
					title: '管理员',
					name: '2',
					desc: '管理员是帮助admin来管理系统的人，能力一般的人可无法胜任'
				},
				{
					title: 'Vip会员',
					name: '3',
					desc: '充钱就可以了'
				},
				{
					title: '普通用户',
					name: '4',
					desc: '拥有基础权限'
				}
			],
			JurisArr: [
				{
					id: 1,
					label: '用户权限',
					children: [
						{
							id: 4,
							label: '添加用户'
						},
						{
							id: 5,
							label: '删除用户'
						}
					]
				},
				{
					id: 2,
					label: '用户权限1',
					children: [
						{
							id: 6,
							label: '添加用户1-1'
						},
						{
							id: 7,
							label: '删除用户1-2'
						}
					]
				},
				{
					id: 3,
					label: '用户权限2',
					children: [
						{
							id: 8,
							label: '添加用户2'
						},
						{
							id: 9,
							label: '删除用户2',
							children: [
								{
									id: 10,
									label: '删除用户2-1'
								},
								{
									id: 11,
									label: '删除用户2-2'
								}
							]
						}
					]
				}
			],
			options: {
				children: 'children',
				label: 'label'
			}
		};
	}

	render() {
		return (
			<div className="admin__jurisdiction">
				<Role
					roleArr={this.state.roleArr}
					activeName={this.state.activeName}
					hanldeRoleArr={this.hanldeRoleArr}
				/>
				<Juris JurisArr={this.state.JurisArr} options={this.state.options} />
			</div>
		);
	}

	hanldeRoleArr = (val) => {
		this.setState({
			roleArr: this.state.roleArr.concat({
				title: val.title,
				name: String(this.state.roleArr.length + 1),
				desc: val.desc
			})
		});
	};
}
