import * as React from 'react';
import { View, ScrollView, FlatList, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Global from '../../Global';
import Icon from 'react-native-vector-icons/Ionicons';
import Loading from '../../components/baseComponent/Loading';
import { loadRoomMember } from '../../store/actions/memberAction';
import { SignOut } from '../../store/actions/authenticationAction';
import { connect } from 'react-redux';
import { roomServices } from '../../services';
import InfoCard from '../../components/infoCard';

class ListMemberInRoom extends React.Component {
    state = {
        members: []
    }

    onFocusThisScreen = () => {
        const { userID, accessToken, loadRoomMember, navigation } = this.props;
        const roomID = navigation.getParam('roomID');
        roomServices.getAllMembersInRoom(userID,accessToken,roomID).then(res=>{
            this.setState({
                members: res.data.member
            })
        })
    }

    render() {
        const { members } = this.state;
        const roomID = this.props.navigation.getParam('roomID');
        const roomData = this.props.navigation.getParam('roomData');
        console.log("members", members);
        if (members)
            return (
                <View style={styles.container}>
                    <NavigationEvents onWillFocus={this.onFocusThisScreen}/>
                    <ScrollView style={{ paddingTop: 20 }}>
                        {members.length > 0 ?
                            <FlatList
                                data={members}
                                renderItem={({ item }) => {
                                    return <InfoCard
                                        title={item.name}
                                        subLabel='Liên hệ'
                                        subTitle={item.phone}
                                        onPress={() => {
                                            this.props.navigation.navigate("MemberProfile", { data: item, roomData });
                                        }}
                                    />
                                }
                                }
                                keyExtractor={item => item._id} /> : <Text>Chưa có người thuê</Text>}
                    </ScrollView>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddMember', { roomID })} style={styles.footer}><Icon name='ios-add-circle' size={50} color='red' /></TouchableOpacity>
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