import * as React from "react";
import {View, TextInput, StyleSheet} from "react-native";

class Input extends React.Component {
    render() {
        const {onChangeText, value, placeholder, secure, keyboardType} = this.props;
        return (
            <View style={styles.container}>
                <TextInput onChangeText={onChangeText} keyboardType={keyboardType} value={value} secureTextEntry={secure} style={styles.input} placeholder={placeholder}></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        borderRadius: 8,
        width: "100%",
        backgroundColor: "#f5f5f5",
        marginTop: 16,

    },
    input: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 10,
    }
})

export default Input;