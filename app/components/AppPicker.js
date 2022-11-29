import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function AppPicker({ icon, placeholder, ...otherprops }) {
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => console.log("tapped")}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.mediumGray}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.mediumGray}
          />
        </View>
      </TouchableWithoutFeedback>
    </React.Fragment>
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
  icon: {
    marginRight: 20,
  },
  inputText: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  text: {
    flex: 1,
  },
});
export default AppPicker;
