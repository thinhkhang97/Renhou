import * as React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { HeaderTitle, Input, MainButton } from "../../components/baseComponent";
import { authenServices } from "../../services";

class SignUp extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleSignUpResult = res => {
        console.log("Res", res)
    }

    onPressSignUp = () => {
        /// do something here before navigate
        const {email, password} = this.state;
        authenServices.signUp(email, password).then(this.handleSignUpResult);
    }

    onChangeEmail = (email) => this.setState({email: email});

    onChangePass = (pass) => this.setState({password: pass})

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <HeaderTitle title="Tạo tài khoản" />
                <Input placeholder="Địa chỉ email" onChangeText={this.onChangeEmail} autoCapitalize="none"/>
                <Input placeholder="Mật khẩu" secure onChangeText={this.onChangePass}/>
                <MainButton title="Đăng ký" onPress={this.onPressSignUp} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    }
})

export default SignUp