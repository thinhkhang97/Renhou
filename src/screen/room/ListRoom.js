import * as React from "react";
import {
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";
import Global from "../../Global";
import Icon from "react-native-vector-icons/Ionicons";
import Loading from "../../components/baseComponent/Loading";
import RoomItem from "../../components/baseComponent/RoomItem";
import { loadRoom } from "../../store/actions/roomAction";
import { SignOut } from "../../store/actions/authenticationAction";
import { connect } from "react-redux";

class ListRoom extends React.Component {
  componentDidMount() {
    const { userID, accessToken, loadRoom } = this.props;
    loadRoom(userID, accessToken);
  }

  componentWillReceiveProps(props) {
    const { loadingRoom, room, SignOut } = props;
    if (!loadingRoom && !room) {
      Alert.alert("Lỗi", "Có lỗi xảy ra khi tải dữ liệu");
      SignOut();
    }
  }

  renderRoomItem(item) {
    const { navigation } = this.props;
    return (
      <RoomItem
        item={item}
        onPress={() =>
          navigation.navigate("RoomDetail", {
            roomID: item._id
          })
        }
      />
    );
  }

  render() {
    const { room, navigation } = this.props;
    const hiredRoom = room ? room.filter(r=>r.status!=='empty') : [];
    if (hiredRoom)
      return (
        <View style={styles.container}>
          <ScrollView style={{ paddingTop: 20 }}>
            {hiredRoom.length > 0 ? (
              <FlatList
                data={hiredRoom}
                renderItem={({ item }) => {
                  return this.renderRoomItem(item);
                }}
                keyExtractor={item => item._id}
              />
            ) : (
              <Text>Chưa có phòng</Text>
            )}
          </ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddRoom")}
            style={styles.footer}
          >
            <Icon name="ios-add-circle" size={50} color={Global.COLOR.MAINCOLOR} />
          </TouchableOpacity>
        </View>
      );
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" }
        ]}
      >
        <Loading />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  footer: {
    flexDirection: "column",
    alignSelf: "flex-end",
    marginVertical: 10,
    marginRight: 20
  }
});

const mapStateToProps = state => ({
  accessToken: state.authenticationReducer.accessToken,
  userID: state.authenticationReducer.userID,
  loadingRoom: state.roomReducer.loading,
  room: state.roomReducer.data
});

const mapDispatchToProps = dispatch => ({
  loadRoom: (userID, token) => dispatch(loadRoom(userID, token)),
  SignOut: () => dispatch(SignOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRoom);
