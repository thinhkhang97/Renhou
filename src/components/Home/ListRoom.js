import * as React from 'react';
import { View, ScrollView, FlatList, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

export default class ListRoom extends React.Component {
    state = {

    };
    render() {
        return (
            <ScrollView>
                <FlatList data={[{ key: '2' }, { key: '3' }]}
                    renderItem={({ item }) => {
                        return (
                            <TouchableHighlight>
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
    item: {
        flex: 1,
        flexDirection: 'row',
    },
    text: {
        flex: 4,
    },
    date: {
        flex: 2,
    }
});
