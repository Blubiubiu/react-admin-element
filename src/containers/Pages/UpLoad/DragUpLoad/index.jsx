/**
 * @desc 拖拽上传
 * @author lsy
 */

import React, { Component } from 'react';
import { Upload } from 'element-react';

export default class DragUpLoad extends Component {
	render() {
		return (
			<div className="admin__upload">
				<h3 style={{ marginBottom: '20px' }}>拖拽上传</h3>
				<Upload
					drag
					action="//jsonplaceholder.typicode.com/posts/"
					multiple
					tip={<div className="el-upload__tip">测试时请尽量使用不大于500kb的图片or文件</div>}
				>
					<i className="el-icon-upload" />
					<div className="el-upload__text">
						将文件拖到此处，或<em>点击上传</em>
					</div>
				</Upload>
			</div>
		);
	}
}
