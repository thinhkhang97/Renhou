import React, { Component } from 'react';
import { View, Text, Image } from "react-native";
import GLOBAL from "../../Global";
export default class Loading extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 26, color: GLOBAL.COLOR.NAVIGATION }}>Đang tải dữ liệu...</Text>
                <Image style={{ width: 120, height: 120 }} source={require('../../images/loading.gif')} />
            </View>
        )
    }
}