/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
<<<<<<< HEAD
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import CalculateBill from './src/components/CalculateBill';
import { RoomDetail } from "./src/screen";
import Statistic from './src/components/Statistic';

=======
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CalculateBill from './src/components/CalculateBill';
import Bill from './src/components/Bill';
import Home from './src/components/Home';
import RoomDetail from './src/components/Room/RoomDetail';
import Global from './src/Global';

const AppNavigator = createStackNavigator({
  Home,
  RoomDetail,
  Bill,
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


>>>>>>> develop
class App extends Component {
  
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <Text>hello world</Text>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("roomDetail");
        }}>
        <Text>RoomDetail</Text>
        </TouchableOpacity>
=======
        <AppContainer />
>>>>>>> develop
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const roomStack = createStackNavigator({
  app: {
    screen: App
  },
  roomDetail: {
    screen: RoomDetail
  }
},{
  initialRouteName: "app"
});

export default createAppContainer(roomStack);