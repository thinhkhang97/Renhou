import React, { Component } from 'react';
import { StyleSheet, Alert, View, TextInput, Button, TouchableOpacity, Text } from 'react-native';

class CalculateBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldElectric: '0',
            electric: '',
            water: '',
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Chỉ số cũ
                </Text>
                <TextInput style={styles.input} value={this.state.oldElectric} disabled />
                <Text style={[styles.text, { marginTop: 10 }]}>
                    Chỉ số mới
                </Text>
                <TextInput style={styles.input} keyboardType='number-pad' value={this.state.electric} placeholder='Chỉ số điện mới' onChangeText={(text) => this.setState({ electric: text })} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '60%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    input: {
        width: '100%',
        textAlign: 'center',
        fontSize: 18,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
    },
    text: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 10,
    }
});


export default CalculateBill;