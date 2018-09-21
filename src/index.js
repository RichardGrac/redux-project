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
import store from "./js/store";
import Provider from "react-redux/es/components/Provider";

ReactDOM.render(<Provider store={store()}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();