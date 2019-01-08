import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import store from './store';

import App from '@/containers/App'

import './index.css';
// import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Provider {...store}><App/></Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
