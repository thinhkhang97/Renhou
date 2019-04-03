import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class InfoRow extends React.Component {
    render() {
        const {title, value} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <TextInput style={styles.value}>{value}</TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 0.3,
        borderColor: "#b1b1b1",
        paddingLeft: 20,
        paddingRight: 20
    },
    title: {
        color: "black",
        fontSize: 17
    },
    value: {
        color: "#a1a1a1",
        fontSize: 17
    }
})

export default InfoRow;