/**
 * @desc 用户头像
 * @author lsy
 */

import React, { Component } from 'react';
import { Dropdown } from 'element-react';

import './style.scss';

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: 'admin'
        }
    }

	render() {
		return (
			<div className="admin__header__user">
				<img src={require('@/assets/images/default_head_img.png')} alt="" />
				<div>
					<Dropdown
                        onCommand={this.handleClick.bind(this)}
                        menuAlign="start"
						menu={
							<Dropdown.Menu>
								<Dropdown.Item>退出</Dropdown.Item>
							</Dropdown.Menu>
						}
					>
						<span className="admin__header__userName">
                            {this.state.userName}
                        </span>
					</Dropdown>
				</div>
			</div>
		);
	}
	handleClick() {
		window.location.href = '#/login'
	}
}
