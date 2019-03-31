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
                <Picker
                    selectedValue={this.state.month}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(month) =>
                        this.setState({ month: month })
                    }>
                    {this.state.listMonth.map(month => (
                        <Picker.Item key={month} label={month.toString()} value={month} />
                    ))}
                </Picker>
                <Picker
                    selectedValue={this.state.year}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(year) =>
                        this.setState({ year: year })
                    }>
                    {this.state.listYear.map(year => (
                        <Picker.Item key={year} label={year.toString()} value={year} />
                    ))}
                </Picker>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
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

export default Statistic