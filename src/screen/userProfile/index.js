import * as React from "react";
import {View, StyleSheet, Text} from "react-native";
import GLOBAL from "../../Global";

class UserProfile extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Hồ sơ",
            headerRight: <Text style={styles.editText}>Sửa</Text>,
            headerStyle: {
                backgroundColor: GLOBAL.COLOR.WHITE
            },
            headerTintColor: GLOBAL.COLOR.NAVIGATION,
            headerTitleStyle: {
                fontWeight: '400',
                fontSize: 24,
                color: GLOBAL.COLOR.BLACK
            },
        };
    };
    render() {
        return(
            <View>
                <Text>Hồ sơ</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    editText: {
        marginRight: 16,
        fontSize: 18,
        color: GLOBAL.COLOR.NAVIGATION
    }
})

export default UserProfile;