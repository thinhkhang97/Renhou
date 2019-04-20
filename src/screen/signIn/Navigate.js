import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from '../../components/baseComponent/Loading';
import { connect } from 'react-redux';
class Navigate extends Component {
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
                <Loading />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})

const mapStateToProps = (state) => ({
    isAuthenticated: state.authenticationReducer.isAuthenticated,
})

export default connect(mapStateToProps, undefined)(Navigate);