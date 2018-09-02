import React, { Component } from 'react';
import { connect } from 'react-redux';

class WallInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: '',
    }
  }

  handleChange = (event) => {
    this.setState({newPost: event.target.value});
  }

  handleSubmit = () => {
    this.props.dispatch({type: 'NEW_POST', payload: this.state.newPost});
    this.setState({newPost: ''});
  }

  render = () => {
    return (
      <div>
        <h3>New Post: </h3>
        <textarea onChange={this.handleChange} value={this.state.newPost}></textarea>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  };
}

export default connect()(WallInput);
