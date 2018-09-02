import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  wall: state.wall,
});

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
  }

  render = () => {
    return (
      <div>
        <input onChange={this.handleChange} placeholder="new comment"></input>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  };
}

export default connect(mapStateToProps)(NewComment);
