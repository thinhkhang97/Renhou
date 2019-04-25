import * as React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { HeaderTitle, Input, MainButton } from "../../components/baseComponent";

class Statistication extends React.Component {

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