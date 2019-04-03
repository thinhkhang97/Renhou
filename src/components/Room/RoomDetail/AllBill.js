import * as React from 'react';
import { View, ScrollView, FlatList, StyleSheet, Text, TouchableHighlight } from 'react-native';
import PopupMenu from './PopupMenu';

export default class AllBill extends React.Component {
    sstate = {

    };
    render() {
        return (
            <ScrollView style={{ paddingTop: 20, flex: 1 }}>
                <FlatList data={[{
                    key: '30/12/2019',
                    total: 2100000,
                    paid: false,
                }, {
                    key: '3/2/2019',
                    total: 2100000,
                    paid: true,
                },
                {
                    key: '3/3/2019',
                    total: 2100000,
                    paid: false,
                }, {
                    key: '3/4/2019',
                    total: 2100000,
                    paid: true,
                },
                {
                    key: '3/6/2019',
                    total: 2100000,
                    paid: false,
                }, {
                    key: '3/5/2019',
                    total: 2100000,
                    paid: true,
                },
                {
                    key: '3/7/2019',
                    total: 2100000,
                    paid: false,
                }, {
                    key: '3/8/2019',
                    total: 2100000,
                    paid: true,
                }, {
                    key: '3/9/2019',
                    total: 2100000,
                    paid: false,
                }, {
                    key: '3/10/2019',
                    total: 2100000,
                    paid: true,
                },
                {
                    key: '3/1/2009',
                    total: 2100000,
                    paid: false,
                }, {
                    key: '13/12/2019',
                    total: 2100000,
                    paid: true,
                },
                {
                    key: '3/11/2019',
                    total: 2100000,
                    paid: false,
                }, {
                    key: '3/12/2019',
                    total: 2100000,
                    paid: true,
                },
                ]}
                    renderItem={({ item }) => {
                        return (
                            <TouchableHighlight style={styles.room} onPress={() => this.props.navigation.navigate('RoomDetail', {
                                roomID: item.key,
                            })}>
                                <View style={styles.item}>
                                    <View style={styles.row}>
                                        <Text style={styles.time}>Thời gian: {item.key}</Text>
                                        <Text style={styles.total}>Tổng tiền: {item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} đồng</Text>
                                    </View>
                                    <Text style={[styles.right, item.paid ? { color: '#808080' } : { color: '#FE5430', fontWeight: 'bold' }]}>{item.paid ? 'Đã thanh toán' : 'Chưa thanh toán'}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    }} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
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
        color: '#808080',
    },
    right: {
        flex: 4,
        textAlign: 'right',
        fontSize: 12,
    }
});
