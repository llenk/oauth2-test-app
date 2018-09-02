import React, { Component } from 'react';
import { connect } from 'react-redux';

import Comments from './Comments';
import NewComment from './NewComment';

class CommentSection extends Component {
  render = () => {
    let content = null;
    if (this.props.comments) {
      content = <Comments comments={this.props.comments} />;
    }
    return (
      <div className="commentsSection">
        {content}
        <NewComment id={this.props.postId} />
      </div>
    );
  };
}

export default connect()(CommentSection);