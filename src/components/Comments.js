import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
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

export default connect()(Comments);
