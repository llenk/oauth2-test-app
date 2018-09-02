import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommentSection from './CommentSection';

const mapStateToProps = state => ({
  wall: state.wall,
});

class WallInput extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div className="post">
        <p>{this.props.post.user.name} says: {this.props.post.post}</p>
        <CommentSection comments={this.props.post.comments} postId={this.props.post.id}/>
      </div>
    );
  };
}

export default connect(mapStateToProps)(WallInput);
