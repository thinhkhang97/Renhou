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
import RoomDetail from './src/components/Room/RoomDetail';

const AppNavigator = createStackNavigator({
  Home,
  RoomDetail,
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#FE5430',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: null,
    },
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