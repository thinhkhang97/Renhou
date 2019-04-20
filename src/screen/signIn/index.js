import * as React from "react";
import { View, StyleSheet, Text, TextInput, SafeAreaView } from "react-native";
import { HeaderTitle, Input, MainButton, ProjectTitle, TextButton } from "../../components/baseComponent";
import GLOBAL from "../../Global";
import { connect } from 'react-redux';
import { authenticate } from '../../store/actions/authenticationAction';

class SignIn extends React.Component {

    static navigationOptions = { header: null }

    state = {
        email: 'khoa400@gmail.com',
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
        const { authenticate } = this.props;
        authenticate({
            email: this.state.email,
            password: this.state.password,
        })
        /// do something here before navigating
        // const { navigation } = this.props;
        // authenServices.login(this.state.email, this.state.password).then(res => {
        //     navigation.navigate("App");
        // }).catch(error => {
        //     console.log(error)
        // })
    }

    onPressForgetPassword = () => {
        /// do something here before navigating
        const { navigation } = this.props;
        navigation.navigate("ForgetPassword");
    }

    componentWillReceiveProps(props) {
        const { isAuthenticated, error } = props;
    }

    render() {
        const { isAuthenticating } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <ProjectTitle />
                <View style={styles.header}>
                    <HeaderTitle title="Đăng nhập" />
                </View>
                <Input onChangeText={this.onEmailChange} placeholder="Địa chỉ email" />
                <Input onChangeText={this.onPasswordChange} placeholder="Mật khẩu" secure />
                <MainButton disabled={isAuthenticating} title="Đăng nhập" onPress={this.onPressSignIn} />
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

const mapStateToProps = (state) => ({
    isAuthenticating: state.authenticationReducer.isAuthenticating,
    isAuthenticated: state.authenticationReducer.isAuthenticated,
    accessToken: state.authenticationReducer.accessToken,
    error: state.authenticationReducer.error,
})

const mapDispatchToProps = (dispatch) => ({
    authenticate: (data) => {
        dispatch(authenticate(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);