import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import Avatar from "../../components/avatar";
import InfoRow from "../../components/infoRow";
import { MainButton } from "../../components/baseComponent";
import GLOBAL from "../../Global";

const url =
  "https://as01.epimg.net/us/imagenes/2018/06/06/futbol/1528244019_930352_1528244120_noticia_normal.jpg";

class UserProfile extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const onPressEdit = navigation.getParam('onPressEdit');
    const editMode = navigation.getParam('editMode');
    const rightTitle = editMode && editMode === true ? 'Lưu' : 'Sửa';
    return {
      title: "Hồ sơ",
      headerRight: <TouchableOpacity onPress={()=>onPressEdit()}>
           <Text style={styles.editText}>{rightTitle ? 'Sửa': rightTitle}</Text>
      </TouchableOpacity>,
      headerStyle: {
        backgroundColor: GLOBAL.COLOR.WHITE
      },
      headerTintColor: GLOBAL.COLOR.NAVIGATION,
      headerTitleStyle: {
        fontWeight: "400",
        fontSize: 24,
        color: GLOBAL.COLOR.BLACK
      }
    };
  };

  state = {
    memberData: null,
    roomData: null,
    editMode: false
  };

  onPress = () => {
    const { signOut } = this.props;
    signOut();
  };

  onFocusScreen = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data");
    const roomData = navigation.getParam('roomData');
    this.setState({roomData: roomData});
    console.log("room data", roomData);
    navigation.setParams({onPressEdit: this.onPressEdit})
    this.setState({ memberData: data });
  };

  onPressEdit = () => {
    this.setState({editMode: !this.state.editMode})
    const { navigation } = this.props;
    navigation.setParams({editMode: this.state.editMode});
    // console.log("Press edit");
  }

  renderContent() {
    if (this.state.memberData) {
      const { name, phone, idCard, email } = this.state.memberData;
      const { editMode, roomData } = this.state;
      const {name: roomName, address} = roomData;
      return (
        <ScrollView>
          <View style={styles.avatarContainer}>
            <Avatar size={120} source={{ uri: url }} />
          </View>
          <View style={styles.infoContainer}>
            <InfoRow editable={editMode} title="Họ và tên" value={name} />
            <InfoRow editable={editMode} title="Số điện thoại" value={phone} />
            <InfoRow editable={editMode} title="CMND" value={idCard} />
            <InfoRow editable={false} stable title="Phòng trọ" value={roomName} />
            <InfoRow editable={false} stable title="Địa chỉ" value={address} />
            <InfoRow editable={editMode} title="Email" value={email} />
          </View>
        </ScrollView>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents onWillFocus={this.onFocusScreen} />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  editText: {
    marginRight: 16,
    fontSize: 18,
    color: GLOBAL.COLOR.NAVIGATION
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  avatarContainer: {
    marginTop: 30,
    alignItems: "center",
    marginBottom: 20
  },
  signOut: {
    flex: 1,
    width: "auto",
    marginHorizontal: 32
  }
});

const mapDispatchToProps = dispatch => ({
  signOut: () => {
    dispatch(SignOut());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(UserProfile);
