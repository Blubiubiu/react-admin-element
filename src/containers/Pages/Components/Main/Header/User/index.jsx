/**
 * @desc 用户头像
 * @author lsy
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Dropdown } from 'element-react';

import './style.scss';
import { inject, observer } from 'mobx-react';

@inject('user')
@observer

class User extends Component {
	render() {
		return (
			<div className="admin__header__user">
				<img src={this.props.user.headPortraitUrl} alt="" />
				<div>
					<Dropdown
                        menuAlign="start"
						menu={
							<Dropdown.Menu>
                                <Dropdown.Item command="setUp"><Link to="/PersonInfo">设置</Link></Dropdown.Item>
								<Dropdown.Item command="signOut"><Link to="/Login">退出</Link></Dropdown.Item>
							</Dropdown.Menu>
						}
					>
						<span className="admin__header__userName">
                            {this.props.user.name}
                        </span>
					</Dropdown>
				</div>
			</div>
		);
	}
}

export default User
