/**
 * @desc APP
 * @author lsy
 */

import React, { Component } from 'react';
import 'element-theme-default';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '@/containers/Pages/Components/Main';
import RouterMap from '@/router';

import '@/assets/css/common.scss';
import { inject, observer } from 'mobx-react';

@inject('router')
@observer
class App extends Component {
	render() {
		const MainRouter = (
			<Main>
				<RouterMap />
			</Main>
		);
		return (
			<Router>
				<div ref="App" className="App">
					<Switch>
						{this.props.router.distributeRouter.singleRouter.map((item) => (
							<Route exact key={item.path} path={item.path} component={item.component} />
						))}
						<Route path="/" render={() => MainRouter} />
					</Switch>
				</div>
			</Router>
		);
    }
    componentDidMount() {
        console.log(this)
        console.log(window)
    }
}

export default App;
