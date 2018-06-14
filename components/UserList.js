import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { connect } from 'react-redux';

const UserList = ({ loggedUser, users }) => {
  return (
    <View>
      <Text h3>Users</Text>
        {
          users.map(user => {
            if(user.id !== loggedUser.id) {
              return (
                <View key={user.id} style={styles.users}>
                  <Text style={styles.text}>
                    {user.name}
                  </Text>
                  <Button
                    raised
                    buttonStyle={{ backgroundColor: 'green', borderRadius: 10, marginTop: 15 }}
                    title='Chat!'
                    onPress={() => console.log('Chat!')}
                    style={{ padding: 5 }}
                  />
                </View>
              );
            }
          })
        }
    </View>
  );
}

const mapState = ({ user, users }) => {
  const loggedUser = user;
  return {
    users,
    loggedUser
  }
}

export default connect(mapState)(UserList);

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
