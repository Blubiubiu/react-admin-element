/**
 * @desc 角色列表
 * @author lsy
 */

import React, { Component } from 'react';
import { Collapse, Button, Dialog, Input, Form, Message } from 'element-react';

import './style.scss';

export default class Role extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dialogVisible: false,
			form: {
				title: '',
				desc: ''
			},
			rules: {
				title: [ { required: true, message: '请输入角色名', trigger: 'blur' } ],
				desc: [ { required: true, message: '请输入角色描述', trigger: 'blur' } ]
			}
		};
	}

	onChange(key, value) {
		this.setState({
			form: Object.assign({}, this.state.form, { [key]: value })
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.refs.form.validate((valid) => {
			if (valid) {
				Message({
					message: '添加成功',
					type: 'success',
					duration: 1500
				});
				this.props.hanldeRoleArr(this.state.form);
				this.setState({ dialogVisible: false });
				this.setState({
					form: {
						...this.state.form,
						title: '',
						desc: ''
					}
				});
			}
		});
	};

	onCancel = () => {
		this.setState({ dialogVisible: false });
		this.setState({
			form: {
				...this.state.form,
				title: '',
				desc: ''
			}
		});
	};

	render() {
		const { roleArr, activeName } = this.props;
		return (
			<div className="admin__user__role">
				<Collapse value={activeName} accordion>
					{roleArr.map((item) => (
						<Collapse.Item key={item.name} title={item.title} name={item.name}>
							<div>{item.desc}</div>
						</Collapse.Item>
					))}
				</Collapse>

				<Button className="admin__user__role__btn" onClick={this.addRole}>
					添加角色
				</Button>

				<Dialog title="添加角色" size="tiny" visible={this.state.dialogVisible} onCancel={this.onCancel}>
					<Dialog.Body>
						<Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="80">
							<Form.Item label="角色名" prop="title">
								<Input value={this.state.form.title} onChange={this.onChange.bind(this, 'title')} />
							</Form.Item>
							<Form.Item label="角色描述" prop="desc">
								<Input
									type="textarea"
									value={this.state.form.desc}
									onChange={this.onChange.bind(this, 'desc')}
								/>
							</Form.Item>
						</Form>
					</Dialog.Body>

					<Dialog.Footer className="dialog-footer">
						<Button onClick={this.onCancel}>取 消</Button>
						<Button type="primary" onClick={this.handleSubmit}>
							确 定
						</Button>
					</Dialog.Footer>
				</Dialog>
			</div>
		);
	}

	addRole = () => {
		this.setState({ dialogVisible: true });
	};
}
