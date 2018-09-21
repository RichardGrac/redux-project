import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from "./components/Form/form.jsx";
import UserList from "./components/UserList/userlist";


class App extends Component {

    // Selected User:
    state = {
        id: '',
        email: '',
        password: '',
        description: '',
        userType: 'USER',
        receiveEmail: true
    }

    overrideUser = user => {
        this.setState({
            id: user.id,
            email: user.email,
            password: user.password,
            description: user.description,
            userType: user.userType,
            receiveEmail: user.receiveEmail
        });
    }

    handleChange = (e) => {
        if(e.target.name !== 'receiveEmail'){
            this.setState({
                [e.target.name]: e.target.value
            });
        } else {
            this.setState({
                receiveEmail: e.target.checked
            });
        }
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CRUD with React-Redux</h1>
        </header>
          <UserForm selectedUser={this.state}
                    handleChange={(e) => this.handleChange(e)}
                    overrideUser={this.overrideUser}/>
          <UserList overrideUser={this.overrideUser} />
      </div>
    );
  }
}

export default App;
