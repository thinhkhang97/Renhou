import * as React from 'react';
import { View, ScrollView, FlatList, StyleSheet, Text, TouchableHighlight, Button, Alert } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AllBill from './AllBill';
import PopupMenu from './PopupMenu';
import Global from '../../../Global';
import InfoCard from '../../infoCard';

const data = [
    {
    name: "Khang Thinh Nguyen",
    phoneNumber: "0123 9238 922"
},
{
    name: "Linh Huu Nguyen",
    phoneNumber: "0123 938 922"
},
{
    name: "Khoa Do",
    phoneNumber: "0123 938 922"
},
]
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

    renderFirstRoute(){
        return <FlatList
            data={data}
            renderItem={({item, index})=>{
                return <InfoCard
                key={index} 
                title={item.name} 
                subTitle={item.phoneNumber}
                onPress={()=>{
                    this.props.navigation.navigate("UserProfile", {data: item});
                }}
                />
            }}
            keyExtractor={({index})=>index}
        />
    }

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: ()=>this.renderFirstRoute(),
                    second: () => <AllBill navigation={this.props.navigation} />
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
});
