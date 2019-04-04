import * as React from "react";
import {Text, StyleSheet} from "react-native";

class HeaderTitle extends React.Component {
    render() {
        const {title} = this.props;
        return (
            <Text style={styles.text}>{title}</Text>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 26
    }
})

export default HeaderTitle;