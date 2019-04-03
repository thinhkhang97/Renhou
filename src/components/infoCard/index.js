import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Avatar from "../avatar";

const url = "https://as01.epimg.net/us/imagenes/2018/06/06/futbol/1528244019_930352_1528244120_noticia_normal.jpg"

class InfoCard extends React.Component {
    static defaultProps = {
        avatar: url
    }
    render() {
        const { title, subTitle, avatar } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={()=>this.props.onPress()}>
                <View style={styles.avatarContainer}>
                    <Avatar source={{ uri: avatar }} />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.textTitle}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>

                <View style={styles.statusContainer}>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 64,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "#b7b7b7",
        flexDirection: "row",
        margin: 16,
        marginBottom: 0
    },
    avatarContainer: {
        width: 60,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center"
    },
    statusContainer: {
        width: 100,
    },
    textTitle: {
        fontSize: 17
    },
    subTitle: {
        fontSize: 12
    }
})

export default InfoCard;