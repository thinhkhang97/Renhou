import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Global from '../../Global';

class Bill extends Component {
    static navigationOptions = ({ navigation }) => {
        const date = navigation.getParam('date', new Date());
        return {
            title: 'Hóa đơn ' + (date.getMonth() + 1).toString() + '/' + date.getFullYear().toString(),
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
        const roomID = navigation.getParam('roomID', -1);
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.label}>Phòng</Text>
                    <View style={styles.data}><Text style={styles.dataText}>Phòng {roomID.toString()}</Text></View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Thời gian</Text>
                    <View style={styles.data}><Text style={styles.dataText}>{date.toLocaleDateString("vi-VN")}</Text></View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Số điện cũ</Text>
                    <View style={styles.data}><Text style={styles.dataText}>31402</Text></View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Số điện mới</Text>
                    <View style={styles.data}><Text style={styles.dataText}>31502</Text></View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tiền điện</Text>
                    <View style={styles.data}><Text style={styles.dataText}>300 000</Text></View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Số nước cũ</Text>
                    <View style={styles.data}><Text style={styles.dataText}>31402</Text></View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Số nước mới</Text>
                    <View style={styles.data}><Text style={styles.dataText}>31502</Text></View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Giá nước</Text>
                    <View style={styles.data}><Text style={styles.dataText}>500</Text></View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tiền nước</Text>
                    <View style={styles.data}><Text style={styles.dataText}>300 000</Text></View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tiền phòng</Text>
                    <View style={styles.data}><Text style={styles.dataText}>2 000 000</Text></View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tiền khác</Text>
                    <View style={styles.data}><Text style={styles.dataText}>100 000</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.lineStyle} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tổng tiền</Text>
                    <View style={styles.data}><Text style={styles.dataText}>4 000 000</Text></View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Trạng thái</Text>
                    <View style={styles.data}><Text style={styles.dataText}>Chưa thanh toán</Text></View>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button}>
                        <Text styles={styles.buttonText}>Thanh toán</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
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
        marginVertical: 5,
        marginHorizontal: 20,
    },
    label: {
        flex: 1,
        fontSize: 14,
    },
    data: {
        flex: 1,
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: Global.COLOR.BORDERBACKGROUND,
    },
    dataText: {
        color: Global.COLOR.GRAY,
        fontSize: 14,
    },
    lineStyle: {
        flex: 1,
        borderBottomWidth: 2,
        borderColor: '#848484',
        paddingVertical: 5,
    },
    buttonText: {
        fontSize: 50,
        color: 'white',
    },
    button: {
        flex: 1,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Global.COLOR.NAVIGATION,
    },
});

const mapStateToProps = (state) => ({
    // history: state.calculateBillReducer.data,
})

export default connect(mapStateToProps)(Bill);