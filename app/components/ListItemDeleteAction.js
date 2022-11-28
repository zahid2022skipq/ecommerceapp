import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";
function ListItemDeleteAction({ handleDelete }) {
  return (
    <TouchableWithoutFeedback onPress={handleDelete}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          color={colors.primary}
        />
      </View>
    </TouchableWithoutFeedback>
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
