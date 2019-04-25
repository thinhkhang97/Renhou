import * as React from 'react';
import { View, ScrollView, FlatList, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import Global from '../../Global';
import Icon from 'react-native-vector-icons/Ionicons';
import Loading from '../../components/baseComponent/Loading';
import { loadRoom } from '../../store/actions/roomAction';
import { SignOut } from '../../store/actions/authenticationAction';
import { connect } from 'react-redux';

class ListRoom extends React.Component {
    componentDidMount() {
        const { userID, accessToken, loadRoom } = this.props;
        loadRoom(userID, accessToken);
    }

    componentWillReceiveProps(props) {
        const { loadingRoom, room, SignOut } = props;
        if (!loadingRoom && !room) {
            Alert.alert('Lỗi', 'Có lỗi xảy ra khi tải dữ liệu');
            SignOut();
        }
    }

    render() {
        const { room, navigation } = this.props;
        if (room)
            return (
                <View style={styles.container}>
                    <ScrollView style={{ paddingTop: 20 }}>
                        {room.length > 0 ?
                            <FlatList data={room}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity style={styles.room} onPress={() => navigation.navigate('RoomDetail', {
                                            roomID: item._id,
                                        })}>
                                            <View style={styles.item}>
                                                <Text style={styles.text}>{item.name}</Text>
                                                <Text style={styles.date}>February 3</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }}
                                keyExtractor={item => item._id} /> : <Text>Chưa có phòng</Text>}
                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('AddRoom')} style={styles.footer}><Icon name='ios-add-circle' size={50} color='red' /></TouchableOpacity>
                </View>
            );
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Loading />
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Global.COLOR.BACKGROUND,
        flex: 1,
    },
    room: {
        marginBottom: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 2,
        marginHorizontal: 20,
        borderRadius: 4,
        borderColor: '#d6d7da',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 4,
    },
    date: {
        flex: 2,
        textAlign: 'right'
    },
    footer: {
        flexDirection: 'column',
        alignSelf: 'flex-end',
        marginVertical: 10,
        marginRight: 20,
    }
});

const mapStateToProps = (state) => ({
    accessToken: state.authenticationReducer.accessToken,
    userID: state.authenticationReducer.userID,
    loadingRoom: state.roomReducer.loading,
    room: state.roomReducer.data,
})

const mapDispatchToProps = (dispatch) => ({
    loadRoom: (userID, token) => dispatch(loadRoom(userID, token)),
    SignOut: () => dispatch(SignOut()),
})


export default connect(mapStateToProps, mapDispatchToProps)(ListRoom);