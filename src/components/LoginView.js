import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginInfo } from './constants';

class LoginView extends Component {
  constructor(props) {
    super(props);
    if (loginInfo.email) {
      this.state = {
        email: loginInfo.email,
        password: loginInfo.password,
      }
    }
    else {
      this.state = {
        email: '',
        password: '',
      } 
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
    this.props.dispatch({
      type: 'LOGIN_USER',
      payload: this.state,
    });
  }

  render = () => {
    return (
      <div>
        <h1>Please Log In</h1>
        <div>
          <label>Email: </label>
          <input onChange={this.handleChange} name="email" value={this.state.email}></input>
        </div>
        <div>
          <label>Password: </label>
          <input onChange={this.handleChange} name="password" type="password" value={this.state.password}></input>
        </div>
        <div>
          <button onClick={this.handleLogin}>Submit</button>
        </div>
      </div>
    );
  };
}

export default connect()(LoginView);
