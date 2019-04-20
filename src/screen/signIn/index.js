import * as React from "react";
import { View, StyleSheet, Alert, SafeAreaView } from "react-native";
import { HeaderTitle, Input, MainButton, ProjectTitle, TextButton } from "../../components/baseComponent";
import GLOBAL from "../../Global";
import { connect } from 'react-redux';
import { authenticate } from '../../store/actions/authenticationAction';
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
        const { authenticate } = this.props;
        authenticate({
            email: this.state.email,
            password: this.state.password,
        })
    }

    onVerifyAgain() {
        authenServices.reverify(this.state.email).then(res => {
            Alert.alert('Thông báo', 'Email kích hoạt tài khoản đã được gửi đến email của bạn.');
        }).catch(error => {
            Alert.alert(error.response);
        });
    }

    onPressForgetPassword = () => {
        /// do something here before navigating
        const { navigation } = this.props;
        navigation.navigate("ForgetPassword");
    }

    componentWillReceiveProps(props) {
        const { isAuthenticated, error } = props;
        if (!isAuthenticated) {
            switch (error) {
                case 1:
                    Alert.alert('Lỗi', 'Email của bạn không tồn tại');
                    break;
                case 2:
                    Alert.alert('Lỗi', 'Tài khoản của bạn chưa được kích hoạt', [{
                        text: 'Kích hoạt tài khoản',
                        onPress: () => this.onVerifyAgain(),
                    }, {
                        text: 'Huỷ'
                    }]);
                    break;
                case 3:
                    Alert.alert('Lỗi', 'Mật khẩu không chính xác');
                    break;
                default: break;
            }
        }
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