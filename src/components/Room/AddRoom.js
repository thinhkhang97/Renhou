import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, TextInput, TouchableOpacity, Text } from 'react-native';
import Global from '../../Global';
import { MainButton } from '../baseComponent'
import axios from 'axios';

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
    styleMoney(money) {
        return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    state = {
        name: '',
        address: '',
        roomCost: '',
        perElectricCost: '',
        perWaterCost: '',
    };
    handleCreate = () => {
        const userId = '5ca46e712c76681518568bc5'
        const url = Global.host + '/room';
        axios.post(url, {
            userId,
            name: this.state.name,
            address: this.state.address,
            roomCost: parseInt(this.state.roomCost.replace(/\./g, ''), 10),
            perElectricCost: parseInt(this.state.perElectricCost.replace(/\./g, ''), 10),
            perWaterCost: parseInt(this.state.perWaterCost.replace(/\./g, ''), 10),
        }).then(res => {
            console.log(res);
            navigation.goBack();
        });
    }
    render() {
        const { navigation } = this.props;
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
                    <TextInput style={styles.data} keyboardType={'numeric'} value={this.state.roomCost} onChangeText={text => {
                        const intMoney = parseInt(text.replace(/\./g, ''), 10);
                        this.setState({ roomCost: text === '' ? '' : this.styleMoney(intMoney) })
                    }} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Đơn giá điện</Text>
                    <TextInput style={styles.data} keyboardType={'numeric'} value={this.state.perElectricCost} onChangeText={text => {
                        const intMoney = parseInt(text.replace(/\./g, ''), 10);
                        this.setState({ perElectricCost: text === '' ? '' : this.styleMoney(intMoney) })
                    }} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Đơn giá nước</Text>
                    <TextInput style={styles.data} keyboardType={'numeric'} value={this.state.perWaterCost} onChangeText={text => {
                        const intMoney = parseInt(text.replace(/\./g, ''), 10);
                        this.setState({ perWaterCost: text === '' ? '' : this.styleMoney(intMoney) })
                    }} />
                </View>
                <MainButton title='Tạo phòng' onPress={this.handleCreate} />
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