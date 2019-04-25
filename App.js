/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import CalculateBill from './src/screen/bill/CalculateBill';
import Bill from './src/screen/bill';
import Home from './src/screen/home';
import RoomDetail from './src/screen/room/RoomDetail';
import Global from './src/Global';
import UserProfile from "./src/screen/userProfile";
import RoomInfoDetail from './src/screen/room/RoomDetail/RoomInfoDetail';
import AddRoom from './src/screen/room/AddRoom';
import SignIn from "./src/screen/signIn";
import SignUp from "./src/screen/signUp";
import ForgetPassword from "./src/screen/forgetPassword";
import Navigate from './src/screen/signIn/Navigate';
import AddMember from './src/screen/member/AddMember';

const AuthenticationStack = createStackNavigator({
  Navigate,
  SignIn,
  SignUp,
  ForgetPassword
})

const AppNavigator = createStackNavigator({
  Home,
  RoomDetail,
  Bill,
  UserProfile,
  CalculateBill,
  RoomInfoDetail,
  AddRoom,
  AddMember,
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

const AppSwitchNavigator = createStackNavigator({
  Auth: AuthenticationStack,
  App: AppNavigator
},
{
  initialRouteName: "Auth",
  defaultNavigationOptions: {
    header: null,
  }
})
const AppContainer = createAppContainer(AppSwitchNavigator);


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
});


export default App;