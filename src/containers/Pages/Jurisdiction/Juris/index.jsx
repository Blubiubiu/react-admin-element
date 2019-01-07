/**
 * @desc 权限列表
 * @author lsy
 */

import React, { Component } from 'react';
import { Tree, Button } from 'element-react';

import './style.scss';

export default class Juris extends Component {
	append(store, data) {
		store.append({ id: this.id++, label: `新增权限`, children: [] }, data);
	}

	remove(store, data) {
		store.remove(data);
	}

	renderContent(nodeModel, data, store) {
		return (
			<span>
				<span>
					<span>{data.label}</span>
				</span>
				<span style={{ float: 'right', marginRight: '20px' }}>
					<Button size="mini" onClick={() => this.append(store, data)}>
						添加
					</Button>
					<Button size="mini" onClick={() => this.remove(store, data)}>
						删除
					</Button>
				</span>
			</span>
		);
	}

	render() {
		const { JurisArr, options } = this.props;
		return (
			<div className="admin__user__juris">
				<Tree
					data={JurisArr}
					options={options}
					isShowCheckbox={true}
					nodeKey="id"
					expandOnClickNode={false}
					defaultExpandAll={true}
					renderContent={(...args) => this.renderContent(...args)}
				/>
			</div>
		);
	}
}
