import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, TextInput, TouchableOpacity, Text } from 'react-native';
import Global from '../../Global';
import { MainButton } from '../baseComponent'

class AddRoom extends Component {
    static navigationOptions = () => {
        return {
            title: 'Thêm phòng',
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTitleStyle: {
                color: Global.COLOR.NAVIGATION,
            },
            headerTintColor: Global.COLOR.NAVIGATION,
        };
    };
    state = {
        name: '',
        address: '',
        roomCost: '',
        perElectricCost: '',
        perWaterCost: '',
    };
    render() {
        const { navigation } = this.props;
        const roomID = navigation.getParam('roomID', -1);
        return (
            <ScrollView style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.text}>Tên phòng</Text>
                    <TextInput style={styles.data} value={this.state.name} onChangeText={text => this.setState({ name: text })} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Địa chỉ</Text>
                    <TextInput style={styles.data} value={this.state.address} onChangeText={text => this.setState({ address: text })} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Giá phòng</Text>
                    <TextInput style={styles.data} value={this.state.roomCost} onChangeText={text => this.setState({ roomCost: text })} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Đơn giá điện</Text>
                    <TextInput style={styles.data} value={this.state.perElectricCost} onChangeText={text => this.setState({ perElectricCost: text })} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Đơn giá nước</Text>
                    <TextInput style={styles.data} value={this.state.perWaterCost} onChangeText={text => this.setState({ perWaterCost: text })} />
                </View>
                <MainButton title='Tạo phòng' />
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Global.COLOR.BACKGROUND,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: Global.COLOR.GRAY,
        paddingVertical: 10,
    },
    text: {
        flex: 1,
        paddingVertical: 5,
        fontSize: 16,
        textAlign: 'left',
        borderRadius: 12,
    },
    data: {
        flex: 2,
        fontSize: 16,
        textAlign: 'right',
        color: Global.COLOR.GRAY,
    },
});


export default AddRoom;