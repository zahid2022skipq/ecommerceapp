import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";

function AppTextInput({ icon, ...otherprops }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} />}
      <TextInput placeholder={...otherprops} />
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
  inputText: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export default AppTextInput;
