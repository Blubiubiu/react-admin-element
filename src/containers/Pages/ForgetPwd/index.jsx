/**
 * @desc forgetPwd
 * @author lsy
 */

import React, { Component } from 'react';
import { Steps } from 'element-react';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import './style.scss';

export default class index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: 0,
			showActive: [ true, false, false ]
		};
	}
	render() {
		return (
			<div className="admin__forgetPwd__wrapper">
				<div className="admin__forgetPwd__step">
					<Steps space={200} active={this.state.active} finishStatus="success">
						<Steps.Step title="验证身份" />
						<Steps.Step title="重置密码" />
						<Steps.Step title="修改成功" />
					</Steps>
				</div>
				<div className="admin__forgetPwd__content">
					<Step1 callback={this.next.bind(this)} active={this.state.showActive[0]} />
					<Step2 callback={this.next.bind(this)} active={this.state.showActive[1]} />
					<Step3 callback={this.next.bind(this)} active={this.state.showActive[2]} />
				</div>
			</div>
		);
	}
	next(index) {
		if (index === 2) {
			this.props.history.push('/Login');
		} else {
			let showActive = [ false, false, false ];
			showActive[index + 1] = true;

			let active = this.state.active + 1;
			if (active > 3) {
				active = 0;
			}

			this.setState({ active, showActive });
		}
	}
}
