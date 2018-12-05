/**
 * @desc APP
 * @author lsy
 * @todo xxx
 */


import React, { Component } from 'react';
import 'element-theme-default';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '@/containers/Pages/Components/Main';
import Login from '@/containers/Pages/Login'
import RouterMap from '@/router';

import '@/assets/css/common.scss'

class App extends Component {
	render() {
		const MainRouter = (
			<Main>
				<RouterMap/>
			</Main>
		) 
		return (
			<Router>
				<div className="App">
				{
					console.log(this.props)
				}
					<Switch>
						<Route path="/login" component={Login}/>
						<Route path="/" render={() => MainRouter}/>
					</Switch>
				</div>
			</Router>
		);
	}
	componentDidMount () {
		
	}
}

export default App;
