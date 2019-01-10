/**
 * @desc step2-重置密码
 * @author lsy
 */

import React, { Component } from 'react';
import { Form, Input, Button } from 'element-react';

import './style.scss';

export default class Step2 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			form: {
				password: '',
				checkPassword: ''
			},
			rules: {
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{
						validator: (rule, value, callback) => {
							if (!value) {
								callback(new Error('请输入密码'));
							} else {
								if (this.state.form.checkPassword) {
									this.refs.form.validateField('checkPass');
								}
								callback();
							}
						}
					}
				],
				checkPassword: [
					{ required: true, message: '请再次输入密码', trigger: 'blur' },
					{
						validator: (rule, value, callback) => {
							if (!value) {
								callback(new Error('请再次输入密码'));
							} else if (value !== this.state.form.password) {
								callback(new Error('两次输入密码不一致!'));
							} else {
								callback();
							}
						}
					}
				]
			}
		};
	}
	render() {
		let disabledBtn = this.state.form.password === this.state.form.checkPassword && this.state.form.password;
		return (
			<div style={{ display: this.props.active ? 'block' : 'none' }}>
				<Form ref="form" model={this.state.form} rules={this.state.rules}>
					<Form.Item prop="password">
						<Input
							type="password"
							value={this.state.form.password}
							placeholder="请输入密码"
							onChange={this.onChange.bind(this, 'password')}
							autoComplete="off"
						/>
					</Form.Item>
					<Form.Item prop="checkPassword">
						<Input
							type="password"
							value={this.state.form.checkPassword}
							placeholder="请再次输入密码"
							onChange={this.onChange.bind(this, 'checkPassword')}
							autoComplete="off"
						/>
					</Form.Item>
				</Form>
				<Button
					disabled={!disabledBtn}
					type="primary"
					className="admin__forgetPwd__nextBtn"
					onClick={() => {
						this.props.callback(1);
					}}
				>
					下一步
				</Button>
			</div>
		);
	}
	onChange(key, value) {
		this.setState({
			form: Object.assign({}, this.state.form, { [key]: value })
		});
	}
}
