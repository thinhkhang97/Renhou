import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, Text, Picker } from 'react-native';
import Global from '../../Global';

class Bill extends Component {
    static navigationOptions = ({ navigation }) => {
        const date = navigation.getParam('date', new Date());
        return {
            title: 'Hóa đơn ' + date.getMonth().toString() + '/' + date.getFullYear().toString(),
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTitleStyle: {
                color: Global.COLOR.NAVIGATION,
            },
            headerTintColor: Global.COLOR.NAVIGATION,
        };
    };
    render() {
        const { navigation } = this.props;
        const date = navigation.getParam('date', new Date());
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.label}>Phòng</Text>
                    <View style={styles.data}><Text style={styles.dataText}>ffff</Text></View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Thời gian</Text>
                    <View style={styles.data}><Text style={styles.dataText}>{date.toLocaleDateString("vi-VN")}</Text></View>
                </View>
            </View>
        )
        // const { history } = this.props;
        // const { result } = this.state;
        // return (
        //     <View style={styles.container}>
        //         <View style={styles.form}>
        //             <Picker
        //                 selectedValue={this.state.month}
        //                 style={{ width: '30%' }}
        //                 onValueChange={(month) =>
        //                     this.setState({ month: month })
        //                 }>
        //                 {this.state.listMonth.map(month => (
        //                     <Picker.Item key={month} label={'Tháng ' + month.toString()} value={month} />
        //                 ))}
        //             </Picker>
        //             <Picker
        //                 selectedValue={this.state.year}
        //                 style={{ width: '30%' }}
        //                 onValueChange={(year) =>
        //                     this.setState({ year: year })
        //                 }>
        //                 {this.state.listYear.map(year => (
        //                     <Picker.Item key={year} label={year.toString()} value={year} />
        //                 ))}
        //             </Picker>
        //         </View>
        //         <View style={styles.form}>
        //             <Button title='Xác nhận' onPress={() => {
        //                 const result = history.filter(item => item.Month === this.state.month && item.Year === this.state.year);
        //                 if (result.length > 0)
        //                     this.setState({ result: result[0] });
        //                 else
        //                     this.setState({ result: undefined });
        //             }}></Button>
        //         </View>
        //         {result ? <View>
        //             <Text style={[styles.text, { marginTop: 10 }]}>Điện năng tiêu thụ: {result.Price.electric.used} kWh</Text>
        //             <Text style={styles.text}>Tiền điện: {result.Price.electric.price} đồng</Text>
        //             <Text style={styles.text}>Thuế VAT: {Math.round(result.Price.electric.price * 0.1)} đồng</Text>
        //             <Text style={styles.text}>Nước tiêu thụ: {result.Price.water.used} &#13221;</Text>
        //             <Text style={styles.text}>Tiền nước: {Math.round(result.Price.water.price)} đồng</Text>
        //             <Text style={[styles.text, { fontWeight: 'bold', fontSize: 16 }]}>Tổng cộng: {Math.round(result.Price.totalPrice)} đồng</Text>
        //         </View> : <Text style={styles.text}>Chưa có dữ liệu</Text>}
        //     </View >
        // )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: Global.COLOR.BACKGROUND,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    label: {
        flex: 1,
        fontSize: 16,
    },
    data: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: Global.COLOR.BORDERBACKGROUND,
    },
    dataText: {
        color: Global.COLOR.GRAY,
        fontSize: 16,
    },
});

const mapStateToProps = (state) => ({
    // history: state.calculateBillReducer.data,
})

export default connect(mapStateToProps)(Bill);