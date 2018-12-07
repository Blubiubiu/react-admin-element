/**
 * @desc 设置
 * @author lsy
 */

import React, { Component } from 'react';
import { Steps, Button } from 'element-react';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import './style.scss';

export default class SetUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: 0
		};
	}
	next() {
		let active = this.state.active + 1;
		if (active > 3) {
			active = 0;
		}
		this.setState({ active });
	}
	render() {
		return (
			<div className="admin__step">
				<Steps active={this.state.active} finishStatus="success">
					<Steps.Step></Steps.Step>
					<Steps.Step></Steps.Step>
					<Steps.Step></Steps.Step>
				</Steps>
                <div className="admin__step__list">
                    <Step1/>
                    <Step2/>
                    <Step3/>
                </div>
				<Button onClick={() => this.next()}>下一步</Button>
			</div>
		);
	}
}
