// @flow
import * as React from "react";
import {View, Text, StyleSheet} from "react-native";

class RoomDetail extends React.Component {
    static navigationOptions = {
        title: 'Phòng 2',
        headerStyle: {
            backgroundColor: '#f4511e',
          },
      };
    render() {
        return (
            <View>
                <Text>RoomDetail</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },

})

export default RoomDetail;