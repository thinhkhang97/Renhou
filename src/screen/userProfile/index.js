import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import Avatar from "../../components/avatar";
import InfoRow from "../../components/infoRow";
import GLOBAL from "../../Global";
import { ScrollView } from "react-native-gesture-handler";

const url = "https://as01.epimg.net/us/imagenes/2018/06/06/futbol/1528244019_930352_1528244120_noticia_normal.jpg"

class UserProfile extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Hồ sơ",
            headerRight: <Text style={styles.editText}>Sửa</Text>,
            headerStyle: {
                backgroundColor: GLOBAL.COLOR.WHITE
            },
            headerTintColor: GLOBAL.COLOR.NAVIGATION,
            headerTitleStyle: {
                fontWeight: '400',
                fontSize: 24,
                color: GLOBAL.COLOR.BLACK
            },
        };
    };
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.avatarContainer}>
                        <Avatar size={120} source={{ uri: url }} />
                    </View>
                    <View style={styles.infoContainer}>
                        <InfoRow title="Họ và tên" value="Nguyen Thinh Khang" />
                        <InfoRow title="Số điện thoại" value="0122 1232 9129" />
                        <InfoRow title="Ngày sinh" value="10/3/1997" />
                        <InfoRow title="Địa chỉ" value="Nguyễn Cư Trinh" />
                        <InfoRow title="Email" value="thinhkhang97@gmail.com" />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    editText: {
        marginRight: 16,
        fontSize: 18,
        color: GLOBAL.COLOR.NAVIGATION
    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    avatarContainer: {
        marginTop: 30,
        alignItems: "center",
        marginBottom: 20
    }
})

export default UserProfile;