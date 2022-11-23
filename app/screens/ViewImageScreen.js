import React from "react";
import { Image, StyleSheet, View } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>

      <View style={styles.deleteIcon}></View>
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
    backgroundColor: "#fc5c65",
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  deleteIcon: {
    backgroundColor: "#4ecdc4",
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default ViewImageScreen;
