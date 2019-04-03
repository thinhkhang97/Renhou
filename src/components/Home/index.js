import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ListRoom from '../Room/ListRoom'
import Global from '../../Global';

const SecondRoute = () => (
    <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);
export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Đã cho thuê' },
            { key: 'second', title: 'Còn trống' },
            // { key: 'third', title: 'Chưa trả tiền' },
        ],
    };
    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: () => <ListRoom navigation={this.props.navigation} />,
                    second: SecondRoute,
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
        // flexDirection: 'row',
        backgroundColor: Global.COLOR.NAVIGATION,
        paddingTop: -2,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
});