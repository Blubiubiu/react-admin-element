/**
 * @desc 点击上传
 * @author lsy
 */

import React, { Component } from 'react';

import { Upload, Message, Button } from 'element-react';

export default class ClickUpLoad extends Component {
	render() {
        const fileList = [
			{ name: 'demo.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg' },
			{ name: 'demo.xlsx', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg' }
		];
		return (
			<div className="admin__upload">
				<Upload
					action="//jsonplaceholder.typicode.com/posts/"
					onPreview={(file) => this.handlePreview(file)}
					onRemove={(file, fileList) => this.handleRemove(file, fileList)}
					fileList={fileList}
					limit={3}
					onExceed={(files, fileList) => {
						Message.warning(
							`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`
						);
                    }}
                    tip={<div className="el-upload__tip">测试时请尽量使用不大于500kb的图片or文件</div>}
				>
					<Button size="small" type="primary">
						点击上传
					</Button>
				</Upload>
			</div>
		);
    }
    
	handlePreview(file) {
		console.log('选中');
	}

	handleRemove(file, fileList) {
		console.log('删除');
	}
}
