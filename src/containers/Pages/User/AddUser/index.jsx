/**
 * @desc 添加用户
 * @author lsy
 */

import React, { Component } from 'react';
import { Dialog, Table, Tag, Button, Pagination } from 'element-react';

export default class AddUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
            checkedArr: [], //选中项数据缓存
			columns: [
				{
                    type: 'selection',
                    reserveSelection: true
				},
				{
					label: '用户名',
					prop: 'name',
					width: 160
				},
				{
					label: '身份',
					prop: 'access',
					width: 160
				},
				{
					label: '性别',
					prop: 'sex',
					width: 80,
					align: 'center'
				},
				{
					label: '年龄',
					prop: 'age',
					width: 80,
					align: 'center'
				},
				{
					label: '地址',
					prop: 'address'
				}
            ],
            data: [],
            data1: [
				{   
                    id: "1",
					name: 'Meter',
					access: '管理员',
					sex: '女',
					age: '24',
					address: '北京市海淀区'
				},
				{
                    id: "2",
					name: 'Jack',
					access: '管理员',
					sex: '男',
					age: '24',
					address: '上海市普陀区'
				},
				{
                    id: "3",
					name: 'Anty',
					access: '管理员',
					sex: '男',
					age: '24',
					address: '西安市未央区'
				},
				{
                    id: "4",
					name: 'Kimie',
					access: 'Vip会员',
					sex: '女',
					age: '24',
					address: '安徽市'
				}
            ],
            data2: [
                {
                    id: "5",
					name: 'Blues',
					access: '普通用户',
					sex: '男',
					age: '24',
					address: '天津市高薪区'
				},
				{
                    id: "6",
					name: 'Sun',
					access: '普通用户',
					sex: '男',
					age: '24',
					address: '武汉市'
				},
				{
                    id: "7",
					name: 'Lebur',
					access: '普通用户',
					sex: '男',
					age: '24',
					address: '重庆市市区'
				},
				{
                    id: "8",
					name: 'rick',
					access: '普通用户',
					sex: '男',
					age: '27',
					address: '西安市莲湖区'
				}
            ],
			tags: []
		};
	}
	render() {
		const { dialogVisible} = this.props;
		return (
			<div>
				<Dialog title="用户列表" visible={dialogVisible} onCancel={() => this.setState({ dialogVisible: false })}>
					<Dialog.Body>
						<Table
							style={{ width: '100%' }}
							columns={this.state.columns}
							data={this.state.data}
                            border={true}
                            rowKey={this.getRowKeys.bind(this)}
							onSelectChange={(selection) => {
                                this.selectChange(selection)
                            }}
							onSelectAll={(selection) => {
								console.log(selection);
							}}
						/>
                        <div>
                            <Pagination layout="total, prev, pager, next" pageSize={4} total={8} onCurrentChange={(index) => {
                                this.paging(index)
                            }}/>
                        </div>
						<div>
							已选择:
							{this.state.tags.map((tag) => {
								return (
									<Tag
										key={tag.key}
										closable={true}
										closeTransition={false}
										onClose={this.handleClose.bind(this, tag)}
									>
										{tag.name}
									</Tag>
								);
							})}
						</div>
					</Dialog.Body>
					<Dialog.Footer className="dialog-footer">
						<Button onClick={() => this.setState({ dialogVisible: false })}>取消</Button>
						<Button type="primary" onClick={() => this.setState({ dialogVisible: false })}>
							确定
						</Button>
					</Dialog.Footer>
				</Dialog>
			</div>
		);
    }
    //初始化数据
    componentDidMount() {
        this.setState({
            data: this.state.data1
        })
    }
    handleClose () {

    }
    getRowKeys(row) {
        return row.id;
    }
    //翻页
    paging(index) {
        this.setState({
            data: index === 1? this.state.data1: this.state.data2
        })
    }
    //选择某一项 check
    selectChange(selection) {
        console.log(selection)
        if (this.checkedArr && this.checkedArr.length) {

        } else {
            this.checkedArr = selection;
        }
    }
}
