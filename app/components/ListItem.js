import React from "react";
import { View, StyleSheet } from "react-native";

function ListItem({ title, subTitle, image }) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
export default ListItem;
