import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Global from '../../../Global';

class RoomInfoDetail extends Component {
    static navigationOptions = () => {
        return {
            title: 'Chi tiết phòng',
            headerRight: (
                <TouchableOpacity>
                    <Text style={styles.headerRightButton}>Sửa</Text>
                </TouchableOpacity>
            ),
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTitleStyle: {
                color: Global.COLOR.NAVIGATION,
            },
            headerTintColor: Global.COLOR.NAVIGATION,
        };
    };
    state = {

    }
    render() {
        const { navigation } = this.props;
        const roomID = navigation.getParam('roomID', -1);
        return (
            <ScrollView style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.text}>Tên phòng</Text>
                    <Text style={styles.data}>Phòng {roomID}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Địa chỉ</Text>
                    <Text style={styles.data}>227 Nguyễn Văn Cừ</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Tên người thuê</Text>
                    <Text style={styles.data}>Nguyễn Văn A</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Số điện thoại</Text>
                    <Text style={styles.data}>0987654321</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Ngày sinh</Text>
                    <Text style={styles.data}>01/01/1997</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>CMND</Text>
                    <Text style={styles.data}>123456789</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Email</Text>
                    <Text style={styles.data}>nguyenvana@gmail.com</Text>
                </View>
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Global.COLOR.BACKGROUND,
        paddingVertical: 10,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        borderBottomWidth: 0.5,
        borderColor: Global.COLOR.GRAY,
        paddingVertical: 10,
    },
    text: {
        flex: 1,
        paddingVertical: 5,
        fontSize: 16,
        textAlign: 'left',
        borderRadius: 12,
    },
    data: {
        flex: 2,
        fontSize: 16,
        textAlign: 'right',
        color: Global.COLOR.GRAY,
    },
    headerRightButton: {
        marginRight: 16,
        fontSize: 16,
        color: Global.COLOR.NAVIGATION,
        fontWeight: 'bold',
    }
});

export default RoomInfoDetail;