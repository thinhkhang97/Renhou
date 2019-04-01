/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CalculateBill from './src/components/CalculateBill';
import Statistic from './src/components/Statistic';
import Home from './src/components/Home';

const AppNavigator = createStackNavigator({
  Home: {
    navigationOptions: () => ({
      title: `Home`,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#FE5430' },
      // headerBackTitle: null
    }),
    screen: Home
  }
});
const AppContainer = createAppContainer(AppNavigator);


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;