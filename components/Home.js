import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';

const Home = ({ users }) => {
  return (
    <View style={styles.container}>
      <Text h3>Simple Chat!</Text>
      {
        users.map(user => {
          return (
            <Text h4 key={user.id}>
              {user.name}
            </Text>
          );
        })
      }
    </View>
  );
}

const mapState = ({ users }) => {
  return {
    users
  }
}

export default connect(mapState)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
