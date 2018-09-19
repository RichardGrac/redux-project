/*
* Tutorial:
* https://www.valentinog.com/blog/react-redux-tutorial-beginners/#React_Redux_tutorial_App_component_and_Redux_store
* *
* */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();