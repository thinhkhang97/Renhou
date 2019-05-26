import * as React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { HeaderTitle, Input, MainButton } from "../../components/baseComponent";
import GLOBAL from "../../Global";

class Statistication extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Thống kê",
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
        return (
            <SafeAreaView style={styles.container}>
                <Text>Thống kê</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    }
})

export default Statistication;