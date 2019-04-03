import * as React from 'react';
import { View, ScrollView, FlatList, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Global from '../../../Global';

export default class AllBill extends React.Component {
    state = {

    };
    render() {
        const date = new Date(2019, 10, 25);
        const date2 = new Date(2019, 2, 19);
        return (
            <ScrollView style={styles.container}>
                <FlatList data={[{
                    key: date.toString(),
                    date: date,
                    total: 2100000,
                    paid: false,
                }, {
                    key: date2.toString(),
                    date: date2,
                    total: 2100000,
                    paid: true,
                }]}
                    renderItem={({ item }) => {
                        return (
                            <TouchableHighlight style={styles.room} onPress={() => this.props.navigation.navigate('Bill', {
                                roomID: this.props.navigation.getParam('roomID', -1),
                                date: item.date,
                            })}>
                                <View style={styles.item}>
                                    <View style={styles.row}>
                                        <Text style={styles.time}>Thời gian: {item.date.getMonth() + 1}/{item.date.getFullYear()}</Text>
                                        <Text style={styles.total}>Tổng tiền: {item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} đồng</Text>
                                    </View>
                                    <Text style={[styles.right, item.paid ? { color: Global.COLOR.GRAY } : { color: '#FE5430', fontWeight: 'bold' }]}>{item.paid ? 'Đã thanh toán' : 'Chưa thanh toán'}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    }} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Global.COLOR.BACKGROUND,
        flex: 1,
        paddingTop: 20,
    },
    room: {
        marginBottom: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 2,
        marginHorizontal: 20,
        borderRadius: 4,
        borderColor: '#d6d7da',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    time: {
        fontSize: 16,
    },
    row: {
        flex: 5,
    },
    total: {
        fontSize: 12,
        color: Global.COLOR.GRAY,
    },
    right: {
        flex: 4,
        textAlign: 'right',
        fontSize: 12,
    }
});
