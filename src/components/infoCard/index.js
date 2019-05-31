import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Avatar from "../avatar";

const url =
  "https://as01.epimg.net/us/imagenes/2018/06/06/futbol/1528244019_930352_1528244120_noticia_normal.jpg";

class InfoCard extends React.Component {
  static defaultProps = {
    avatar: url
  };
  render() {
    const { title, subTitle, avatar } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.onPress()}
      >
        <View style={styles.avatarContainer}>
          <Avatar source={{ uri: avatar }} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>

        <View style={styles.statusContainer} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    marginHorizontal: 20,
    borderColor: "white",
    height: 50,
    borderRadius: 3,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 1.3, height: 2.2 },
    shadowOpacity: 0.6,
    shadowRadius: 1,
    elevation: 2
  },
  avatarContainer: {
    width: 60,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center"
  },
  statusContainer: {
    width: 100
  },
  textTitle: {
    fontSize: 17
  },
  subTitle: {
    fontSize: 12
  }
});

export default InfoCard;
