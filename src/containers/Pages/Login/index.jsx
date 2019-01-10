/**
 * @desc login
 * @author lsy
 */

import React, { Component } from 'react';
import { Layout, Form, Input, Button, Message } from 'element-react';

import './style.scss';
import bgImg from '../../../assets/images/bg.jpg';

const bg = {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	backgroundImage: `url(${bgImg})`,
	backgroundSize: '100% 100%'
};

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				name: '',
				password: ''
			},
			rules: {
				name: [ { required: true, message: '请输入用户名', trigger: 'blur' } ],
				password: [ { required: true, message: '请输入密码', trigger: 'blur' } ]
			}
		};
	}
	handleSubmit(e) {
		e.preventDefault();
		this.refs.form.validate((valid) => {
			if (valid) {
				Message({
					message: '登录成功',
					type: 'success',
					duration: 1000
				});
				setTimeout(() => {
					this.props.history.push('/');
				}, 1000);
			} else {
				return false;
			}
		});
	}
	onChange(key, value) {
		this.setState({
			form: Object.assign({}, this.state.form, { [key]: value })
		});
	}
	render() {
		return (
			<Layout.Row className="admin__login__wrapper" style={bg}>
				<Layout.Col span={16} />
				<Layout.Col span={8}>
					<Form ref="form" model={this.state.form} rules={this.state.rules} className="admin__login__form">
						<div style={{ textAlign: 'center', marginBottom: '40px' }}>welcome to react-admin-element</div>
						<Form.Item label="用户名" prop="name">
							<Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')} />
						</Form.Item>
						<Form.Item label="密码" prop="password">
							<Input
								type="password"
								value={this.state.form.password}
								onChange={this.onChange.bind(this, 'password')}
							/>
                            <div className="admin__login__form__forgetPwd">
                                <span onClick={() => {
                                    this.props.history.push('/ForgetPwd')
                                }}>忘记密码?</span>
                            </div>
						</Form.Item>
						<Form.Item className="admin__login__form__btn">
							<Button type="primary" style={{width: '200px'}} onClick={this.handleSubmit.bind(this)}>
								登录
							</Button>
						</Form.Item>
						<div style={{ textAlign: 'center', color: '#ccc', fontSize: '12px' }}>输入任意用户名密码即可</div>
					</Form>
				</Layout.Col>
			</Layout.Row>
		);
	}
}
