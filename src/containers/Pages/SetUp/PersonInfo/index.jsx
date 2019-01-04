/**
 * @desc 用户信息设置修改模块
 *  主要功能包含头像的本地选取裁剪功能，头像和姓名同步于模块user功能（mobx实现）
 * @author benzzle
 */
import React, { Component, Fragment } from 'react';
import { Form, Input, Radio, Button, Loading } from 'element-react';
import SetPortrait from './SetPortrait';

import { inject, observer } from 'mobx-react';
@inject('user')
@observer
class PersonInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			form: {
				name: this.props.user.name,
				sex: this.props.user.sex,
				address: this.props.user.address,
				headPortraitUrl: this.props.user.headPortraitUrl
			},
			asyncLoading: false
		};
	}

	changePortrait(val) {
		this.setState({
			form: Object.assign(this.state.form, { headPortraitUrl: val })
		});
	}

	onChange(key, value) {
		this.setState({
			form: Object.assign(this.state.form, { [key]: value })
		});
	}

	modify = () => {
		clearTimeout(this.timeout);

		this.timeout = setTimeout(() => {
			this.setState({
				asyncLoading: false
			});
			this.props.user.setUser(this.state.form);
		}, 2000);

		this.setState({
			asyncLoading: true
		});
	};

	render() {
		return (
			<Fragment>
				<Form labelPosition="right" labelWidth="100" model={this.state.form} className="demo-form-stacked">
					<Form.Item label="" className="portrait__item">
						<SetPortrait changePortrait={this.changePortrait.bind(this)} />
					</Form.Item>
					<Form.Item label="姓名">
						<Input
							value={this.state.form.name}
							onChange={this.onChange.bind(this, 'name')}
							style={{ width: 400 }}
						/>
					</Form.Item>
					<Form.Item label="性别">
						<Radio
							value="male"
							checked={this.state.form.sex === 'male'}
							onChange={this.onChange.bind(this, 'sex')}
						>
							男
						</Radio>
						<Radio
							value="female"
							checked={this.state.form.sex === 'female'}
							onChange={this.onChange.bind(this, 'sex')}
						>
							女
						</Radio>
					</Form.Item>
					<Form.Item label="地址">
						<Input
							value={this.state.form.address}
							onChange={this.onChange.bind(this, 'address')}
							style={{ width: 400 }}
						/>
					</Form.Item>
					<Form.Item>
						<Button onClick={this.modify}>确定修改</Button>
						{this.state.asyncLoading && <Loading fullscreen={true} />}
					</Form.Item>
				</Form>
			</Fragment>
		);
	}
}
export default PersonInfo;
