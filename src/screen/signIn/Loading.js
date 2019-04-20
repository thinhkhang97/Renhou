import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import GLOBAL from "../../Global";
class Loading extends Component {
    componentWillReceiveProps(props) {
        const { isAuthenticated, navigation } = props;
        if (isAuthenticated) {
            navigation.navigate("App");
        }
        else {
            navigation.navigate("SignIn");
        }
    }
    componentDidMount() {
        const { isAuthenticated, navigation } = this.props;
        if (isAuthenticated) {
            setTimeout(() => {
                navigation.navigate("App");
            }, 10);
        }
        else {
            setTimeout(() => {
                navigation.navigate("SignIn");
            }, 10);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 26, color: GLOBAL.COLOR.NAVIGATION}}>Đang tải dữ liệu...</Text>
                <Image style={{width: 120, height: 120}} source={require('../../images/loading.gif')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 16
    },
})

const mapStateToProps = (state) => ({
    isAuthenticated: state.authenticationReducer.isAuthenticated,
})

export default connect(mapStateToProps, undefined)(Loading);