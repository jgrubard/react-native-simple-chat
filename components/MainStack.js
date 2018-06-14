import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { Text } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { getUsersFromServer, exchangeTokenForUser } from '../store';
import { AppLoading } from 'expo';

import Home from './Home';
import UserList from './UserList';
import Chat from './Chat';

const TabNavigator = createStackNavigator({
  Home: Home,
  Users: UserList,
  Chat: Chat
},{
  headerMode: 'screen',
  initialRouteName: 'Home'
})

class MainStack extends Component {
  constructor() {
    super();
    this.state = { dataLoaded: false }
    this.loadData = this.loadData.bind(this);
    this.loadApp = this.loadApp.bind(this);
  }

  loadData() {
    const { getUsers, getUser } = this.props;
    return Promise.all([
      getUsers(),
      getUser()
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
      <TabNavigator />
    );
  }
}

const mapState = null;

const mapDispatch = dispatch => {
  return {
    getUsers: () => dispatch(getUsersFromServer()),
    getUser: () => {
      AsyncStorage.getItem('token')
        .then(token => {
          if(token) {
            dispatch(exchangeTokenForUser(token))
          }
        })
    }
  }
}

export default connect(mapState, mapDispatch)(MainStack);
