import React, { Component } from 'react';
import { connect } from 'react-redux';

import WallPost from './WallPost';

const mapStateToProps = state => ({
  wall: state.wall,
});

class WallInput extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        {JSON.stringify (this.props.post)}
      </div>
    );
  };
}

export default connect(mapStateToProps)(WallInput);
