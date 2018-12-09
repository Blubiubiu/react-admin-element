/**
 * @desc 图片预览列表上传
 * @author lsy
 */

import React, { Component } from 'react';
import { Upload, Button } from 'element-react';

export default class ListUpLoad extends Component {
	render() {
		const fileList2 = [
			{ name: 'demo.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg' }
		];
		return (
			<div className="admin__upload">
				<Upload
					action="//jsonplaceholder.typicode.com/posts/"
					onPreview={(file) => this.handlePreview(file)}
					onRemove={(file, fileList) => this.handleRemove(file, fileList)}
					fileList={fileList2}
					listType="picture"
					tip={<div className="el-upload__tip">测试时请尽量使用不大于500kb的图片or文件</div>}
				>
					<Button size="small" type="primary">
						点击上传
					</Button>
				</Upload>
			</div>
		);
	}
	handleRemove(file, fileList) {
		console.log(file, fileList);
	}

	handlePreview(file) {
		console.log(file);
	}
}
