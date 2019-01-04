/**
 * @desc 用户头像
 * @author lsy
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Dropdown } from 'element-react';

import './style.scss';


class User extends Component {
	render() {
		return (
			<div className="admin__header__user">
				
				<div>
					<Dropdown
                        
                        menuAlign="start"
						menu={
							<Dropdown.Menu>
								<Dropdown.Item command="signOut"><Link to="/Login">退出</Link></Dropdown.Item>
							</Dropdown.Menu>
						}
					>
						<span className="admin__header__userName">
                            admin
                        </span>
					</Dropdown>
				</div>
			</div>
		);
	}
}

export default User
