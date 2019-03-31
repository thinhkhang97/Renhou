import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Alert, View, TextInput, Button, Text } from 'react-native';
import { calculate } from './CalculateBillAction';

class CalculateBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            water: '',
            electric: '',
            unitPrice: props.unitPrice,
        };
    }
    render() {
        const { Price, calculate } = this.props;
        const { water, electric, unitPrice } = this.state;
        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.form}>
                        <Text style={styles.text}>Chỉ số điện mới</Text>
                        <TextInput style={[styles.input, { height: 'auto' }]} returnKeyType='done' keyboardType='number-pad' value={electric} placeholder='Chỉ số điện mới' onChangeText={(text) => this.setState({ electric: text })} />
                        <Text style={styles.text}>Chỉ số nuớc mới</Text>
                        <TextInput style={styles.input} keyboardType='number-pad' returnKeyType='done' value={water} placeholder='Chỉ số nước mới' onChangeText={(text) => this.setState({ water: text })} />
                        <Text style={styles.text}>Đơn giá nước</Text>
                        <TextInput style={styles.input} keyboardType='numeric' returnKeyType='done' value={unitPrice} placeholder='Đơn giá nước' onChangeText={(text) => this.setState({ unitPrice: text })} />
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.form}>
                        <Button title='Tính tiền' onPress={() => {
                            calculate({ electric, water, unitPrice });
                            // const electric = {};
                            // electric.used = parseInt(this.state.Electric.new, 10) - parseInt(this.state.Electric.old, 10);
                            // electric.price = calculateElectric(electric.used, this.state.Electric.unit, this.state.Electric.limit);
                            // const water = {};
                            // water.used = parseInt(this.state.Water.new, 10) - parseInt(this.state.Water.old, 10);
                            // water.price = water.used * this.state.Water.unitPrice;
                            // this.setState({ ...this.state, Price: { electric, water } });
                        }}></Button>
                        {Price ? (
                            <View>
                                <Text style={[styles.text, { marginTop: 10 }]}>Điện năng tiêu thụ: {Price.electric.used} kWh</Text>
                                <Text style={styles.text}>Tiền điện: {Price.electric.price} đồng</Text>
                                <Text style={styles.text}>Thuế VAT: {Math.round(Price.electric.price * 0.1)} đồng</Text>
                                <Text style={styles.text}>Nước tiêu thụ: {Price.water.used} &#13221;</Text>
                                <Text style={styles.text}>Tiền nước: {Math.round(Price.water.price)} đồng</Text>
                                <Text style={[styles.text, { fontWeight: 'bold', fontSize: 16 }]}>Tổng cộng: {Math.round(Price.electric.price * 1.1 + Price.water.price)} đồng</Text>
                            </View>
                        ) : undefined}
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    form: {
        // flex: 1,
        // marginRight: 10,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // backgroundColor: '#F5FCFF',
    },
    input: {
        // width: '100%',
        // textAlign: 'center',
        // fontSize: 14,
        // borderRightWidth: 2,
        // borderLeftWidth: 2,
        // borderTopWidth: 2,
        // borderBottomWidth: 2,
    },
    text: {
        fontSize: 14,
        textAlign: 'left',
        marginBottom: 10,
    }
});

const mapStateToProps = (state) => ({
    Price: state.calculateBillReducer.Price,
    unitPrice: state.calculateBillReducer.Water.unitPrice,
})

const mapDispatchToProps = (dispatch) => ({
    calculate: (data) => dispatch(calculate(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CalculateBill);