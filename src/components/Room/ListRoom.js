import * as React from 'react';
import { View, ScrollView, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Global from '../../Global';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ListRoom extends React.Component {
    state = {

    };
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ paddingTop: 20 }}>
                    <FlatList data={[{ key: '2' }, { key: '3' }]}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.room} onPress={() => this.props.navigation.navigate('RoomDetail', {
                                    roomID: item.key,
                                })}>
                                    <View style={styles.item}>
                                        <Text style={styles.text}>Phòng {item.key}</Text>
                                        <Text style={styles.date}>February 3</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }} />
                </ScrollView>
                <TouchableOpacity onPress={() =>this.props.navigation.navigate('AddRoom', {
                    roomID: '4',
                })} style={styles.footer}><Icon name='ios-add-circle' size={50} color='red' /></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Global.COLOR.BACKGROUND,
        flex: 1,
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
    text: {
        flex: 4,
    },
    date: {
        flex: 2,
        textAlign: 'right'
    },
    footer: {
        flexDirection: 'column',
        alignSelf: 'flex-end',
        marginVertical: 10,
        marginRight: 20,
    }
});
