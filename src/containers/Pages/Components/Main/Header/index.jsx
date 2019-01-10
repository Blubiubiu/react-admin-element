/**
 * @desc 头部
 * @author lsy
 */

import React, { Component } from 'react';
import { ColorPicker } from 'element-react' 
import screenfull from 'screenfull'

import BreadCrumb from './BreadCrumb';
import User from './User';

import './style.scss';
import { inject, observer } from 'mobx-react';

@inject('global')
@observer
class Header extends Component {
	render() {
        const color = null;
		return (
			<div className="admin__header" style={{background: this.props.global.style || '#fff'}}>
				<BreadCrumb />
                <div className="admin__header__content">
                    <i style={{color: '#97a8be'}} onClick={this.fullscreen.bind(this)} className="admin-icon-quanping"/>
                    <User />
                    <ColorPicker value={color} showAlpha onChange={color => this.props.global.setStyle(color)}></ColorPicker>
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

export default Header
