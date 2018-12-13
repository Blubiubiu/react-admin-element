//参照segmentfault的用户头像管理功能开发
import React, { Component, Fragment } from 'react';
import { Form, Input, Radio, Button } from 'element-react';
import './style.scss';
import SetPortrait from './SetPortrait'
class PersonInfo extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      form: {
        name: 'admin',
        sex: "male",
        address: "北京"
      }
    };
    this.onChange = this.onChange.bind(this)
  }
  
  onChange(key, value) {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value })
    });
  }
  
  render() {
    return (
      <Fragment>
        <Form labelPosition="right" labelWidth="100" model={this.state.form} className="demo-form-stacked">
          <Form.Item label="" className="portrait__item">
            <SetPortrait />
          </Form.Item>
          <Form.Item label="姓名">
            <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')} style={{ width:400 }}></Input>
          </Form.Item>
          <Form.Item label="性别">
            <Radio value="male" checked={this.state.form.sex === 'male'} onChange={this.onChange.bind(this,"sex")}>男</Radio>
            <Radio value="female" checked={this.state.form.sex === 'female'} onChange={this.onChange.bind(this,"sex")}>女</Radio>
          </Form.Item>
          <Form.Item label="地址">
          <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')} style={{ width:400 }}></Input>
          </Form.Item>
          <Form.Item>
            <Button>确定修改</Button>
          </Form.Item>
        </Form>
      </Fragment>
    )
  }
}
export default PersonInfo;
