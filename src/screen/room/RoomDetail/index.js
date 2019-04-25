import * as React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AllBill from './AllBill';
import PopupMenu from './PopupMenu';
import Global from '../../../Global';
import ListMemberInRoom from '../../member/ListMemberInRoom';

export default class RoomDetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Chi tiết phòng',
            headerTintColor: 'white',
            headerRight: (
                <PopupMenu navigation={navigation} />
            ),
        };
    };
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Người thuê' },
            { key: 'second', title: 'Tất cả hoá đơn' },
            { key: 'third', title: 'Nội thất' },
        ],
    };


    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: () => <ListMemberInRoom navigation={this.props.navigation} />,
                    second: () => <AllBill navigation={this.props.navigation} />,
                    third: () => <Text>Coming soon</Text>,
                })}
                onIndexChange={index => this.setState({ index })}
                renderTabBar={props =>
                    < TabBar
                        {...props}
                        style={styles.tabBar}
                        indicatorStyle={{ backgroundColor: '#1E90FF' }}
                        renderLabel={({ route }) => (
                            <Text style={styles.tabLabel}>{route.title}</Text>
                        )}
                    />
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        backgroundColor: Global.COLOR.NAVIGATION,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    tabLabel: {
        fontSize: 14,
        color: 'white'
    },
});
