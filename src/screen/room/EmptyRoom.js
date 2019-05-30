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

class EmptyRoom extends React.Component {
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
    const emptyRoom = room ? room.filter(r=>r.status==='empty'):[];

    if (emptyRoom.length>0)
      return (
        <View style={styles.container}>
          <ScrollView style={{ paddingTop: 20 }}>
            {emptyRoom.length > 0 ? (
              <FlatList
                data={emptyRoom}
                renderItem={({ item }) => {
                  return this.renderRoomItem(item);
                }}
                keyExtractor={item => item._id}
              />
            ) : (
              <Text>Chưa có phòng trống</Text>
            )}
          </ScrollView>
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
)(EmptyRoom);
