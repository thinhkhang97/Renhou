import * as React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AllBill from './AllBill';
import PopupMenu from './PopupMenu';
import Global from '../../../Global';
import InfoCard from '../../../components/infoCard';

const data = [
    {
        key: '0',
        name: "Khang Thinh Nguyen",
        phoneNumber: "0123 9238 922"
    },
    {
        key: '1',
        name: "Linh Huu Nguyen",
        phoneNumber: "0123 938 922"
    },
    {
        key: '2',
        name: "Khoa Do",
        phoneNumber: "0123 938 922"
    },
]
export default class RoomDetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Danh sách người thuê',
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

    renderFirstRoute() {
        return <FlatList
            data={data}
            renderItem={({ item }) => {
                return <InfoCard
                    title={item.name}
                    subTitle={item.phoneNumber}
                    onPress={() => {
                        this.props.navigation.navigate("UserProfile", { data: item });
                    }}
                />
            }
            }
        />
    }

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: () => this.renderFirstRoute(),
                    second: () => <AllBill navigation={this.props.navigation} />,
                    third: () =>  <Text>Coming soon</Text>,
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
