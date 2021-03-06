import * as React from "react";
import {
  Button,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import Global from "../../../Global";
import Icon from "react-native-vector-icons/Ionicons";

export default class AllBill extends React.Component {
  state = {};
  render() {
    let date = [];
    let data = [];
    for (i = 0; i < 15; i++) {
      date.push(new Date(2019, 0, i + 1));
      data.push({
        key: date[i].toString(),
        date: date[i],
        total: 2100000,
        paid: i % 2 === 0
      });
    }
    return (
      <View style={styles.container}>
        <ScrollView style={{ paddingTop: 20 }}>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.bill}
                  onPress={() =>
                    this.props.navigation.navigate("Bill", {
                      roomID: this.props.navigation.getParam("roomID", -1),
                      date: item.date
                    })
                  }
                >
                  <View style={styles.item}>
                    <View style={styles.row}>
                      <Text style={styles.time}>
                        Thời gian: {item.date.getMonth() + 1}/
                        {item.date.getFullYear()}
                      </Text>
                      <Text style={styles.total}>
                        Tổng tiền:{" "}
                        {item.total
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                        đồng
                      </Text>
                    </View>
                    <Text
                      style={[
                        styles.right,
                        item.paid
                          ? { color: Global.COLOR.GRAY }
                          : { color: "#FE5430", fontWeight: "bold" }
                      ]}
                    >
                      {item.paid ? "Đã thanh toán" : "Chưa thanh toán"}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("CalculateBill", {
              roomID: this.props.navigation.getParam("roomID", -1)
            })
          }
          style={styles.footer}
        >
          <Icon name="ios-add-circle" size={50} color="red" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Global.COLOR.BACKGROUND,
    flex: 1
  },
  bill: {
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
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  time: {
    fontSize: 16
  },
  row: {
    flex: 5
  },
  total: {
    fontSize: 12,
    color: Global.COLOR.GRAY
  },
  right: {
    flex: 4,
    textAlign: "right",
    fontSize: 12
  },
  footer: {
    flexDirection: "column",
    alignSelf: "flex-end",
    marginVertical: 10,
    marginRight: 20
  }
});
