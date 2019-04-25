import * as React from 'react';
import { View, ScrollView, FlatList, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import Global from '../../Global';
import Icon from 'react-native-vector-icons/Ionicons';
import Loading from '../../components/baseComponent/Loading';
import { loadRoomMember } from '../../store/actions/memberAction';
import { SignOut } from '../../store/actions/authenticationAction';
import { connect } from 'react-redux';

class ListMemberInRoom extends React.Component {
    componentDidMount() {
        const { userID, accessToken, loadRoomMember } = this.props;

        // loadRoomMember(userID, accessToken);
    }

    componentWillReceiveProps(props) {
        // const { loadingMembers, members, SignOut } = props;
        // if (!loadingMembers && !members) {
        //     Alert.alert('Lỗi', 'Có lỗi xảy ra khi tải dữ liệu');
        //     SignOut();
        // }
    }

    render() {
        const { members, navigation } = this.props;
        const roomID = navigation.getParam('roomID');
        if (members)
            return (
                <View style={styles.container}>
                    <ScrollView style={{ paddingTop: 20 }}>
                        {members.length > 0 ?
                            <FlatList
                                data={members}
                                renderItem={({ item }) => {
                                    return <InfoCard
                                        title={item.name}
                                        subTitle={item.phoneNumber}
                                        onPress={() => {
                                            this.props.navigation.navigate("UserProfile", { data: item });
                                        }}
                                    />
                                }
                                }
                                keyExtractor={item => item._id} /> : <Text>Chưa có người thuê</Text>}
                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('AddMember', { roomID })} style={styles.footer}><Icon name='ios-add-circle' size={50} color='red' /></TouchableOpacity>
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
    loadingMembers: state.memberReducer.loading,
    members: state.memberReducer.members,
})

const mapDispatchToProps = (dispatch) => ({
    loadRoomMember: (userID, token) => dispatch(loadRoomMember(userID, token)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ListMemberInRoom);