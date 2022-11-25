import React from "react";
import { Image, View, StyleSheet } from "react-native";

function ListingComponentScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
});

export default ListingComponentScreen;
