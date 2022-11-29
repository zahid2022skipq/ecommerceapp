import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";

function AppTextInput(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons />
      <TextInput />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
});
export default AppTextInput;
