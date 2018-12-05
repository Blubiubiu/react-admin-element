import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'element-react';

import { inject, observer } from 'mobx-react'

@inject("global")
@observer

class Home extends Component {
	render() {
		return (
			<div>
				<p>Home</p>
				<Link to="/login">to login</Link>
				<Button type="primary">111</Button>
				
				<p>{this.props.global.id}</p>	
				<p onClick={this.change}>修改</p>
			</div>
		);
	}
	change = () => {
		this.props.global.setId()
	}
	componentDidMount () {
		console.log(this.props)
	}
}


export default Home
