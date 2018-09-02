import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  wall: state.wall,
});

class NewComment extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        <input></input>
      </div>
    );
  };
}

export default connect(mapStateToProps)(NewComment);
