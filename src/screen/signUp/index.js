import * as React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { HeaderTitle, Input, MainButton } from "../../components/baseComponent";

class SignUp extends React.Component {

    onPressSignUp = () => {
        /// do something here before navigate
        const { navigation } = this.props;
        navigation.navigate("SignIn");
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <HeaderTitle title="Tạo tài khoản" />
                <Input placeholder="Tên" />
                <Input placeholder="Địa chỉ email" />
                <Input placeholder="Mật khẩu" secure />
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