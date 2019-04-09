import * as React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import GLOBAL from "../../Global";

class MainButton extends React.Component {
    render() {
        const { title } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.onPress()}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GLOBAL.COLOR.MAINCOLOR,
        height: 56,
        width: "100%",
        borderRadius: 28,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 16
    },
    text: {
        color: GLOBAL.COLOR.WHITE,
        fontSize: 17
    }
})

export default MainButton;