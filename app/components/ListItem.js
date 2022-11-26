import React from "react";
import { View, StyleSheet, Image } from "react-native";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
export default ListItem;
