import * as React from "react";
import {View, Image, StyleSheet} from "react-native";

class Avatar extends React.Component {
    static defaultProps = {
        size: 40
    }
    render() {
        const {source, size,} = this.props;
        const avatarStyle = {
            width: size,
            height: size,
            borderRadius: size/2
        }
        return (
            <Image style={avatarStyle} source={source}/>
        );
    }
}

const styles = StyleSheet.create({
})

export default Avatar;