import * as React from 'react';
import { View, ScrollView, FlatList, StyleSheet, Text, TouchableHighlight, Button } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AllBill from './AllBill';
import PopupMenu from './PopupMenu';

const FirstRoute = () => (
    <View style={[styles.container, { backgroundColor: 'white' }]} />
);
export default class RoomDetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Phòng ' + navigation.getParam('roomID', 'No room ID'),
            headerRight: (
                <PopupMenu />
            ),
        };
    };
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Người thuê' },
            { key: 'second', title: 'Tất cả hoá đơn' },
            // { key: 'third', title: 'Chưa trả tiền' },
        ],
    };
    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: AllBill,
                })}
                onIndexChange={index => this.setState({ index })}
                renderTabBar={props =>
                    < TabBar
                        {...props}
                        style={styles.tabBar}
                        indicatorStyle={{ backgroundColor: '#1E90FF' }}
                    />
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: 50,
        flex: 1,
    },
    tabBar: {
        backgroundColor: '#FF6347',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
});
