import React, { Component } from 'react';
import { connect } from 'react-redux';

import WallPost from './WallPost';

const mapStateToProps = state => ({
  wall: state.wall,
});

class WallInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    this.props.dispatch({type: 'GET_WALL'});
  } 

  render = () => {
    let wallPosts = this.props.wall.wallPosts;
    let content = null;
    if (wallPosts.length === 0) {
      content = (
        <h3>No posts yet! Try making one above.</h3>
      );
    }
    else {
      content = (
        <div>
        {wallPosts.map((post, i) => (
          <WallPost post={post} key={i}/>
        ))}
        </div>
      )
    }
    return (
      <div>
        {content}
      </div>
    );
  };
}

export default connect(mapStateToProps)(WallInput);
