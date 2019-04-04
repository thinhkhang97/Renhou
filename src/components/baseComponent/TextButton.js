import * as React from "react";
import {View, TouchableOpacity, Text, StyleSheet} from "react-native";
import GLOBAL from "../../Global";

class TextButton extends React.Component {
    render() {
        const {title, color} = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={()=>this.props.onPress()}>
                <Text style={[styles.text,{color}]}>{title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 16
    },
    text: {
        color: GLOBAL.COLOR.BLACK,
        fontSize: 17
    }
})

export default TextButton;