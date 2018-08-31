import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  login: state.login,
});

class WallView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.login.isLoading && !this.props.login.userToken.user_id) {
      this.props.history.push('login');
    }
  }

  render = () => {
    return (
      <h1>Hi</h1>
    );
  };
}

export default connect(mapStateToProps)(WallView);
