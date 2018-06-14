import React, { Component } from 'react';
import { View, StyleSheet, TextInput, AsyncStorage } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { attemptLogin, logoutUser } from '../store';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(name, value) {
    const change = {}
    change[name] = value;
    this.setState(change);
  }

  render() {
    const { user, users, login, logout, navigation } = this.props;
    const { name, password } = this.state;
    return (
      <View style={styles.container}>
        <Text h3>Simple Chat!</Text>
        {
          user.id ? (
            <View>
              <Text style={{ fontSize: 16 }}>Welcome {user.name}!</Text>
              <Button
                raised
                buttonStyle={{ backgroundColor: 'red', borderRadius: 10, marginTop: 15 }}
                title='Logout'
                onPress={() => logout()}
                style={{ padding: 5 }}
              />
              <Button
                raised
                buttonStyle={{ backgroundColor: 'green', borderRadius: 10, marginTop: 15 }}
                title='Chat'
                onPress={() => navigation.navigate('Users')}
                style={{ padding: 5 }}
              />
            </View>
          ) : (
            <View>
              <TextInput
                value={name}
                placeholder='username'
                onChangeText={(input) => this.onChange('name', input)}
                style={{ borderWidth: 1, borderColor: 'black', width: 100, padding: 10, margin: 5 }}
              />
              <TextInput
                value={password}
                placeholder='password'
                onChangeText={(input) => this.onChange('password', input)}
                style={{ borderWidth: 1, borderColor: 'black', width: 100, padding: 10, margin: 5 }}
              />
              <Button
                raised
                buttonStyle={{ backgroundColor: 'skyblue', borderRadius: 10, marginTop: 15 }}
                title='Login'
                onPress={() => login(this.state)}
                style={{ padding: 5 }}
              />
            </View>
          )
        }
      </View>
    );
  }
}

const mapState = ({ user, users }) => {
  return {
    users,
    user
  }
}

const mapDispatch = dispatch => {
  return {
    login: (user) => dispatch(attemptLogin(user)),
    logout: () => dispatch(logoutUser())
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
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 22
  }
});



/*import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { logInUser } from '../store';

class Home extends Component {
  render() {
    const { users, loggedUser, login, logout, userSet } = this.props;
    console.log(loggedUser, users)
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
                <Text style={styles.text}>
                  {user.name}
                </Text>
                {
                  !userSet ? (
                    <Button
                      raised
                      buttonStyle={{ backgroundColor: 'skyblue', borderRadius: 10, marginTop: 15 }}
                      title='Login'
                      onPress={() => login(user)}
                      style={{ padding: 5 }}
                    />
                  ) : (
                    loggedUser.id === user.id ? (
                      <Button
                        raised
                        buttonStyle={{ backgroundColor: 'skyblue', borderRadius: 10, marginTop: 15 }}
                        title='Logout'
                        onPress={() => logout()}
                        style={{ padding: 5 }}
                      />
                    ) : (
                      <View>
                        <Button
                          raised
                          buttonStyle={{ backgroundColor: 'skyblue', borderRadius: 10, marginTop: 15 }}
                          title='Login'
                          onPress={() => login(user)}
                          style={{ padding: 5 }}
                          disabled={true}
                        />
                        <Button
                          raised
                          buttonStyle={{ backgroundColor: 'green', borderRadius: 10, marginTop: 15 }}
                          title='Chat!'
                          onPress={() => this.props.navigation.navigate('Chat')}
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
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 22
  }
});
*/
