import React, { Component } from 'react';
import { connect } from 'react-redux';

import WallInput from './WallInput';
import WallPosts from './WallPosts';

const mapStateToProps = state => ({
  login: state.login,
});

class WallView extends Component {

  componentDidMount() {
    if (!this.props.login.isLoading && !this.props.login.userToken.user_id) {
      this.props.history.push('login');
    } 
    else {
      this.props.dispatch({type: 'GET_WALL'});
    }
  }

  render = () => {
    return (
      <div>
        <WallInput />
        <WallPosts />
      </div>
    );
  };
}

export default connect(mapStateToProps)(WallView);
