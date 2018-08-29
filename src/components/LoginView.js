import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleLogin = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render = () => {
    return (
      <div>
        <h1>Please Log In</h1>
        <div>
          <label>Username: </label>
          <input onChange={this.handleChange} name="username"></input>
        </div>
        <div>
          <label>Password: </label>
          <input onChange={this.handleChange} name="password" type="password"></input>
        </div>
        <div>
          <button onClick={this.handleLogin}>Submit</button>
        </div>
      </div>
    );
  };
}

export default (LoginView);
