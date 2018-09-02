import React, { Component } from 'react';
import { connect } from 'react-redux';

import WallPost from './WallPost';

const mapStateToProps = state => ({
  wall: state.wall,
});

class Comments extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div className="comment">
        {this.props.comments.map((comment, i) => (
          <p key={i}>{comment.user.name} says: {comment.comment}</p>
        ))}
      </div>
    );
  };
}

export default connect(mapStateToProps)(Comments);
