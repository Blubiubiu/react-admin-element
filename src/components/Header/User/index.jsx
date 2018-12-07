/**
 * @desc 用户头像
 * @author lsy
 */

import React, { Component } from 'react';
import { Dropdown } from 'element-react';

import './style.scss';
import { inject, observer } from 'mobx-react';

@inject('router')
@observer

class User extends Component {
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
                                <Dropdown.Item command="setUp">设置</Dropdown.Item>
								<Dropdown.Item command="signOut">退出</Dropdown.Item>
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
	handleClick(command) {
        switch (command) {
            case 'setUp': 
                window.location.href = '#/SetUp';
                this.props.router.defaultActive = ""
            break;
            case 'signOut':
                window.location.href = '#/Login'
            break;
            default:
                return 
        }
	}
}

export default User
