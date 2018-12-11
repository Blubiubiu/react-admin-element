/**
 * @desc 图标库
 * @author lsy
 */

import React, { Component } from 'react';
import { Message } from 'element-react';

import iconList from './iconLIst';

import './style.scss';

export default class Icons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}
	render() {
		return (
			<div className="admin__icons">
				<p>element-react提供的图标并不多，添加一些在这里</p>
				<input
					style={{ position: 'absolute', zIndex: '-9999', opacity: 0 }}
					ref="input"
					value={this.state.value}
					type="text"
					readOnly
				/>
				<pre style={{ padding: '10px', margin: '10px 0', background: '#f8f8f8' }}>
					&lt;i className="admin-icon-tiaoshi"/&gt;
				</pre>

				<ul className="admin__icon__list">
					{iconList.map((v, i) => (
						<li style={{ cursor: 'pointer' }} key={i} onClick={this.copy.bind(this, v)}>
							<span>
								<i className={v} />
								{v}
							</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
	copy(val) {
		this.setState(
			{
				value: `<i className="${val}"/>`
			},
			() => {
				this.refs.input.select();
				if (document.execCommand('copy')) {
					document.execCommand('copy');
					Message({
						showClose: true,
						message: '代码已经成功复制到剪切板',
						type: 'success'
					});
				}
			}
		);
	}
}
