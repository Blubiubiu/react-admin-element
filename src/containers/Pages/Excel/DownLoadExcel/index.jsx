/**
 * @desc 导出excel
 * @author lsy
 */

import React, { Component } from 'react';
import { Button, Table } from 'element-react';

import excel from '@/libs/excel';

import './style.scss';

export default class DownLoadExcel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{
					label: '一级列表',
					prop: '一级列表'
				},
				{
					label: '二级列表',
					prop: '二级列表'
				},
				{
					label: '三级列表',
					prop: '三级列表'
				}
			],
			data: [
				{
					"一级列表": 0,
					"二级列表": 1,
					"三级列表": 2
				},
				{
					"一级列表": 3,
					"二级列表": 4,
					"三级列表": 5
				},
				{
					"一级列表": 6,
					"二级列表": 7,
					"三级列表": 8
				}
			]
		};
	}
	render() {
		return (
			<div className="admin__download__excel">
				<div className="admin__download__excel__operation">
					<h4 style={{ marginBottom: '20px' }}>导出EXCEL</h4>
					<Button type="primary" onClick={this.handleClick.bind(this)}>
						导出文件
					</Button>
				</div>
				<div className="admin__download__excel__table">
					<Table columns={this.state.columns} data={this.state.data} />
				</div>
			</div>
		);
	}
	handleClick() {
		if (this.state.data.length) {
			const params = {
				title: [ '一级列表', '二级列表', '三级列表' ],
				key: [ '一级列表', '二级列表', '三级列表' ],
				data: this.state.data,
				filename: '列表'
			};
			excel.export_array_to_excel(params);
			this.exportLoading = false;
		} else {
			this.$Message.info('表格数据不能为空！');
		}
	}
}
