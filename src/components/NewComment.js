import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      newComment: event.target.value,
    });
  }

  handleClick = () => {
    this.props.dispatch({
      type: 'NEW_COMMENT', payload: {
        newComment: this.state.newComment,
        id: this.props.id,
      }
    });
    this.setState({newComment: ''})
  }

  render = () => {
    return (
      <div>
        <input onChange={this.handleChange} placeholder="new comment" value={this.state.newComment}></input>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  };
}

export default connect()(NewComment);
