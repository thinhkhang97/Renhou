import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ListRoom from '../../screen/room/ListRoom'
import Global from '../../Global';

const SecondRoute = () => (
    <Text>Coming soon</Text>
);
export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Tất cả phòng'
    };
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Đã cho thuê' },
            { key: 'second', title: 'Còn trống' },
            { key: 'third', title: 'Chưa trả tiền' },
        ],
    };
    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: () => <ListRoom navigation={this.props.navigation} />,
                    second: SecondRoute,
                    third: SecondRoute,
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
        // paddingTop: 50,
        flex: 1,
    },
    tabBar: {
        // flexDirection: 'row',
        backgroundColor: Global.COLOR.NAVIGATION,
        paddingTop: -2,
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
