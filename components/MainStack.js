import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements'
import { connect } from 'react-redux';
import { getUsersFromServer } from '../store';

import Home from './Home'

class MainStack extends Component {

  componentDidMount() {
    const { loadUsers } = this.props;
    loadUsers();
  }

  render() {
    return (
      <Home />
    );
  }
}

const mapState = null;

const mapDispatch = dispatch => {
  return {
    loadUsers: () => dispatch(getUsersFromServer())
  }
}

export default connect(mapState, mapDispatch)(MainStack);
