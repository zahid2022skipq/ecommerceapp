import React from "react";
import { View, StyleSheet, Image } from "react-native";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
export default ListItem;
