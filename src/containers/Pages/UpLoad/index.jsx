/**
 * @desc 上传图片|文件
 * @author lsy
 */

import React, { Component } from 'react';
import { Layout } from 'element-react';

import ClickUpLoad from './ClickUpLoad';
import HeadImgUpLoad from './HeadImgUpLoad';
import ListUpLoad from './ListUpLoad';
import DragUpLoad from './DragUpLoad';

import './style.scss';

export default class UpLoad extends Component {
	render() {
		return (
			<Layout.Row>
				<Layout.Col span={12}>
					<ClickUpLoad />
					<ListUpLoad />
				</Layout.Col>
				<Layout.Col span={12}>
					<HeadImgUpLoad />
				</Layout.Col>
				<Layout.Col>
					<DragUpLoad />
				</Layout.Col>
			</Layout.Row>
		);
	}
}
