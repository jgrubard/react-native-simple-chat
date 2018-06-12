import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { logInUser } from '../store';

class Home extends Component {
  render() {
    const { users, loggedUser, login, logout, userSet } = this.props;
    console.log(loggedUser)
    return (
      <View style={styles.container}>
        <Text h3>Simple Chat!</Text>
        {
          userSet ? (
            <Text>Hello, {loggedUser.name}!</Text>
          ) : (
            <Text>Log In!</Text>
          )
        }
        {
          users.map(user => {
            return (
              <View key={user.id} style={styles.users}>
                <Text h4 style={styles.text}>
                  {user.name}
                </Text>
                {
                  !userSet ? (
                    <Button
                      title='Login'
                      onPress={() => login(user)}
                      style={{ padding: 5 }}
                    />
                  ) : (
                    loggedUser.id === user.id ? (
                      <Button
                        title='Logout'
                        onPress={() => logout()}
                        style={{ padding: 5 }}
                      />
                    ) : (
                      <View>
                        <Button
                          title='Login'
                          onPress={() => login(user)}
                          style={{ padding: 5 }}
                          disabled={true}
                        />
                        <Button
                          title='Chat!'
                          onPress={() => console.log('CHAT!')}
                          style={{ padding: 5 }}
                        />
                      </View>
                    )
                  )
                }
              </View>
            );
          })
        }
      </View>
    );
  }
}

const mapState = ({ user, users }) => {
  const loggedUser = user;
  const userSet = !!loggedUser.id
  return {
    users,
    loggedUser,
    userSet
  }
}

const mapDispatch = dispatch => {
  return {
    login: (user) => dispatch(logInUser(user)),
    logout: () => dispatch(logInUser({}))
  }
}

export default connect(mapState, mapDispatch)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  users: {
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10
  },
  text: {
    textAlign: 'center'
  }
});
