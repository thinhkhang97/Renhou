import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class RoomItem extends React.Component {
  render() {
    const { item, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.item} onPress={item => onPress(item)}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.date}>February 3</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
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
  text: {
    flex: 4
  },
  date: {
    flex: 2,
    textAlign: "right"
  }
});

export default RoomItem;
