import * as React from "react";
import {View, StyleSheet, Text, TextInput, SafeAreaView} from "react-native";
import {HeaderTitle, Input, MainButton, ProjectTitle, TextButton} from "../../components/baseComponent";
import GLOBAL from "../../Global";

class SignIn extends React.Component {

    static navigationOptions = {header: null}

    onPressSignUp = () => {
        const {navigation} = this.props;
        navigation.navigate("SignUp");
    }

    onPressSignIn = () => {
        /// do something here before navigating
        const {navigation} = this.props;
        navigation.navigate("App");
    }

    onPressForgetPassword = () => {
        /// do something here before navigating
        const {navigation} = this.props;
        navigation.navigate("ForgetPassword");
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <ProjectTitle/>
                <View style={styles.header}>
                <HeaderTitle title="Đăng nhập"/>
                </View>
                <Input placeholder="Địa chỉ email"/>
                <Input placeholder="Mật khẩu" secure/>
                <MainButton title="Đăng nhập" onPress={this.onPressSignIn}/>
                <TextButton title="Quên mật khẩu?" onPress={this.onPressForgetPassword}/>
                <TextButton title="Đăng ký tài khoản" color={GLOBAL.COLOR.MAINCOLOR} onPress={this.onPressSignUp}/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 16
    },
    header: {
        marginTop: 40,
    }
})

export default SignIn