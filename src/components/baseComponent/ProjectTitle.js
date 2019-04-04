import * as React from "react";
import {Text, StyleSheet} from "react-native";
import GLOBAL from "../../Global";

class ProjectTitle extends React.Component {
    render() {
        return (
            <Text style={styles.text}>Renhou</Text>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 64,
        color: GLOBAL.COLOR.MAINCOLOR
    }
})

export default ProjectTitle;