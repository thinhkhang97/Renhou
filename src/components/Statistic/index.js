import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Alert, View, TextInput, Button, Text, Picker } from 'react-native';
class Statistic extends Component {
    constructor(props) {
        super(props);
        const date = new Date();
        const listYear = Array.from({ length: 6 }, (v, k) => k + 2014);
        const listMonth = Array.from({ length: 12 }, (v, k) => k + 1);
        this.state = {
            year: '',
            month: '',
            listYear,
            listMonth,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <Picker
                        selectedValue={this.state.month}
                        style={{ width: '30%' }}
                        onValueChange={(month) =>
                            this.setState({ month: month })
                        }>
                        {this.state.listMonth.map(month => (
                            <Picker.Item key={month} label={'Tháng ' + month.toString()} value={month} />
                        ))}
                    </Picker>
                    <Picker
                        selectedValue={this.state.year}
                        style={{ width: '30%' }}
                        onValueChange={(year) =>
                            this.setState({ year: year })
                        }>
                        {this.state.listYear.map(year => (
                            <Picker.Item key={year} label={year.toString()} value={year} />
                        ))}
                    </Picker>
                </View>
                <View style={styles.form}>
                    <Button title='Xác nhận' onPress={() => {
                    }}></Button>
                </View>
            </View >
        )
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
        flexDirection: 'row',
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

export default Statistic