import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="close"
        color={colors.secondary}
        size={35}
        style={styles.closeIcon}
      />
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={35}
        color={colors.primary}
        style={styles.deleteIcon}
      />

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default ViewImageScreen;
