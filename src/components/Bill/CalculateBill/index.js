import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { calculate } from './CalculateBillAction';
import Global from '../../../Global';

class CalculateBill extends Component {
    static navigationOptions = () => {
        return {
            title: 'Tính tiền nhà',
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
        water: '',
        electric: '',
        otherPrice: '',
    };
    render() {
        const { Price, calculate, navigation } = this.props;
        const roomID = navigation.getParam('roomID', -1);
        const { water, electric, unitPrice, otherPrice, roomPrice } = this.state;
        return (
            <ScrollView contentContainerStyle={{
                alignItems: 'center',
            }} style={styles.container}>
                <Text>Phòng {roomID}</Text>
                <View style={styles.row}>
                    <Text style={styles.text}>Chỉ số điện mới</Text>
                </View>
                <View style={styles.row}>
                    <TextInput style={[styles.input, { height: 'auto' }]} returnKeyType='done' keyboardType='number-pad' value={electric} placeholder='Chỉ số điện mới' onChangeText={(text) => this.setState({ electric: text })} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Chỉ số nuớc mới</Text>
                </View>
                <View style={styles.row}>
                    <TextInput style={styles.input} keyboardType='number-pad' returnKeyType='done' value={water} placeholder='Chỉ số nước mới' onChangeText={(text) => this.setState({ water: text })} />
                </View>                
                <View style={styles.row}>
                    <View style={Global.styles.lineStyle} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Tiền phòng</Text>
                </View>
                <View style={styles.row}>
                    <TextInput style={styles.input} keyboardType='numeric' returnKeyType='done' value={roomPrice} placeholder='Tiền phòng' onChangeText={(text) => this.setState({ roomPrice: text })} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Tiền khác</Text>
                </View>
                <View style={styles.row}>
                    <TextInput style={styles.input} keyboardType='numeric' returnKeyType='done' value={otherPrice} placeholder='Tiền khác' onChangeText={(text) => this.setState({ otherPrice: text })} />
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => {
                        calculate({ month: 4, year: 2014, electric, water, unitPrice });
                    }} style={Global.styles.button}>
                        <Text style={Global.styles.buttonText}>Tạo hóa đơn</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.row}>
                    {Price ? (
                        <View>
                            <Text style={[styles.text, { marginTop: 10 }]}>Điện năng tiêu thụ: {Price.electric.used} kWh</Text>
                            <Text style={styles.text}>Tiền điện: {Price.electric.price} đồng</Text>
                            <Text style={styles.text}>Thuế VAT: {Math.round(Price.electric.price * 0.1)} đồng</Text>
                            <Text style={styles.text}>Nước tiêu thụ: {Price.water.used} &#13221;</Text>
                            <Text style={styles.text}>Tiền nước: {Math.round(Price.water.price)} đồng</Text>
                            <Text style={[styles.text, { fontWeight: 'bold', fontSize: 16 }]}>Tổng cộng: {Math.round(Price.totalPrice)} đồng</Text>
                        </View>
                    ) : undefined}
                </View> */}
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
    },
    input: {
        flex: 1,
        paddingVertical: 5,
        fontSize: 18,
        textAlign: 'center',
        borderRadius: 12,
        backgroundColor: Global.COLOR.BORDERBACKGROUND,
    },
    text: {
        flex: 1,
        fontSize: 18,
        textAlign: 'left',
        marginVertical: 10,
    }
});

const mapStateToProps = (state) => ({
    Price: state.calculateBillReducer.data.length > 0 ? state.calculateBillReducer.data[state.calculateBillReducer.data.length - 1].Price : undefined
})

const mapDispatchToProps = (dispatch) => ({
    calculate: (data) => dispatch(calculate(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CalculateBill);