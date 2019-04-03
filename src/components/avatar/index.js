import * as React from "react";
import {View, Image, StyleSheet} from "react-native";

class Avatar extends React.Component {
    render() {
        const {source} = this.props;
        return (
            <Image style={styles.container} source={source}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 20
    }
})

export default Avatar;