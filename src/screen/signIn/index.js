import * as React from "react";
import { View, StyleSheet, Text, TextInput, SafeAreaView } from "react-native";
import { HeaderTitle, Input, MainButton, ProjectTitle, TextButton } from "../../components/baseComponent";
import GLOBAL from "../../Global";
import { authenServices } from '../../services';

class SignIn extends React.Component {

    static navigationOptions = { header: null }

    state = {
        email: 'khoa4001@gmail.com',
        password: '123456',
    }

    onEmailChange = (email) => {
        this.setState({ email: email });
    }

    onPasswordChange = (password) => {
        this.setState({ password: password });
    }

    onPressSignUp = () => {
        const { navigation } = this.props;
        navigation.navigate("SignUp");
    }

    onPressSignIn = () => {
        /// do something here before navigating
        const { navigation } = this.props;
        authenServices.login(this.state.email, this.state.password).then(res => {
            navigation.navigate("App");
        }).catch(error => {
            console.log(error)
        })
    }

    onPressForgetPassword = () => {
        /// do something here before navigating
        const { navigation } = this.props;
        navigation.navigate("ForgetPassword");
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ProjectTitle />
                <View style={styles.header}>
                    <HeaderTitle title="Đăng nhập" />
                </View>
                <Input onChangeText={this.onEmailChange} placeholder="Địa chỉ email" />
                <Input onChangeText={this.onPasswordChange} placeholder="Mật khẩu" secure />
                <MainButton title="Đăng nhập" onPress={this.onPressSignIn} />
                <TextButton title="Quên mật khẩu?" onPress={this.onPressForgetPassword} />
                <TextButton title="Đăng ký tài khoản" color={GLOBAL.COLOR.MAINCOLOR} onPress={this.onPressSignUp} />
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