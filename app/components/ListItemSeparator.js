import React from "react";
import { View } from "react-native";
import { colors } from "../config/colors";

function ListItemSeparator(props) {
  return <View style={{ width: "100%", height: 1, backgroundColor: "#000" }} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

export default ListItemSeparator;
