import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, TextInput, TouchableOpacity, Text } from 'react-native';
import Global from '../../Global';

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
        address: ''
    };
    render() {
        const { navigation } = this.props;
        const roomID = navigation.getParam('roomID', -1);
        return (
            <ScrollView style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.text}>Tên phòng</Text>
                    <Text style={styles.data}>Phòng {roomID}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Địa chỉ</Text>
                    <TextInput style={styles.data} value={this.state.address} onChangeText={text => this.setState({ address: text })} />
                </View>
                <TouchableOpacity onPress={() => {

                }} style={[Global.styles.button, {marginHorizontal: 20}]}>
                    <Text style={Global.styles.buttonText}>Tạo phòng</Text>
                </TouchableOpacity>
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
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
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