import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";
function ListItemDeleteAction(props) {
  return (
    <View>
      <MaterialCommunityIcons
        name="trash-can"
        size={30}
        color={colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
