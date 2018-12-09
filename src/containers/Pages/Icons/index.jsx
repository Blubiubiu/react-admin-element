/**
 * @desc 图标库
 * @author lsy
 */

import React, { Component } from 'react';

import iconList from './iconLIst'

import './style.scss'

export default class Icons extends Component {
	render() {
		return (
			<div className="admin__icons">
				<p>element-react提供的图标并不多，添加一些在这里</p>
                
                <pre style={{padding: "10px", margin: "10px 0", background: "#f8f8f8"}}>
                    &lt;i className="admin-icon-tiaoshi"/&gt;
                </pre>

				<ul className="admin__icon__list">
					{iconList.map((v, i) => (
						<li key={i}>
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
}
