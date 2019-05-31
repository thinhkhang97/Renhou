import React, { Component } from 'react';
import { View, Text, Image } from "react-native";
import GLOBAL from "../../Global";
export default class Loading extends Component {
    render() {
        return (
            <View>
                <Image style={{ width: 128, height: 128 }} source={require('../../images/loading.gif')} />
            </View>
        );
    }
}