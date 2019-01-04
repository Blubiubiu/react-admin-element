/**
 * @desc 新增用户
 * @author lsy
 */

import React, { Component } from 'react';

import { Form, Button, Input, Radio, Cascader, Message, Select } from 'element-react';

export default class UserInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			options: [
				{
					label: '江苏省',
					value: '江苏省',
					children: [
						{
							label: '南京市',
							value: '南京市'
						}
					]
				},
				{
					label: '陕西省',
					value: '陕西省',
					children: [
						{
							label: '西安市',
							value: '西安市',
							children: [
								{
									label: '未央区',
									value: '未央区'
								}
							]
						}
					]
				}
			],
			form: {
				name: '',
				sex: '1',
				age: '',
				role: '',
				province: [],
				address: ''
			},
			rules: {
				name: [ { required: true, message: '请输入用户名', trigger: 'blur' } ],
				sex: [ { required: true, message: '请选择性别', trigger: 'change' } ],
				age: [
					{ required: true, message: '请输入年龄', trigger: 'blur' },
					{
						validator: (rule, value, callback) => {
							let age = parseInt(value, 10);
							if (!Number.isInteger(age)) {
								callback(new Error('请输入数字'));
							} else {
								callback();
							}
						},
						trigger: 'change'
					}
				],
				role: [ { required: true, message: '请选择用户角色', trigger: 'change' } ],
				province: [ { required: true, message: '请选择省份', trigger: 'change', type: 'array' } ]
			}
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.refs.form.validate((valid) => {
			if (valid) {
				Message({
					message: '创建成功',
					type: 'success',
					duration: 1000
				});
				setTimeout(() => {
					this.props.history.goBack();
				}, 1000);
			} else {
				Message({
					message: '创建失败，请检查您的输入后重试',
					type: 'error',
					duration: 2000
				});
				return false;
			}
		});
	};

	onChange(key, value) {
		this.setState({
			form: Object.assign({}, this.state.form, { [key]: value })
		});
	}
	render() {
		return (
			<Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="80" className="demo-ruleForm">
				<Form.Item label="用户名" prop="name">
					<Input
						style={{ width: '500px' }}
						value={this.state.form.name}
						onChange={this.onChange.bind(this, 'name')}
					/>
				</Form.Item>
				<Form.Item label="性别" prop="sex">
					<Radio.Group value={this.state.form.sex} onChange={this.onChange.bind(this, 'sex')}>
						<Radio value="1">男</Radio>
						<Radio value="0">女</Radio>
					</Radio.Group>
				</Form.Item>
				<Form.Item label="年龄" prop="age">
					<Input
						style={{ width: '500px' }}
						value={this.state.form.age}
						onChange={this.onChange.bind(this, 'age')}
					/>
				</Form.Item>
				<Form.Item label="用户权限" prop="role">
					<Select value={this.state.form.role} placeholder="请选择" onChange={this.onChange.bind(this, 'role')}>
						<Select.Option label="管理员" value="1" />
						<Select.Option label="Vip会员" value="2" />
						<Select.Option label="普通会员" value="3" />
					</Select>
				</Form.Item>
				<Form.Item label="居住地" prop="province">
					<Cascader
						options={this.state.options}
						value={this.state.form.province}
						onChange={this.onChange.bind(this, 'province')}
					/>
				</Form.Item>
				<Form.Item label="详细地址">
					<Input
						style={{ width: '500px' }}
						type="textarea"
						value={this.state.form.address}
						onChange={this.onChange.bind(this, 'address')}
					/>
				</Form.Item>

				<Form.Item>
					<Button type="primary" onClick={this.handleSubmit}>
						立即创建
					</Button>
				</Form.Item>
			</Form>
		);
	}
	componentDidMount() {
		console.log(this.props.history.location.pathname);
	}
}
