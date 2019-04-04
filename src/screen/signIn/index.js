import * as React from "react";
import {View, StyleSheet, Text, TextInput, SafeAreaView} from "react-native";
import {HeaderTitle, Input, MainButton, ProjectTitle, TextButton} from "../../components/baseComponent";
import GLOBAL from "../../Global";

class SignIn extends React.Component {

    static navigationOptions = {header: null}

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <ProjectTitle/>
                <View style={styles.header}>
                <HeaderTitle title="Đăng nhập"/>
                </View>
                <Input placeholder="Địa chỉ email"/>
                <Input placeholder="Mật khẩu" secure/>
                <MainButton title="Đăng nhập"/>
                <TextButton title="Quên mật khẩu?"/>
                <TextButton title="Đăng ký tài khoản" color={GLOBAL.COLOR.MAINCOLOR}/>
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