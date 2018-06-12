import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
// import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { getUsersFromServer } from '../store';
import { AppLoading } from 'expo';

import Home from './Home';
// import Chat from './Chat';

// const TabNavigator = createStackNavigator({
//   Home: Home,
//   Chat: Chat
// },{
//   headerMode: 'screen',
//   initialRouteName: 'Home'
// })

class MainStack extends Component {
  constructor() {
    super();
    this.state = { dataLoaded: false }
    this.loadData = this.loadData.bind(this);
    this.loadApp = this.loadApp.bind(this);
  }

  loadData() {
    const { getUsers } = this.props;
    return Promise.all([
      getUsers()
    ])
  }

  loadApp() {
    this.setState({ dataLoaded: true })
  }

  render() {
    const { loadData, loadApp } = this;
    const { dataLoaded } = this.state;
    if(!dataLoaded) {
      return (
        <AppLoading
          startAsync={loadData}
          onFinish={loadApp}
          onError={console.warn}
        />
      );
    }
    return (
      <Home />
    );
  }
}

const mapState = null;

const mapDispatch = dispatch => {
  return {
    getUsers: () => dispatch(getUsersFromServer())
  }
}

export default connect(mapState, mapDispatch)(MainStack);
