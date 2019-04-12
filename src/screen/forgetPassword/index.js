import * as React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { HeaderTitle, Input, MainButton } from "../../components/baseComponent";

class ForgetPassword extends React.Component {

    onPressSignUp = () => {
        /// do something here before navigate
        const { navigation } = this.props;
        navigation.navigate("SignIn");
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <HeaderTitle title="Quên mật khẩu" />
                <Input placeholder="Địa chỉ email" />
                <MainButton title="Lấy lại mật khẩu" onPress={this.onPressSignUp} />
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

export default ForgetPassword