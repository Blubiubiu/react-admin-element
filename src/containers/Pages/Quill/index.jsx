/**
 * @desc 富文本编译器
 *  富文本编译器功能采用的是github上面的react-quill项目
 *  选取理由：拥有丰富的api并且处于长期维护中
 *  github地址为：https://github.com/zenoamaro/react-quill
 * @author benzzle
 */

import React, { Component } from 'react';
import Editor from '@/components/Editor';

class Quill extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: '<p>传递的数据</p>'
		};
		this.setEditorContent = this.setEditorContent.bind(this);
	}

	async setEditorContent(content) {
		await this.setState({ content });
	}

	render() {
		return (
			<div>
				<Editor setEditorContent={this.setEditorContent} content={this.state.content} />
				<h2 style={{ margin: '20px' }}>富文本展示内容如下：</h2>
				<code style={{ padding: '0 20px' }}>{this.state.content}</code>
			</div>
		);
	}
}

export default Quill;
