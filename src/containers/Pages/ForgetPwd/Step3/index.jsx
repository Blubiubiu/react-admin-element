/**
 * @desc step3-修改成功
 * @author lsy
 */

import React, { Component } from 'react';
import { Button } from 'element-react'

import './style.scss';

export default class Step3 extends Component {
	render() {
		return (
			<div style={{ display: this.props.active ? 'block' : 'none', textAlign: 'center' }}>
				<p style={{marginBottom: '20px'}}>修改成功</p>
				<Button
					type="primary"
					className="admin__forgetPwd__nextBtn"
					onClick={() => {
						this.props.callback(2);
					}}
				>
					登录
				</Button>
			</div>
		);
	}
}
