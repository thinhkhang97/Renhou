import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Alert,
  Text,
  KeyboardAvoidingView
} from "react-native";
import { Input } from "../../components/baseComponent";
import Global from "../../Global";
import { MainButton } from "../../components/baseComponent";
import { addMember } from "../../store/actions/memberAction";
import { memberServices, roomServices } from "../../services";
class AddMember extends Component {
  static navigationOptions = () => {
    return {
      title: "Thêm thành viên",
      headerStyle: {
        backgroundColor: "white"
      },
      headerTitleStyle: {
        color: Global.COLOR.NAVIGATION
      },
      headerTintColor: Global.COLOR.NAVIGATION
    };
  };
  state = {
    name: "",
    identifier: "",
    phone: "",
    dob: "",
    email: "",
    adding: false
  };

  styleDOB(dob) {
    return dob
      .toString()
      .replace(/\B([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g, "-");
  }

  onPressAddMember = () => {
    const {userID, token, navigation} = this.props;
    const {name,identifier,phone,dob,email,adding} = this.state;
    const roomID = navigation.getParam('roomID');
    const dataToSave = {
      userId: userID,
      name,
      idCard: identifier,
      phone,
      email,
      delFlag: 0
    }
    roomServices.addMember(dataToSave,token,roomID).then(res => {
      // addRoom(res.data.data.room);
      navigation.pop();
    })
    .catch(error => {
      Alert.alert("Lỗi", error.response.data.data.message);
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <ScrollView style={styles.container}>
          <View style={styles.row}>
            <Input
              value={this.state.name}
              placeholder={"Họ và tên"}
              onChangeText={text => this.setState({ name: text })}
            />
          </View>
          <View style={styles.row}>
            <Input
              value={this.state.phone}
              keyboardType={"phone-pad"}
              placeholder={"Số điện thoại"}
              onChangeText={text => this.setState({ phone: text })}
            />
          </View>
          <View style={styles.row}>
            <Input
              value={this.state.identifier}
              keyboardType={"number-pad"}
              placeholder={"CMND"}
              onChangeText={text => this.setState({ identifier: text })}
            />
          </View>
          <View style={styles.row}>
            <Input
              value={this.state.email}
              keyboardType={"email-address"}
              placeholder={"Email"}
              onChangeText={text => this.setState({ email: text })}
            />
          </View>
          <MainButton
            title="Thêm"
            disabled={this.state.adding}
            onPress={this.onPressAddMember}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Global.COLOR.BACKGROUND,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: Global.COLOR.GRAY,
    paddingVertical: 10
  },
  text: {
    flex: 1,
    paddingVertical: 5,
    fontSize: 16,
    textAlign: "left",
    borderRadius: 12
  },
  data: {
    flex: 2,
    fontSize: 16,
    textAlign: "right",
    color: Global.COLOR.GRAY
  }
});

const mapStateToProps = state => ({
  token: state.authenticationReducer.accessToken,
  userID: state.authenticationReducer.userID
});

const mapDispatchToProps = dispatch => ({
  addMember: data => dispatch(addRoom(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMember);
