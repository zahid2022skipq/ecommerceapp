import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native-web";
import { colors } from "../config/colors";

function AppButton({ title, handleBtn }) {
  return (
    <TouchableOpacity style={styles.button} onPress={handleBtn}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AppButton;
