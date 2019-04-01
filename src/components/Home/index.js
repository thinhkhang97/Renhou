import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
    <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);
const LazyPlaceholder = ({ route }) => (
    <View style={styles.scene}>
        <Text>Loading {route.title}…</Text>
    </View>
);
export default class TabViewExample extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Đã cho thuê' },
            { key: 'second', title: 'Còn trống' },
            // { key: 'third', title: 'Chưa trả tiền' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {

                    return (
                        <TouchableOpacity
                            key={i}
                            style={styles.tabItem}
                            onPress={() => this.setState({ index: i })}>
                            <Text>{route.title}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    _renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });
    _renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;
    render() {
        return (
            <TabView
                lazy
                renderLazyPlaceholder={this._renderLazyPlaceholder}
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                })}
                renderTabBar={props =>
                    <TabBar
                        {...props}
                        style={styles.tabBar}
                        labelStyle={{textTransform: 'capitalize'}}
                    />
                }
                onIndexChange={this._handleIndexChange}
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
        textTransform: 'lowercase',
        paddingTop: 30,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
});
