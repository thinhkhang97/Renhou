import * as React from 'react';
import { View, ScrollView, FlatList, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class ListRoom extends React.Component {
    state = {

    };
    render() {
        return (
            <ScrollView style={{paddingTop: 20}}>
                <FlatList data={[{ key: '2' }, { key: '3' }]}
                    renderItem={({ item }) => {
                        return (
                            <TouchableHighlight style={styles.room} onPress={() => this.props.navigation.navigate('RoomDetail', {
                                roomID: item.key,
                            })}>
                                <View style={styles.item}>
                                    <Text style={styles.text}>Phòng {item.key}</Text>
                                    <Text style={styles.date}>February 3</Text>
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
    text: {
        flex: 4,
    },
    date: {
        flex: 2,
        textAlign: 'right'
    }
});
