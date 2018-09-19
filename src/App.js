import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from "./components/Form/form.jsx";
import { Provider } from "react-redux";
import store from "./js/store/index";
import UserList from "./components/UserList/userlist";


class App extends Component {
  render() {
    return (
        <Provider store={store()}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">CRUD</h1>
            </header>
              <UserForm />
              <UserList />
          </div>
        </Provider>
    );
  }
}

export default App;
