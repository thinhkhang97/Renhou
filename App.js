/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
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
import Setting from './src/screen/setting';
import Statistication from './src/screen/statistication';
import { BriefcaseIcons, StatIcon, AccountIcon, SettingIcon } from './src/icons/Icons';

const AuthenticationStack = createStackNavigator({
  Navigate,
  SignIn,
  SignUp,
  ForgetPassword
})

const appBottomTabBar = createBottomTabNavigator({
  Home,
  Statistication,
  UserProfile,
  Setting
}
  , {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        const color = focused ? Global.COLOR.MAINCOLOR : Global.COLOR.GRAY;
        if (routeName === 'Home') {
          return BriefcaseIcons(color);
        } if (routeName === 'Statistication') {
          return StatIcon(color)
        } if (routeName === 'UserProfile') {
          return AccountIcon(color)
        }
        return SettingIcon(color)
      }
    }),
    navigationOptions: ({ navigation }) => {
      const { state } = navigation;
      let title = ''
      const {routeName} = state.routes[state.index];
      if (routeName === 'Home') {
        title = Global.DEFAULT_STRING.allRoom
      } else if (routeName === 'Statistication') {
        title = Global.DEFAULT_STRING.statistation
      } else if (routeName === 'UserProfile') {
        title = Global.DEFAULT_STRING.userProfile
      } else {
        title = Global.DEFAULT_STRING.settings
      }
      return {
        title: title,
        headerTintColor: '#fff',
        headerTitleStyle: {
          marginLeft: 'auto',
          marginRight: 'auto'
        }
      }
    }
  })

const AppNavigator = createStackNavigator({
  Home: appBottomTabBar,
  RoomDetail,
  Bill,
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