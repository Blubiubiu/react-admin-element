/**
 * @desc 用户头像上传
 * @author lsy
 */

import React, { Component } from 'react';
import { Upload, Message } from 'element-react';

import './style.scss';

export default class HeadImgUpLoad extends Component {
	constructor(props) {
		super(props);

		this.state = {
			imageUrl: ''
		};
	}
	render() {
		const { imageUrl } = this.state;
		return (
			<div className="admin__upload">
				<h3>头像上传</h3>
				<p style={{ margin: '10px 0', color: '#ccc', fontSize: '14px' }}>使用 beforeUpload 限制用户上传的图片格式和大小。</p>
				<Upload
					className="admin__uploader"
					action="//jsonplaceholder.typicode.com/posts/"
					showFileList={false}
					onSuccess={(res, file) => this.handleAvatarScucess(res, file)}
					beforeUpload={(file) => this.beforeAvatarUpload(file)}
					tip={<div className="el-upload__tip">测试时请尽量使用不大于500kb的图片or文件</div>}
				>
					{imageUrl ? <img src={imageUrl} alt="" /> : <i className="el-icon-plus admin__uploader__icon" />}
				</Upload>
			</div>
		);
	}

	handleAvatarScucess(res, file) {
		this.setState({ imageUrl: URL.createObjectURL(file.raw) });
	}

	beforeAvatarUpload(file) {
		const isJPG = file.type === 'image/jpeg';
		const isLt2M = file.size / 1024 / 1024 < 2;

		if (!isJPG) {
			Message('上传头像图片只能是 JPG 格式!');
		}
		if (!isLt2M) {
			Message('上传头像图片大小不能超过 2MB!');
		}
		return isJPG && isLt2M;
	}
}
