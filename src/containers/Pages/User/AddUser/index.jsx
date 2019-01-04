/**
 * @desc 添加用户
 * @author lsy
 */

import React, { Component } from 'react';
import { Dialog, Table, Button } from 'element-react';

export default class AddUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{
					type: 'selection',
					reserveSelection: true
				},
				{
					label: '用户名',
					prop: 'name',
					width: 160
				},
				{
					label: '身份',
					prop: 'access',
					width: 160
				},
				{
					label: '性别',
					prop: 'sex',
					width: 80,
					align: 'center'
				},
				{
					label: '年龄',
					prop: 'age',
					width: 80,
					align: 'center'
				},
				{
					label: '地址',
					prop: 'address'
				}
			],
			data: [
				{
					id: '1',
					name: 'Meter',
					access: '管理员',
					sex: '女',
					age: '24',
					address: '北京市海淀区'
				},
				{
					id: '2',
					name: 'Jack',
					access: '管理员',
					sex: '男',
					age: '24',
					address: '上海市普陀区'
				},
				{
					id: '3',
					name: 'Anty',
					access: '管理员',
					sex: '男',
					age: '24',
					address: '西安市未央区'
				},
				{
					id: '4',
					name: 'Kimie',
					access: 'Vip会员',
					sex: '女',
					age: '24',
					address: '安徽市'
				}
			]
		};
	}
	render() {
		const { dialogVisible } = this.props;
		return (
			<div>
				<Dialog title="用户列表" visible={dialogVisible} onCancel={() => this.props.changeModalStatus(false)}>
					<Dialog.Body>
						<Table
							style={{ width: '100%' }}
							columns={this.state.columns}
							data={this.state.data}
							border={true}
							rowKey={this.getRowKeys.bind(this)}
							onSelectChange={(selection) => {
								this.selectChange(selection);
							}}
							onSelectAll={(selection) => {
								console.log(selection);
							}}
						/>
					</Dialog.Body>
					<Dialog.Footer className="dialog-footer">
						<Button onClick={() => this.props.changeModalStatus(false)}>取消</Button>
						<Button type="primary" onClick={() => this.props.changeModalStatus(false)}>
							确定
						</Button>
					</Dialog.Footer>
				</Dialog>
			</div>
		);
	}
	getRowKeys(row) {
		return row.id;
	}
	//选择某一项
	selectChange(selection) {
		console.log(selection);
	}
}
