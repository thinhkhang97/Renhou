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
import CalculateBill from './src/components/Bill/CalculateBill';
import Bill from './src/components/Bill';
import Home from './src/components/Home';
import RoomDetail from './src/components/Room/RoomDetail';
import Global from './src/Global';
import UserProfile from "./src/screen/userProfile";
import RoomInfoDetail from './src/components/Room/RoomDetail/RoomInfoDetail';
import AddRoom from './src/components/Room/AddRoom';

const AppNavigator = createStackNavigator({
  Home,
  RoomDetail,
  Bill,
  UserProfile,
  CalculateBill,
  RoomInfoDetail,
  AddRoom,
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Global.COLOR.NAVIGATION,
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
    const { navigation } = this.props;
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
});


export default App;