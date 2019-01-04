/**
 * @desc 导入excel
 * @author lsy
 */

import React, { Component } from 'react';
import { Upload, Button, Table } from 'element-react';

import excel from '@/libs/excel';

import './style.scss';

export default class UpLoadExcel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [],
			data: []
		};
	}
	render() {
		let table;
		if (this.state.columns && this.state.columns.length) {
			table = <Table emptyText="" columns={this.state.columns} data={this.state.data} />;
		}
		return (
			<div className="admin__upload__excel">
				<div className="admin__upload__excel__operation">
					<h4 style={{ marginBottom: '20px' }}>导入EXCEL</h4>
					<Upload
						ref="upload"
						action="//jsonplaceholder.typicode.com/posts/"
						accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
						onSuccess={(response, file, fileList) => this.handleSuccess(response, file, fileList)}
						beforeUpload={(file) => this.handleBefore(file)}
					>
						<Button type="primary">点击上传</Button>
					</Upload>
				</div>
				<div className="admin__upload__excel__table">{table}</div>
			</div>
		);
	}

	handleBefore(file) {
		if (!file) {
			return false;
		}

		this.setState({
			columns: [],
			data: []
		});

		const reader = new FileReader();
		reader.readAsArrayBuffer(file);

		reader.onload = (e) => {
			const data = e.target.result;

			const { header, results } = excel.read(data, 'array');

			const tableTitle = header.map((item) => {
				return {
					label: item,
					prop: item
				};
			});
			this.setState({
				columns: [ ...this.state.columns, ...tableTitle ],
				data: [ ...this.state.data, ...results ]
			});
		};
	}

	handleSuccess(response, file, fileList) {}
}
