/**
 * @desc step1-验证身份
 * @author lsy
 */

import React, { Component } from 'react';
import { Form, Input, Button, Message } from 'element-react';

import './style.scss';

export default class Step1 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			form: {
				phone: '',
				code: ''
			},
			rules: {
				phone: [
					{ required: true, message: '请输入手机号', trigger: 'blur' },
					{
						validator: (rule, value, callback) => {
							var phone = parseInt(value, 10);

							if (!Number.isInteger(phone)) {
								callback(new Error('请输入正确格式的手机号'));
							} else if (String(phone).length < 11) {
								callback(new Error('请输入正确格式的手机号'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}
				],
				code: [
					{ required: true, message: '请输入验证码', trigger: 'blur' },
					{
						validator: (rule, value, callback) => {
							var code = parseInt(value, 10);
							if (!Number.isInteger(code)) {
								callback(new Error('请输入正确格式的验证码'));
							} else if (String(code).length < 4) {
								callback(new Error('请输入正确格式的验证码(4位数字)'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}
				]
			},
			codeBtnDisable: false,
			auth_time: 60
		};
	}

	render() {
		let _phone = parseInt(this.state.form.phone, 10);
		let _code = parseInt(this.state.form.code, 10);
		let disabledBtn =
			Number.isInteger(_phone, 10) &&
			String(_phone).length === 11 &&
			Number.isInteger(parseInt(_code, 10)) &&
			String(_code).length === 4;

		return (
			<div style={{ display: this.props.active ? 'block' : 'none' }}>
				<Form ref="form" model={this.state.form} rules={this.state.rules}>
					<Form.Item prop="phone">
						<Input
							value={this.state.form.phone}
							maxLength={11}
							placeholder="请输入手机号"
							onChange={this.onChange.bind(this, 'phone')}
							autoComplete="off"
						/>
					</Form.Item>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Form.Item prop="code">
							<Input
								value={this.state.form.code}
								maxLength={4}
								placeholder="请输入验证码"
								onChange={this.onChange.bind(this, 'code')}
								autoComplete="off"
								style={{ width: '280px' }}
							/>
						</Form.Item>
						<Button
							disabled={this.state.codeBtnDisable}
							style={{ width: '100px', marginLeft: '20px', marginBottom: '22px' }}
							onClick={() => this.getCode()}
						>
							{!this.state.codeBtnDisable ? '获取验证码' : this.state.auth_time + '秒'}
						</Button>
					</div>
				</Form>
				<Button
                    disabled={!disabledBtn}
                    type="primary"
                    className="admin__forgetPwd__nextBtn"
					onClick={() => {
						this.props.callback(0);
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
	//获取验证码
	getCode() {
		let _phone = parseInt(this.state.form.phone, 10);
		if (Number.isInteger(parseInt(_phone, 10)) && String(_phone).length === 11) {
			Message({
				message: '验证码发送成功',
				type: 'success'
			});

			this.setState({
				codeBtnDisable: true
			});
			let _auth_time = this.state.auth_time;
			let auth_timetimer = setInterval(() => {
				this.setState({
					auth_time: _auth_time--
				});
				if (this.state.auth_time <= 0) {
					this.setState({
						codeBtnDisable: false
					});
					this.setState({
						auth_time: 60
					});
					clearInterval(auth_timetimer);
				}
			}, 1000);
		} else {
			Message({
				message: '请检查您的手机号格式',
				type: 'warning'
			});
		}
	}
}
