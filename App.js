/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import CalculateBill from './src/components/CalculateBill';
import { RoomDetail } from "./src/screen";
import Statistic from './src/components/Statistic';

class App extends Component {
  
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>hello world</Text>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("roomDetail");
        }}>
        <Text>RoomDetail</Text>
        </TouchableOpacity>
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