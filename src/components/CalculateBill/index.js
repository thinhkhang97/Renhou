import React, { Component } from 'react';
import { StyleSheet, Alert, View, TextInput, Button, Text } from 'react-native';
import calculateElectric from './calculate';

class CalculateBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Electric: {
                old: '0',
                new: '',
                unit: [1678, 1734, 2014, 2536, 2834, 2927],
                limit: [50, 50, 100, 100, 100, 100],
            },
            Water: {
                old: '0',
                new: '',
                unitPrice: '',
            },
            Price: undefined,
        };
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.form}>
                        <Text style={styles.text}>Chỉ số điện mới</Text>
                        <TextInput style={[styles.input, { height: 'auto' }]} returnKeyType='done' keyboardType='number-pad' value={this.state.Electric.new} placeholder='Chỉ số điện mới' onChangeText={(text) => this.setState({ Electric: { ...this.state.Electric, new: text } })} />
                        <Text style={styles.text}>Chỉ số nuớc mới</Text>
                        <TextInput style={styles.input} keyboardType='number-pad' returnKeyType='done' value={this.state.Water.new} placeholder='Chỉ số nước mới' onChangeText={(text) => this.setState({ Water: { ...this.state.Water, new: text } })} />
                        <Text style={styles.text}>Đơn giá nước</Text>
                        <TextInput style={styles.input} keyboardType='numeric' returnKeyType='done' value={this.state.Water.unitPrice} placeholder='Đơn giá nước' onChangeText={(text) => this.setState({ Water: { ...this.state.Water, unitPrice: text } })} />
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.form}>
                        <Button title='Tính tiền' onPress={() => {
                            const electric = {};
                            electric.used = parseInt(this.state.Electric.new, 10) - parseInt(this.state.Electric.old, 10);
                            electric.price = calculateElectric(electric.used, this.state.Electric.unit, this.state.Electric.limit);
                            const water = {};
                            water.used = parseInt(this.state.Water.new, 10) - parseInt(this.state.Water.old, 10);
                            water.price = water.used * this.state.Water.unitPrice;
                            this.setState({ ...this.state, Price: { electric, water } });
                        }}></Button>
                        {this.state.Price ? (
                            <View>
                                <Text style={[styles.text, { marginTop: 10 }]}>Điện năng tiêu thụ: {this.state.Price.electric.used} kWh</Text>
                                <Text style={styles.text}>Tiền điện: {this.state.Price.electric.price} đồng</Text>
                                <Text style={styles.text}>Thuế VAT: {Math.round(this.state.Price.electric.price * 0.1)} đồng</Text>
                                <Text style={styles.text}>Tiền nước: {Math.round(this.state.Price.water.price)} đồng</Text>
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
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    form: {
        flex: 1,
        marginRight: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        width: '100%',
        textAlign: 'center',
        fontSize: 14,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
    },
    text: {
        fontSize: 14,
        textAlign: 'left',
        marginBottom: 10,
    }
});


export default CalculateBill;