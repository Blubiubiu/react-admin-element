import React, { Component } from 'react';
import { Input, Table, Button, Pagination } from 'element-react';

export default class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{
					type: 'index',
					label: ' '
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
				},
				{
					label: '操作',
					width: 160,
					render: (row, column, index) => {
						return (
							<span>
								<Button plain={true} type="info" size="small">
									编辑
								</Button>
								<Button type="danger" size="small" onClick={this.deleteRow.bind(this, index)}>
									删除
								</Button>
							</span>
						);
					}
				}
			],
			data: [
				{   
                    id: "1",
					name: 'Meter',
					access: '管理员',
					sex: '女',
					age: '24',
					address: '北京市海淀区'
				},
				{
                    id: "2",
					name: 'Jack',
					access: '管理员',
					sex: '男',
					age: '24',
					address: '上海市普陀区'
				},
				{
                    id: "3",
					name: 'Anty',
					access: '管理员',
					sex: '男',
					age: '24',
					address: '西安市未央区'
				},
				{
                    id: "4",
					name: 'Kimie',
					access: '用户',
					sex: '女',
					age: '24',
					address: '安徽市'
				},
				{
                    id: "5",
					name: 'Blues',
					access: '用户',
					sex: '男',
					age: '24',
					address: '天津市高薪区'
				},
				{
                    id: "6",
					name: 'Sun',
					access: '用户',
					sex: '男',
					age: '24',
					address: '武汉市'
				},
				{
                    id: "7",
					name: 'Lebur',
					access: '用户',
					sex: '男',
					age: '24',
					address: '重庆市市区'
				}
			]
		};
	}
	deleteRow(index) {
		const { data } = this.state;
		data.splice(index, 1);
		this.setState({
			data: [ ...data ]
		});
	}
	render() {
		return (
			<div>
				<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Input
                        className="admin__search"
                        placeholder="请输入用户名"
                        append={
                            <Button type="primary" icon="search">
                                搜索
                            </Button>
                        }
                    />
                    <Button style={{marginBottom: '20px'}} type="primary" onClick={() => {
                        this.props.history.push('/UserInfo')
                    }}>新建用户</Button>
                </div>
				<Table
					style={{ width: '100%' }}
					columns={this.state.columns}
					data={this.state.data}
					border={true}
					onSelectChange={(selection) => {
						console.log(selection);
					}}
					onSelectAll={(selection) => {
						console.log(selection);
					}}
				/>
				<div className="admin__pagination">
					<Pagination layout="total, prev, pager, next" total={1000} />
				</div>
			</div>
		);
	}
}
