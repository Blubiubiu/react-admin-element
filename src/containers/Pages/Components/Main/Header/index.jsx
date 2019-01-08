/**
 * @desc 头部
 * @author lsy
 */

import React, { Component } from 'react';
import screenfull from 'screenfull'

import BreadCrumb from './BreadCrumb';
import User from './User';

import './style.scss';

export default class Header extends Component {
	render() {
		return (
			<div className="admin__header">
				<BreadCrumb />
                <div className="admin__header__user">
                    <i onClick={this.fullscreen.bind(this)} className="admin-icon-quanping"/>
                    <User />
                </div>
			</div>
		);
    }
    fullscreen() {
        if (screenfull.enabled) {
            screenfull.request();
        }
    }
}
