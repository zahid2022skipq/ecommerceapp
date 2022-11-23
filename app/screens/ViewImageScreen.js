import React from "react";
import { Image, StyleSheet } from "react-native";

function ViewImageScreen(props) {
  return (
    <Image
      resizeMode="contain"
      style={styles.image}
      source={require("../assets/chair.jpg")}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ViewImageScreen;
